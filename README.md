# Recetario Alexa + MCP

Repositorio con dos partes: el motor MCP (recetas, ingredientes, precios) y el backend para la skill Alexa.

- **recetario-mcp/** – Motor MCP en Python (FastAPI). Brave Search API + scraping supermercados. Expone `/mcp/recetario.*`.
- **backend-alexa/** – Backend Node.js para la skill Alexa. Expone `/api/mcp/recipes`, `/api/mcp/ingredients`, etc. y llama a recetario-mcp cuando `MCP_BASE_URL` esta definido.

Flujo: Alexa (Lambda) -> backend-alexa -> recetario-mcp -> Brave / scraping.

## Estructura

```
recetario-alexa-mcp/
  recetario-mcp/     # Python, puerto 8012
  backend-alexa/     # Node, puerto 3001
```

## Uso local

1. **recetario-mcp:** `cd recetario-mcp && docker compose up -d` (o `python -m app.main`). Poner `BRAVE_API_KEY` en `.env`.
2. **backend-alexa:** `cd backend-alexa && MCP_BASE_URL=http://localhost:8012 node server.js`.
3. Lambda de Alexa: `API_RECETARIO_URL` = URL del backend (en produccion, la URL de Render u otro host).

## Despliegue (Render)

- Web Service 1: root `recetario-mcp`, runtime Python, start `uvicorn app.main:app --host 0.0.0.0 --port $PORT`.
- Web Service 2: root `backend-alexa`, runtime Node, start `node server.js`. Variable `MCP_BASE_URL` = URL del servicio recetario-mcp.

## Documentacion

- **recetario-mcp/README.md** – Tools, Brave API, Docker, API key.
- **backend-alexa/README.md** – Endpoints, MCP_BASE_URL, API key, pruebas.

No se sube `.env`; usar `.env.example` en cada carpeta como plantilla.
