# Deployment outline

1. Install Node.js and MySQL on the VPS.
2. Import the database schema.
3. Put production secrets in `.env`.
4. Build the frontend with `npm run build`.
5. Run the API with a process manager.
6. Reverse proxy the domain to Express and serve the frontend build.
7. Configure Stripe webhook to `/api/payments/webhook`.
8. Point DNS records for Rustport.com to the VPS.
