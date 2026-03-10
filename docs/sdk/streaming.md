---
sidebar_position: 5
---

# Real-time Streaming

VieNeu-TTS supports ultra-low latency streaming — audio playback starts before the entire sentence is generated.

## Performance

- **Latency:** Under 300ms for first chunk on modern i3/i5 CPUs
- **Optimized for:** GGUF backend on CPU
- **Sample rate:** 24 kHz

## Web Demo

```bash
uv run vieneu-stream
```

Open `http://localhost:8001` in your browser.

## SDK Streaming

```python
from vieneu import Vieneu

tts = Vieneu()

for chunk in tts.infer_stream(text="Một đoạn văn rất dài..."):
    # Each chunk is a numpy array of audio samples
    play_audio(chunk)  # Your audio playback function
```

## Parameters

```python
tts.infer_stream(
    text="Your text here",
    max_chars=256,        # Max characters per internal chunk
    temperature=1.0,      # Sampling temperature
    top_k=50,             # Top-k sampling
    voice=voice_data,     # Optional preset voice
    ref_audio="ref.wav",  # Optional reference for cloning
    ref_text="...",       # Transcript of reference
)
```

## How It Works

1. Text is split into chunks
2. Each chunk is phonemized
3. GGUF model generates tokens via streaming
4. Every N tokens, a partial decode produces an audio chunk
5. Overlap-add smooths chunk boundaries

The streaming uses configurable parameters:
- `streaming_frames_per_chunk`: 25 frames per audio chunk
- `streaming_overlap_frames`: 1 frame overlap for smooth transitions
- `streaming_lookforward`: 10 frames lookahead for quality
