---
sidebar_position: 1
---

# Installation

## Prerequisites

- **Python 3.10+**
- **eSpeak NG** — Required for phonemization

### Install eSpeak NG

```bash
# macOS
brew install espeak

# Ubuntu/Debian
sudo apt install espeak-ng

# Fedora/Amazon Linux
sudo dnf install espeak

# Windows
# Download .msi from https://github.com/espeak-ng/espeak-ng/releases
```

### Optional: NVIDIA GPU

For maximum speed via LMDeploy or GGUF GPU acceleration:
- NVIDIA Driver >= 570.65 (CUDA 12.8+)
- [NVIDIA GPU Computing Toolkit](https://developer.nvidia.com/cuda-downloads)

## Install from Source (Recommended)

```bash
git clone https://github.com/pnnbao97/VieNeu-TTS.git
cd VieNeu-TTS
```

### GPU Support (Default)

```bash
uv sync
```

### CPU-Only (Lightweight)

```bash
# Linux/macOS
cp pyproject.toml pyproject.toml.gpu
cp pyproject.toml.cpu pyproject.toml
uv sync
```

## Install as Python Package

```bash
# Windows (CPU optimized)
pip install vieneu --extra-index-url https://pnnbao97.github.io/llama-cpp-python-v0.3.16/cpu/

# macOS (Metal GPU accelerated)
pip install vieneu --extra-index-url https://abetlen.github.io/llama-cpp-python/whl/metal/

# Linux / Generic
pip install vieneu
```

## Verify Installation

```python
from vieneu import Vieneu

tts = Vieneu()
audio = tts.infer(text="Xin chào")
tts.save(audio, "test.wav")
print("Installation successful!")
```
