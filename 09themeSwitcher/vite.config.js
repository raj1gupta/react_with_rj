import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
darkMode:"class"
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
})
