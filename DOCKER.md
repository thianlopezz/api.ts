# Docker Quick start

## Usando el archivo docker-compose.yml

```bash
docker network create proxy
docker compose up -d
```

## Usando Dockerfile

```bash
docker build . -t thianlopezz/tsc_api
docker run --name tsc_api -p 3000:3000 -d thianlopezz/tsc_api
```