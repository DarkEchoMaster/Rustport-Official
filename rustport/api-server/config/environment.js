import dotenv from "dotenv"; dotenv.config({path:new URL("../../.env",import.meta.url)});
export const env={port:Number(process.env.PORT||5000),frontendUrl:process.env.FRONTEND_URL||"http://localhost:5173",sessionSecret:process.env.SESSION_SECRET||"development-only-secret",steamApiKey:process.env.STEAM_API_KEY||"",stripeKey:process.env.STRIPE_SECRET_KEY||""};
