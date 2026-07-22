import dotenv from "dotenv";

dotenv.config({ path: new URL("../../.env", import.meta.url) });

const first = (...values) => values.find(value => value !== undefined && value !== null && String(value).trim() !== "") || "";

export const env = {
  nodeEnv: first(process.env.NODE_ENV, "development"),
  port: Number(first(process.env.PORT, 5000)),
  frontendUrl: first(process.env.FRONTEND_URL, "http://localhost:5173"),
  apiUrl: first(process.env.API_URL, "http://localhost:5000"),
  sessionSecret: first(process.env.SESSION_SECRET, "development-only-secret"),

  // Supports both Rustport's standard names and the existing bot-account names.
  steamApiKey: first(process.env.STEAM_API_KEY, process.env.BOT_STEAM_API_KEY),
  steamReturnUrl: first(process.env.STEAM_RETURN_URL, `${first(process.env.API_URL, "http://localhost:5000")}/api/auth/steam/return`),
  steamRealm: first(process.env.STEAM_REALM, `${first(process.env.API_URL, "http://localhost:5000")}/`),
  adminSteamId: first(process.env.ADMIN_STEAM_ID, process.env.BOT_STEAM_ID),

  stripeSecretKey: first(process.env.STRIPE_SECRET_KEY),
  stripeWebhookSecret: first(process.env.STRIPE_WEBHOOK_SECRET),
  resendApiKey: first(process.env.RESEND_API_KEY),
  supportEmail: first(process.env.SUPPORT_EMAIL, process.env.BOT_EMAIL),

  messagingToken: first(process.env.PIVOT_API_KEY, process.env.SERVICE_TOKEN),
  messagingId: first(process.env.PIVOT_SERVICE_ID, process.env.SERVICE_ID),
  messagingPhone: first(process.env.PIVOT_FROM_NUMBER, process.env.SERVICE_PHONE_NUMBER),
  adminPhone: first(process.env.ADMIN_PHONE, process.env.SERVICE_PHONE_NUMBER)
};
