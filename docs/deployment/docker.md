---
sidebar_position: 1
---

# Docker Deployment

Deploy VieNeu-TTS without manual environment setup.

## Requirements

- Docker
- [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) (GPU support)

## Docker Compose

```bash
# GPU mode
docker compose -f docker/docker-compose.yml --profile gpu up
```

## Custom Docker Run

```bash
docker run --gpus all -p 7860:7860 pnnbao/vieneu-tts:latest
```

Access the Web UI at `http://localhost:7860`.

:::note
Docker deployment currently supports **GPU only**. For CPU, install from source.
:::
