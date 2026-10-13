import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
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
