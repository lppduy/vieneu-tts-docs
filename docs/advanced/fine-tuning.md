---
sidebar_position: 2
---

# Fine-tuning

Train VieNeu-TTS on your own voice or custom datasets using LoRA.

## Quick Start

```bash
cd finetune
python train.py --config config.yaml
```

## Google Colab

Use the provided notebook: `finetune/finetune_VieNeu-TTS.ipynb`

## Workflow

1. **Prepare data** — Audio files + transcripts
2. **Configure** — Edit training config (LoRA rank, learning rate, etc.)
3. **Train** — Run `train.py`
4. **Merge** — Merge LoRA weights into base model (optional)
5. **Use** — Load via `load_lora_adapter()` or serve merged model

## Documentation

See the detailed guide at [`finetune/README.md`](https://github.com/pnnbao97/VieNeu-TTS/blob/main/finetune/README.md).
