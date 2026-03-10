---
sidebar_position: 6
---

# Voice Cloning

Clone any voice with just **3-5 seconds** of reference audio. No fine-tuning needed (zero-shot).

## How It Works

1. You provide a short audio clip + its transcript
2. The codec encodes the audio into speech tokens
3. These tokens are used as context for the LLM
4. The LLM continues generating in the same voice style

## Basic Cloning

```python
from vieneu import Vieneu

tts = Vieneu()

audio = tts.infer(
    text="Đây là giọng nói được clone.",
    ref_audio="path/to/speaker.wav",
    ref_text="Exact transcript of what the speaker says in the audio.",
)
tts.save(audio, "cloned_output.wav")
```

## Tips for Best Results

- **Audio quality:** Use clean recordings without background noise
- **Duration:** 3-5 seconds is ideal. Too short = poor quality, too long = wasted context
- **Transcript accuracy:** The `ref_text` must accurately match what's spoken
- **Language:** Reference audio should be in Vietnamese for best results

## Using Encoded Codes Directly

If you want to encode once and reuse:

```python
# Encode reference audio to codes
ref_codes = tts.encode_reference("speaker.wav")

# Reuse codes for multiple inferences
for text in texts:
    audio = tts.infer(
        text=text,
        ref_codes=ref_codes,
        ref_text="Transcript of reference audio.",
    )
```

## Preset Voices

Models come with built-in preset voices (stored in `voices.json`):

```python
# List available presets
voices = tts.list_preset_voices()
for description, voice_id in voices:
    print(f"{voice_id}: {description}")

# Use a preset
voice = tts.get_preset_voice("voice_name")
audio = tts.infer(text="Chào bạn!", voice=voice)
```
