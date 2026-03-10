---
sidebar_position: 3
---

# Voice Management

## Preset Voices

Models include built-in voices defined in `voices.json`.

### `list_preset_voices()`

```python
voices = tts.list_preset_voices()
# Returns: List[tuple[str, str]]  →  [(description, voice_id), ...]
```

### `get_preset_voice()`

```python
voice = tts.get_preset_voice(voice_name: str = None)
# Returns: dict  →  {"codes": Tensor, "text": str}
```

If `voice_name` is `None`, returns the default voice.

### Using a Preset Voice

```python
voices = tts.list_preset_voices()
for desc, vid in voices:
    print(f"{vid}: {desc}")

voice = tts.get_preset_voice("bac_si_tuyen")
audio = tts.infer(text="Chào bạn!", voice=voice)
```

## LoRA Adapters

Load custom fine-tuned models (PyTorch mode only, not GGUF):

### `load_lora_adapter()`

```python
success = tts.load_lora_adapter(
    lora_repo_id: str,    # HuggingFace repo with LoRA weights
    hf_token: str = None,
)
```

Loading a LoRA adapter also loads its `voices.json` if available, replacing existing voices.

### `unload_lora_adapter()`

```python
success = tts.unload_lora_adapter()
```

Restores original model weights.

## voices.json Format

```json
{
  "default_voice": "voice_name",
  "presets": {
    "voice_name": {
      "description": "Description of the voice",
      "text": "Transcript of the reference audio",
      "codes": [42, 17, 89, 55, ...]
    }
  }
}
```
