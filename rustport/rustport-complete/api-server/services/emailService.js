import { env } from "../config/environment.js";

export async function sendSupportEmail(message) {
  if (!env.resendApiKey || !env.supportEmail) return { sent: false, reason: "not-configured" };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Rustport Support <onboarding@resend.dev>",
      to: [env.supportEmail],
      reply_to: message.email,
      subject: `[Rustport] ${message.subject}`,
      text: `Name: ${message.name}\nEmail: ${message.email}\nPhone: ${message.phone || "Not provided"}\n\n${message.message}`
    })
  });

  if (!response.ok) throw new Error(`Resend failed with status ${response.status}`);
  return { sent: true, data: await response.json() };
}
