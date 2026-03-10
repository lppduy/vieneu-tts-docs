---
sidebar_position: 1
slug: /
---

# Introduction

**VieNeu-TTS** is an advanced on-device Vietnamese Text-to-Speech (TTS) system with **instant voice cloning**.

Give it text, it speaks it back in natural Vietnamese — fully offline, no cloud API needed.

## Key Features

- **Instant Voice Cloning** — Clone any voice with just 3-5 seconds of reference audio
- **Code-switching** — Seamless transitions between Vietnamese and English
- **Real-time Streaming** — Start audio playback before the entire sentence is finished
- **Multiple Backends** — PyTorch (GPU), GGUF quantized (CPU), LMDeploy (fast GPU), Remote API
- **Production Ready** — 24 kHz waveform generation, audio watermarking

## How It Works

VieNeu-TTS uses a **causal language model** to generate speech. The core pipeline:

```
Text → Normalize → Phonemize (eSpeak NG) → LLM generates speech tokens → Codec decodes to audio
```

1. **Text normalization** — Converts numbers, abbreviations, punctuation to spoken form
2. **Phonemization** — eSpeak NG converts text to pronunciation symbols
3. **Token generation** — A transformer LLM predicts discrete speech tokens
4. **Audio decoding** — NeuCodec converts tokens into a 24kHz waveform

## Models

| Model | Format | Quality | Speed |
|-------|--------|---------|-------|
| VieNeu-TTS (0.5B) | PyTorch | Best | Very Fast (GPU) |
| VieNeu-TTS-0.3B | PyTorch | Great | Ultra Fast (2x) |
| GGUF Q8 variants | GGUF | Great | Fast (CPU) |
| GGUF Q4 variants | GGUF | Good | Very Fast (CPU) |

All models are hosted on [HuggingFace](https://huggingface.co/pnnbao-ump) and auto-downloaded on first use.

## Quick Start

```bash
git clone https://github.com/pnnbao97/VieNeu-TTS.git
cd VieNeu-TTS
uv sync
uv run vieneu-web
```

Open `http://127.0.0.1:7860` and start generating speech.
