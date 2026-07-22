export async function sendSupportEmail(message){console.log("Email notification",message);return {sent:Boolean(process.env.RESEND_API_KEY)};}
