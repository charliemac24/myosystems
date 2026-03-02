# MYO Systems

## Environment
Copy `.env.example` to `.env` and set:
- `RESEND_API_KEY` (Resend API key; if unset, submissions are still stored but email is skipped)
- `ADMIN_NOTIFY_EMAIL` (where notifications are sent; defaults to project owner email)
- `PORT` (optional, defaults to 5000)

## Run with Docker Desktop (Windows)
From PowerShell:

```powershell
cd C:\Users\Charlie\Desktop\Github\myosystems
Copy-Item .env.example .env
docker compose up --build -d
```

Open `http://localhost:5000`.

Useful commands:

```powershell
# View logs
docker compose logs -f

# Stop containers
docker compose down

# Rebuild after code changes
docker compose up --build -d
```

## Production Deployment (Docker)
1. Create production env file:

```powershell
cd C:\Users\Charlie\Desktop\Github\myosystems
Copy-Item .env.production.example .env.production
```

2. Edit `.env.production` and set real values (especially `RESEND_API_KEY` and `ADMIN_NOTIFY_EMAIL`).
3. Build and run the production stack:

```powershell
docker compose -f docker-compose.prod.yml up --build -d
```

4. Useful production commands:

```powershell
# Production logs
docker compose -f docker-compose.prod.yml logs -f

# Restart production stack
docker compose -f docker-compose.prod.yml up -d

# Stop production stack
docker compose -f docker-compose.prod.yml down
```

## Development
```
npm run dev
```
