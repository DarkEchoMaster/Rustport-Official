import { sendSupportEmail } from "../services/emailService.js";
import { sendPivotText } from "../services/pivotService.js";

const messages = [];

export const create = async (req, res) => {
  const { name, email, phone = "", subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Name, email, subject, and message are required." });
  }

  const item = {
    id: Date.now(), name, email, phone, subject, message,
    status: "new", createdAt: new Date().toISOString()
  };
  messages.unshift(item);

  const results = await Promise.allSettled([sendSupportEmail(item), sendPivotText(item)]);
  res.status(201).json({
    submitted: true,
    id: item.id,
    notifications: results.map(result => result.status)
  });
};

export const listContactMessages = () => messages;
