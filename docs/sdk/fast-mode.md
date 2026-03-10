---
sidebar_position: 3
---

# Fast Mode (LMDeploy)

GPU-accelerated inference using LMDeploy for maximum throughput.

## Requirements

- NVIDIA GPU with 4GB+ VRAM
- CUDA 12.8+ and NVIDIA GPU Computing Toolkit

## Usage

```python
from vieneu import Vieneu

tts = Vieneu(
    mode="fast",
    backbone_repo="pnnbao-ump/VieNeu-TTS",  # or VieNeu-TTS-0.3B
)

audio = tts.infer(text="Xin chào bạn")
tts.save(audio, "output.wav")
```

## When to Use

- High-volume batch processing
- Server-side deployment
- Maximum inference speed on GPU

For CPU-only usage, use `standard` mode with GGUF models instead.
