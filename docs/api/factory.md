---
sidebar_position: 1
---

# Vieneu() Factory

The main entry point for creating a VieNeu-TTS instance.

## Signature

```python
Vieneu(mode="standard", **kwargs)
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `mode` | `str` | `"standard"` | Backend mode: `"standard"`, `"fast"`, `"remote"`, `"xpu"` |

### Standard Mode kwargs

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `backbone_repo` | `str` | `"pnnbao-ump/VieNeu-TTS-0.3B-q4-gguf"` | HuggingFace repo or local path |
| `backbone_device` | `str` | `"cpu"` | `"cpu"`, `"cuda"`, `"mps"` |
| `codec_repo` | `str` | `"neuphonic/distill-neucodec"` | Codec model repo |
| `codec_device` | `str` | `"cpu"` | Device for codec |
| `hf_token` | `str` | `None` | HuggingFace token for private models |

### Remote Mode kwargs

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `api_base` | `str` | required | Server URL (e.g., `"http://host:23333/v1"`) |
| `model_name` | `str` | required | Model ID on the server |

## Returns

An instance of `BaseVieneuTTS` (the specific subclass depends on `mode`).

## Examples

```python
# Default: GGUF Q4 on CPU
tts = Vieneu()

# PyTorch on GPU
tts = Vieneu(backbone_repo="pnnbao-ump/VieNeu-TTS-0.3B", backbone_device="cuda")

# LMDeploy fast mode
tts = Vieneu(mode="fast", backbone_repo="pnnbao-ump/VieNeu-TTS")

# Remote client
tts = Vieneu(mode="remote", api_base="http://server:23333/v1", model_name="pnnbao-ump/VieNeu-TTS")
```
