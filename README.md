### DeepGuard – Multimodal Deepfake Detection System
Overview

DeepGuard is a multimodal deepfake detection system designed to determine whether a video is real or fake by analyzing both visual (video) and audio signals.

Modern deepfake technologies manipulate not only facial expressions but also clone human voices. To address this challenge, DeepGuard processes both modalities in parallel, improving detection accuracy and robustness compared to single-modality systems.

Tech Stack
Frontend

Next.js

React.js

Tailwind CSS

Backend

Python

FastAPI

Flask

Deep Learning and Processing

PyTorch

OpenCV – Video processing

Librosa – Audio processing

Scikit-learn – Ensemble learning

Video Processing Pipeline

Video frames are extracted using OpenCV.

Faces are detected and cropped from each frame to reduce background noise.

Spatial feature extraction is performed using CNN models:

ResNet50

EfficientNet-B0

Temporal inconsistencies are analyzed using an LSTM model to detect:

Unnatural blinking

Lip-sync mismatches

Frame-level visual artifacts

This pipeline produces a Video Authenticity Score.

Audio Processing Pipeline

Audio is extracted from the uploaded video.

MFCC (Mel-Frequency Cepstral Coefficients) features are generated using Librosa.

A CRNN model analyzes the audio to detect:

Voice cloning artifacts

Frequency inconsistencies

Synthetic speech patterns

This pipeline generates an Audio Authenticity Score.

Fusion Strategy

DeepGuard uses a Late Fusion (Stacking Ensemble) approach to combine predictions from both pipelines.

Audio and video prediction scores are combined.

Logistic Regression is used as a meta-learner.

This approach improves robustness even if only one modality is manipulated.

Key Features

Multimodal deepfake detection using audio and video

CNN + LSTM architecture for spatial-temporal video analysis

CRNN model for detecting synthetic or cloned voices

Ensemble-based final decision using stacking

Modern web interface built with Next.js and React

Scalable backend APIs using FastAPI and Flask
