import torch
import torch.nn as nn
from torchvision import models, transforms
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware  # ✅ Import CORS middleware
from PIL import Image
import cv2
import numpy as np
import tempfile
import time
import os

# --- CONFIG ---
MODEL_PATH = "deepfake_temporal_detector.pth"
NUM_FRAMES = 30
IMG_HEIGHT = 224
IMG_WIDTH = 224
HAAR_PATH = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
face_cascade = cv2.CascadeClassifier(HAAR_PATH)

# --- DEVICE ---
device = torch.device("mps" if torch.backends.mps.is_available() else "cpu")

# --- TRANSFORMS ---
data_transform = transforms.Compose([
    transforms.Resize((IMG_HEIGHT, IMG_WIDTH)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

# --- MODEL DEFINITION ---
class CNN_LSTM_Model(nn.Module):
    def __init__(self):
        super(CNN_LSTM_Model, self).__init__()
        self.cnn_base = models.efficientnet_b0(weights=None)
        num_ftrs = self.cnn_base.classifier[1].in_features
        self.cnn_base.classifier = nn.Sequential(
            nn.Dropout(p=0.2, inplace=True),
            nn.Linear(num_ftrs, 512),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(512, 1)
        )
        self.cnn_feature_extractor = nn.Sequential(*list(self.cnn_base.children())[:-1])
        self.lstm_hidden_size = 512
        self.lstm = nn.LSTM(input_size=num_ftrs, hidden_size=self.lstm_hidden_size,
                            num_layers=1, batch_first=True)
        self.classifier = nn.Sequential(
            nn.Linear(self.lstm_hidden_size, 256),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(256, 1)
        )

    def forward(self, x):
        b, t, c, h, w = x.shape
        x = x.view(b * t, c, h, w)
        features = self.cnn_feature_extractor(x)
        features = features.view(b, t, -1)
        lstm_out, _ = self.lstm(features)
        out = self.classifier(lstm_out[:, -1, :])
        return out

# --- FASTAPI APP ---
app = FastAPI(title="Deepfake Temporal Detector API")

# ✅ Enable CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can replace "*" with your frontend URL for better security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- LOAD MODEL ---
model = CNN_LSTM_Model().to(device)
model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
model.eval()

# --- HELPER FUNCTIONS ---
def get_frame_indices(total, num_frames):
    if total < num_frames:
        idx = np.arange(total).tolist()
        idx.extend([total - 1] * (num_frames - total))
    else:
        idx = np.linspace(0, total - 1, num_frames, dtype=int)
    return idx

def process_video(video_path):
    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    frame_indices = get_frame_indices(total_frames, NUM_FRAMES)
    frames = []
    for i in frame_indices:
        cap.set(cv2.CAP_PROP_POS_FRAMES, i)
        ret, frame = cap.read()
        if not ret:
            continue
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.1, 5, minSize=(60, 60))
        if len(faces) > 0:
            (x, y, w, h) = sorted(faces, key=lambda f: f[2]*f[3], reverse=True)[0]
            frame = frame[y:y+h, x:x+w]
        else:
            h, w, _ = frame.shape
            cx, cy = w // 2, h // 2
            s = min(h, w)
            frame = frame[cy-s//2:cy+s//2, cx-s//2:cx+s//2]
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        pil_img = Image.fromarray(frame)
        frames.append(data_transform(pil_img))
    cap.release()
    if len(frames) == 0:
        return None
    while len(frames) < NUM_FRAMES:
        frames.append(frames[-1])
    tensor = torch.stack(frames).unsqueeze(0)
    return tensor

# --- API ROUTE ---
@app.post("/predict-video")
async def predict_video(file: UploadFile = File(...)):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".mp4") as temp:
        temp.write(await file.read())
        temp_path = temp.name

    start = time.time()
    tensor = process_video(temp_path)
    os.remove(temp_path)
    if tensor is None:
        return JSONResponse({"error": "Could not process video."}, status_code=400)

    tensor = tensor.to(device)
    with torch.no_grad():
        logit = model(tensor)
        prob = torch.sigmoid(logit).item()

    prediction = "real" if prob >= 0.5 else "fake"
    confidence = (prob if prediction == "real" else 1 - prob) * 100
    duration = time.time() - start

    return {
        "prediction": prediction,
        "confidence": round(confidence, 2),
        "analysis_time_sec": round(duration, 2)
    }
