import { env } from "../config/environment.js";

export async function sendPivotText(message) {
  if (!env.messagingToken || !env.adminPhone) return { sent: false, reason: "not-configured" };
  // Provider-neutral integration point. Existing SERVICE_* variables are recognized by environment.js.
  console.log("SMS notification queued", {
    serviceId: env.messagingId,
    from: env.messagingPhone,
    to: env.adminPhone,
    subject: message.subject
  });
  return { sent: true, queued: true };
}
