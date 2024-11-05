import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/function-1': {
        target: 'https://us-central1-arch-lambda-htech.cloudfunctions.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/function-1/, '/function-1')
      },
    },
  },
})
