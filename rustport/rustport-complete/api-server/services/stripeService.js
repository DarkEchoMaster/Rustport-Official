import { stripe } from "../config/stripe.js";
import { env } from "../config/environment.js";

const PRICE_MAP = {
  "premium-1": { amount: 30000, label: "Rustport Premium Slot #1", recurring: true },
  "premium-2": { amount: 25000, label: "Rustport Premium Slot #2", recurring: true },
  "premium-3": { amount: 20000, label: "Rustport Premium Slot #3", recurring: true },
  "premium-4": { amount: 15000, label: "Rustport Premium Slot #4", recurring: true },
  "premium-5": { amount: 10000, label: "Rustport Premium Slot #5", recurring: true },
  "featured-day": { amount: 999, label: "Rustport Featured — 1 day" },
  "featured-week": { amount: 3499, label: "Rustport Featured — 1 week" },
  "featured-month": { amount: 8499, label: "Rustport Featured — 1 month" }
};

export async function createListingCheckout({ slot, metadata = {} }) {
  const selected = PRICE_MAP[slot];
  if (!selected) throw Object.assign(new Error("Select a valid listing plan."), { status: 400 });
  if (!stripe) return { checkoutUrl: null, demo: true };

  const session = await stripe.checkout.sessions.create({
    mode: selected.recurring ? "subscription" : "payment",
    line_items: [{
      quantity: 1,
      price_data: {
        currency: "usd",
        unit_amount: selected.amount,
        product_data: { name: selected.label },
        ...(selected.recurring ? { recurring: { interval: "month" } } : {})
      }
    }],
    success_url: `${env.frontendUrl}/my-servers?payment=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${env.frontendUrl}/add-server?payment=canceled`,
    metadata
  });
  return { checkoutUrl: session.url, sessionId: session.id };
}
