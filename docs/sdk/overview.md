---
sidebar_position: 1
---

# SDK Overview

The VieNeu-TTS SDK provides a Python interface for text-to-speech synthesis.

## Architecture

```
Vieneu(mode=...)          # Factory function
  ├── "standard" → VieNeuTTS        (GGUF / PyTorch)
  ├── "fast"     → FastVieNeuTTS    (LMDeploy GPU)
  ├── "remote"   → RemoteVieNeuTTS  (API client)
  └── "xpu"      → XPUVieNeuTTS    (Intel Arc GPU)
```

## Choosing a Mode

| Mode | Backend | Best For |
|------|---------|----------|
| `standard` | GGUF (CPU) or PyTorch | Default, works everywhere |
| `fast` | LMDeploy | Maximum GPU throughput |
| `remote` | HTTP API | Lightweight client, heavy server |
| `xpu` | Intel XPU | Intel Arc GPUs |

## Two Components

Every mode loads two components:

1. **Backbone** — The transformer LLM that generates speech tokens
2. **Codec** — NeuCodec that decodes tokens into audio waveform

Models are auto-downloaded from HuggingFace on first use and cached at `~/.cache/huggingface/hub/`.

## Basic Pattern

```python
from vieneu import Vieneu

# Create instance (downloads model on first run)
tts = Vieneu(mode="standard")

# Generate speech
audio = tts.infer(text="Xin chào bạn")

# Save to file
tts.save(audio, "output.wav")

# Clean up
tts.close()
```

## Context Manager

```python
with Vieneu() as tts:
    audio = tts.infer(text="Xin chào")
    tts.save(audio, "output.wav")
# Resources auto-released
```
