# Rustport

Full-stack Rust server-list starter built from the project specification.

## Stack

- React + Vite
- React Router
- React Icons
- Express
- MySQL / phpMyAdmin
- Steam OpenID via Passport
- Stripe checkout and webhook placeholders
- Socket.IO
- Resend and Pivot/SMS service adapters

## Run locally

1. Copy `.env.example` to `.env`.
2. Create a MySQL database named `rustport`.
3. Import `api-server/database/schema.sql`.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open `http://localhost:5173`.

The API uses demo data when MySQL is unavailable, so the UI can still be reviewed.

Do not place private API keys in the React frontend or commit `.env`.
