require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// In production, you can restrict CORS to your LIVE website URL to prevent ANYONE ELSE from calling your backend!
const ALLOWED_ORIGIN = process.env.FRONTEND_URL || '*'; // Set to '*' for testing, restrict to your domain later.

app.use(cors({
    origin: ALLOWED_ORIGIN,
    methods: ['POST', 'GET']
}));

app.use(express.json());

// Secure Environment Variables (Not visible to the public)
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// POST Endpoint to receive tracking data from your frontend
app.post('/api/track', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
            console.error("Missing Telegram configuration in backend!");
            return res.status(500).json({ error: 'Backend configuration error (Check .env)' });
        }

        // Send to Telegram securely from the Server
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Telegram API Error:', data);
            return res.status(500).json({ error: 'Failed to send telegram notification' });
        }

        res.status(200).json({ success: true, message: 'Tracking data sent securely!' });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Health check endpoint just to verify the server is running
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Backend is 100% Secure and Running!' });
});

app.listen(PORT, () => {
    console.log(`🔒 Secure Backend running on port ${PORT}`);
    if (!TELEGRAM_BOT_TOKEN) {
        console.warn("⚠️ WARNING: TELEGRAM_BOT_TOKEN is not set in your .env file!");
    }
});
