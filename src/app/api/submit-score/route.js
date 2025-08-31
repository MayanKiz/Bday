// src/app/api/submit-score/route.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });
  const { name, score } = req.body || {};
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) return res.status(500).json({ success: false, message: 'Missing Telegram config' });

  try {
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const text = `🎮 New Arcade Score\nPlayer: ${name}\nScore: ${score}`;
    const telegramRes = await axios.post(telegramUrl, { chat_id: chatId, text });
    if (telegramRes.data.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false, message: 'Telegram API failed.' });
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message || 'Error sending message.' });
  }
}
