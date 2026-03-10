---
sidebar_position: 3
---

# System Requirements

## Minimum Requirements

| Component | Requirement |
|-----------|------------|
| Python | 3.10+ |
| RAM | 2 GB (GGUF Q4) |
| Disk | ~500 MB (model auto-downloaded) |
| eSpeak NG | Required |

## Recommended (CPU)

| Component | Recommendation |
|-----------|---------------|
| CPU | Modern i5/i7/M1+ |
| RAM | 4 GB+ |
| Model | GGUF Q4 or Q8 |

Streaming latency: under 300ms first chunk on modern i3/i5.

## Recommended (GPU)

| Component | Recommendation |
|-----------|---------------|
| GPU | NVIDIA with 4GB+ VRAM |
| Driver | >= 570.65 (CUDA 12.8+) |
| Model | PyTorch 0.5B or 0.3B |
| Backend | LMDeploy for maximum speed |

## Intel Arc GPU

Supported via PyTorch XPU (tested on Arc B580, A770 on Windows):

```bash
# Use the provided setup script
run setup_xpu_uv.bat
run run_xpu.bat
```

Tip: Intel Arc has high memory bandwidth — keep batch size high and minimize characters per chunk.

## Model Sizes

| Model | Disk | RAM Usage |
|-------|------|-----------|
| 0.5B PyTorch | ~2 GB | ~3 GB |
| 0.3B PyTorch | ~1.2 GB | ~2 GB |
| 0.3B GGUF Q8 | ~350 MB | ~500 MB |
| 0.3B GGUF Q4 | ~200 MB | ~300 MB |

Models are cached at `~/.cache/huggingface/hub/` after first download.
