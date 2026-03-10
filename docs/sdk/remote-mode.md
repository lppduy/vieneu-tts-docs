---
sidebar_position: 4
---

# Remote Mode

Connect to a VieNeu-TTS server for lightweight client-side usage. Only the small codec runs locally.

## Setup

Start a server first (see [Remote Server](/docs/deployment/remote-server)):

```bash
docker run --gpus all -p 23333:23333 pnnbao/vieneu-tts:serve
```

## Client Usage

```python
from vieneu import Vieneu

tts = Vieneu(
    mode="remote",
    api_base="http://your-server-ip:23333/v1",
    model_name="pnnbao-ump/VieNeu-TTS",
)

# Works the same as other modes
audio = tts.infer(text="Chào bạn!")
tts.save(audio, "output.wav")
```

## Voice Cloning (Remote)

Voice cloning encodes audio locally, sends codes to server:

```python
audio = tts.infer(
    text="Đây là giọng nói được clone.",
    ref_audio="reference.wav",
    ref_text="Transcript of the reference audio.",
)
```

## When to Use

- Web apps / mobile apps connecting to a GPU server
- Google Colab notebooks
- Environments without GPU
- Multiple clients sharing one server
