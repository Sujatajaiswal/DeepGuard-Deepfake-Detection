🛡️ DeepGuard – Multimodal Deepfake Detection System
📌 Overview

DeepGuard is a multimodal deepfake detection system that determines whether a video is real or fake by analyzing both visual (video) and audio signals.

Modern deepfakes manipulate not only faces but also voices. To address this, DeepGuard processes both modalities in parallel, increasing detection accuracy and robustness.

🚀 Tech Stack
💻 Frontend

Next.js

React.js

Tailwind CSS

🧠 Backend

Python

FastAPI

Flask

🤖 Deep Learning & Processing

PyTorch

OpenCV

Librosa

Scikit-learn

🎥 Video Processing Pipeline

Video frames are extracted using OpenCV

Faces are detected and cropped to reduce background noise

Spatial feature extraction using:

ResNet50

EfficientNet-B0

Temporal inconsistency detection using LSTM

Detects unnatural blinking

Lip-sync mismatches

Frame-level artifacts

Outputs a Video Authenticity Score

🎙️ Audio Processing Pipeline

Audio extracted from video

MFCC features generated using Librosa

CRNN model analyzes:

Voice cloning artifacts

Frequency inconsistencies

Synthetic speech patterns

Outputs an Audio Authenticity Score

🔗 Fusion Strategy

DeepGuard uses a Late Fusion (Stacking Ensemble) approach:

Combines audio & video predictions

Uses Logistic Regression as meta-learner

Improves robustness when only one modality is manipulated

🎯 Key Features

Multimodal Detection (Audio + Video)

CNN + LSTM for spatial-temporal learning

CRNN for voice anomaly detection

Ensemble-based final decision

Modern UI with Next.js

Scalable API backend

📊 Why DeepGuard?

✔ Handles both face manipulation and voice cloning
✔ More robust than single-modality systems
✔ Designed for real-world deepfake detection use cases

🔮 Future Improvements

Transformer-based architecture

Real-time streaming detection

Larger dataset training

Model optimization for deployment

👩‍💻 Author

Sujata Jaiswal
Information Science & Engineering
Deep Learning & Full Stack Developer
