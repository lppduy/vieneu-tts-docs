---
sidebar_position: 2
---

# Standard Mode

The default mode. Supports both GGUF quantized models (CPU) and PyTorch models (GPU/CPU).

## GGUF (CPU Optimized)

```python
from vieneu import Vieneu

# Default: loads 0.3B Q4 GGUF on CPU
tts = Vieneu()

# Or explicitly:
tts = Vieneu(
    backbone_repo="pnnbao-ump/VieNeu-TTS-0.3B-q4-gguf",
    backbone_device="cpu",
)
```

### Available GGUF Models

| Model | Repo ID |
|-------|---------|
| 0.3B Q4 (default) | `pnnbao-ump/VieNeu-TTS-0.3B-q4-gguf` |
| 0.3B Q8 | `pnnbao-ump/VieNeu-TTS-0.3B-q8-gguf` |
| 0.5B Q4 | `pnnbao-ump/VieNeu-TTS-q4-gguf` |
| 0.5B Q8 | `pnnbao-ump/VieNeu-TTS-q8-gguf` |

### GGUF on GPU

```python
tts = Vieneu(
    backbone_repo="pnnbao-ump/VieNeu-TTS-0.3B-q8-gguf",
    backbone_device="cuda",  # Offloads layers to GPU
)
```

## PyTorch (Full Precision)

```python
tts = Vieneu(
    backbone_repo="pnnbao-ump/VieNeu-TTS-0.3B",
    backbone_device="cuda",  # or "cpu", "mps"
)
```

### Batch Processing (PyTorch only)

PyTorch mode supports true batch generation for higher throughput:

```python
texts = ["Câu một.", "Câu hai.", "Câu ba."]
audios = tts.infer_batch(texts)
```

GGUF processes batches sequentially internally.

## Codec Options

| Codec | Repo ID | Notes |
|-------|---------|-------|
| DistillNeuCodec (default) | `neuphonic/distill-neucodec` | Lightweight |
| NeuCodec | `neuphonic/neucodec` | Full quality |
| ONNX Int8 | `neuphonic/neucodec-onnx-decoder-int8` | CPU only |

```python
tts = Vieneu(
    codec_repo="neuphonic/neucodec-onnx-decoder-int8",
    codec_device="cpu",
)
```
