export async function sendPivotText(message){console.log("SMS notification",message);return {sent:Boolean(process.env.PIVOT_API_KEY)};}
