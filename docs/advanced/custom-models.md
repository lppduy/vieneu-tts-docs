---
sidebar_position: 1
---

# Custom Models

Load custom models from HuggingFace or local paths via the SDK or Web UI.

## Via SDK

```python
from vieneu import Vieneu

# Load from HuggingFace
tts = Vieneu(backbone_repo="your-username/your-model")

# Load from local path
tts = Vieneu(backbone_repo="/path/to/your/model")
```

## Via Web UI

The Web UI provides a model selector where you can enter any HuggingFace repo ID or local path.

## LoRA Adapters

```python
tts = Vieneu(
    backbone_repo="pnnbao-ump/VieNeu-TTS",
    backbone_device="cuda",
)

# Load LoRA
tts.load_lora_adapter("your-username/your-lora-adapter")

# Generate with fine-tuned model
audio = tts.infer(text="Chào bạn!")

# Unload to restore original
tts.unload_lora_adapter()
```

:::note
LoRA adapters require PyTorch backbone. Not supported with GGUF models.
:::
