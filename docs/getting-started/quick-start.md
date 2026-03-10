---
sidebar_position: 2
---

# Quick Start

## Web UI

The fastest way to try VieNeu-TTS:

```bash
uv run vieneu-web
```

Open `http://127.0.0.1:7860` — type text, pick a voice, click generate.

## Real-time Streaming

For ultra-low latency streaming (CPU optimized):

```bash
uv run vieneu-stream
```

Open `http://localhost:8001` — audio starts playing before the sentence finishes.

## Python SDK

### Basic Usage

```python
from vieneu import Vieneu

tts = Vieneu()

# Generate speech with default voice
audio = tts.infer(text="Xin chào, tôi là VieNeu.")
tts.save(audio, "output.wav")
```

### Voice Cloning

```python
audio = tts.infer(
    text="Đây là giọng nói được clone.",
    ref_audio="path/to/reference.wav",
    ref_text="Transcript of the reference audio."
)
tts.save(audio, "cloned.wav")
```

### Using Preset Voices

```python
# List available voices
voices = tts.list_preset_voices()
for description, voice_id in voices:
    print(f"{voice_id}: {description}")

# Use a specific voice
voice = tts.get_preset_voice("voice_name")
audio = tts.infer(text="Chào bạn!", voice=voice)
```

### Streaming

```python
for audio_chunk in tts.infer_stream(text="Một đoạn văn dài..."):
    # Process each audio chunk as it's generated
    play_audio(audio_chunk)
```

### Batch Processing

```python
texts = ["Câu một.", "Câu hai.", "Câu ba."]
audios = tts.infer_batch(texts)

for i, audio in enumerate(audios):
    tts.save(audio, f"output_{i}.wav")
```
