# MYO Systems

## Environment
Copy `.env.example` to `.env` and set:
- `RESEND_API_KEY` (Resend API key; if unset, submissions are still stored but email is skipped)
- `ADMIN_NOTIFY_EMAIL` (where notifications are sent; defaults to project owner email)
- `PORT` (optional, defaults to 5000)

## Development
```
npm run dev
```
