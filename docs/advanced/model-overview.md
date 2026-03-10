---
sidebar_position: 3
---

# Model Overview

## Available Models

| Model | Format | Device | Quality | Speed |
|-------|--------|--------|---------|-------|
| VieNeu-TTS (0.5B) | PyTorch | GPU/CPU | Best | Very Fast (LMDeploy) |
| VieNeu-TTS-0.3B | PyTorch | GPU/CPU | Great | Ultra Fast (2x) |
| VieNeu-TTS Q8 GGUF | GGUF | CPU/GPU | Great | Fast |
| VieNeu-TTS Q4 GGUF | GGUF | CPU/GPU | Good | Very Fast |
| VieNeu-TTS-0.3B Q8 GGUF | GGUF | CPU/GPU | Great | Ultra Fast (1.5x) |
| VieNeu-TTS-0.3B Q4 GGUF | GGUF | CPU/GPU | Good | Extreme (2x) |

## Architecture

- **0.5B** — Fine-tuned from NeuTTS Air architecture. Maximum stability and quality.
- **0.3B** — Trained from scratch on VieNeu-TTS-1000h. 2x faster, ultra-low latency.

## Technical Details

| Spec | Value |
|------|-------|
| Training data | VieNeu-TTS-1000h (443,641 samples) |
| Audio codec | NeuCodec |
| Context window | 2,048 tokens |
| Output sample rate | 24 kHz |
| Watermark | Enabled by default |

## HuggingFace Links

- [VieNeu-TTS (0.5B)](https://huggingface.co/pnnbao-ump/VieNeu-TTS)
- [VieNeu-TTS-0.3B](https://huggingface.co/pnnbao-ump/VieNeu-TTS-0.3B)
- [Training Dataset](https://huggingface.co/datasets/pnnbao-ump/VieNeu-TTS-1000h)
