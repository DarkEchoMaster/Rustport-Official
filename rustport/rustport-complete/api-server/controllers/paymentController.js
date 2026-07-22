import { stripe } from "../config/stripe.js";
import { env } from "../config/environment.js";
import { createListingCheckout } from "../services/stripeService.js";

export const listingCheckout = async (req, res) => {
  const { slot, ...metadata } = req.body;
  res.json(await createListingCheckout({ slot, metadata }));
};

export const cancelRenewal = (_req, res) => res.json({ canceled: true, activeUntil: new Date(Date.now()+20*86400000).toISOString() });

export const webhook = async (req, res) => {
  if (!stripe || !env.stripeWebhookSecret) return res.status(503).json({ message: "Stripe webhook is not configured." });
  const signature = req.headers["stripe-signature"];
  let event;
  try { event = stripe.webhooks.constructEvent(req.body, signature, env.stripeWebhookSecret); }
  catch (error) { return res.status(400).send(`Webhook Error: ${error.message}`); }
  console.log("Stripe event", event.type, event.id);
  res.json({ received: true });
};
