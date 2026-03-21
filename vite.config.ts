import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Lets you open http://<your-lan-ip>:5173 on your phone (same Wi‑Fi) for mobile testing
    host: true,
  },
})
