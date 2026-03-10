---
sidebar_position: 2
---

# Remote Server

Deploy VieNeu-TTS as a high-performance API server powered by LMDeploy.

## Quick Start

```bash
docker run --gpus all -p 23333:23333 pnnbao/vieneu-tts:serve
```

## With Public Tunnel

No port forwarding needed:

```bash
docker run --gpus all -p 23333:23333 pnnbao/vieneu-tts:serve --tunnel
```

Check container logs for the public address (e.g., `bore.pub:31631`).

## Run 0.3B Model (Faster)

```bash
docker run --gpus all pnnbao/vieneu-tts:serve --model pnnbao-ump/VieNeu-TTS-0.3B --tunnel
```

## Serve a Fine-tuned Model

Mount your merged LoRA output:

```bash
docker run --gpus all \
  -v $(pwd)/finetune/output:/workspace/models \
  pnnbao/vieneu-tts:serve \
  --model /workspace/models/merged_model --tunnel
```

## Connecting Clients

See [Remote Mode](/docs/sdk/remote-mode) for client SDK usage.
