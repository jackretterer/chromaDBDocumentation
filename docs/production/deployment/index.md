---
sidebar_position: 9
title: "🚀 Deployment"
---

# ☁️ Deployment

You can also deploy Chroma on a long-running server, and connect to it
remotely.

We currently have runbooks for an AWS and GCP implementation. They are semi-supported however should offer a starting point.

## Hosted Chroma

We want to offer hosted Chroma, and we need your help.

Fill out the survey to jump the wait-list. Coming Q3 2023.

[📝 30 second survey](https://airtable.com/shrOAiDUtS2ILy5vZ)

## Docker

You can run a Chroma server in a Docker container.

You can get the Chroma Docker image from [Docker Hub](https://hub.docker.com/r/chromadb/chroma), or from the [Chroma GitHub Container Registry](https://github.com/chroma-core/chroma/pkgs/container/chroma)

```sh
docker pull chromadb/chroma
docker run -p 8000:8000 chromadb/chroma
```

You can also build the Docker image yourself from the Dockerfile in the [Chroma GitHub repository](https://github.com/chroma-core/chroma)

```sh
git clone git@github.com:chroma-core/chroma.git
cd chroma
docker-compose up -d --build
```

The Chroma client can then be configured to connect to the server running in the Docker container.

```python
import chromadb
chroma_client = chromadb.HttpClient(host='localhost', port=8000)
```

### Authentication with Docker

By default, the Docker image will run with no authentication. Follow the [Authentication](./usage-guide#authentication) section of the Usage Guide to configure authentication in the Docker container.

You can also create a `.chroma_env` file setting the required environment variables and pass it to the Docker container with the `--env-file` flag when running the container.

```sh
docker run --env-file ./.chroma_env -p 8000:8000 chromadb/chroma
```
