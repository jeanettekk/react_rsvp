import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), imagetools({ include: /^[^?]+\.(heif|avif|jpeg|jpg|png|tiff|webp|gif)(\?.*)?$/i })],
  base: '/react_rsvp/', // replace 'repository' with your repo name
});
