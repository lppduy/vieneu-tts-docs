---
sidebar_position: 2
---

# Inference Methods

## `infer()`

Generate speech from a single text input.

```python
audio = tts.infer(
    text: str,
    ref_audio: str = None,
    ref_codes: Tensor = None,
    ref_text: str = None,
    voice: dict = None,
    max_chars: int = 256,
    silence_p: float = 0.15,
    crossfade_p: float = 0.0,
    temperature: float = 1.0,
    top_k: int = 50,
    skip_normalize: bool = False,
)
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `str` | Text to synthesize |
| `ref_audio` | `str` | Path to reference audio for voice cloning |
| `ref_codes` | `Tensor` | Pre-encoded reference codes |
| `ref_text` | `str` | Transcript of reference audio |
| `voice` | `dict` | Preset voice dict from `get_preset_voice()` |
| `max_chars` | `int` | Max characters per chunk (default 256) |
| `silence_p` | `float` | Silence duration between chunks in seconds |
| `crossfade_p` | `float` | Crossfade duration between chunks |
| `temperature` | `float` | Sampling temperature (higher = more variation) |
| `top_k` | `int` | Top-k sampling (limits token choices) |
| `skip_normalize` | `bool` | Skip text normalization |

### Returns

`numpy.ndarray` — Audio waveform at 24 kHz.

### Voice Priority

1. `voice` dict (from preset)
2. `ref_audio` + `ref_text` (voice cloning)
3. `ref_codes` + `ref_text` (pre-encoded)
4. Default preset voice (if available)

---

## `infer_batch()`

Generate speech for multiple texts.

```python
audios = tts.infer_batch(
    texts: List[str],
    # Same voice/sampling params as infer()
)
```

### Returns

`List[numpy.ndarray]` — List of audio waveforms.

PyTorch mode uses true batch generation. GGUF processes sequentially.

---

## `infer_stream()`

Generate speech with streaming output (GGUF only).

```python
for chunk in tts.infer_stream(
    text: str,
    # Same voice/sampling params as infer()
):
    play_audio(chunk)
```

### Yields

`numpy.ndarray` — Audio chunks as they're generated.

---

## `save()`

Save audio to a WAV file.

```python
tts.save(audio: numpy.ndarray, output_path: str)
```

---

## `encode_reference()`

Encode reference audio to reusable codes.

```python
codes = tts.encode_reference(ref_audio_path: str)
```

### Returns

`torch.Tensor` — Encoded speech codes.

---

## `close()`

Release model resources and free memory.

```python
tts.close()
```

Or use the context manager:

```python
with Vieneu() as tts:
    audio = tts.infer(text="...")
```
