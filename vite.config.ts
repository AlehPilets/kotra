import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { qrcode } from 'vite-plugin-qrcode'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
		react(),
		tailwindcss(),
		qrcode() 
	],
	base: "/kotra/",
	build: {
    chunkSizeWarningLimit: 1000
  },
	server: {
    port: 5175, 
  },
})
