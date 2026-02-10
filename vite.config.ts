import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ← разрешает подключения с любого IP
    port: 80,      // или другой порт по желанию
    allowedHosts: ['cooldailyroutine.ru'],
  },
})
