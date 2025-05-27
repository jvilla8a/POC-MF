import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mf-cart',
      filename: 'remoteEntry.js',
      exposes: {
        './Cart': './src/components/Cart',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5003,
    cors: true,
    strictPort: true,
    origin: 'http://localhost:5003',
  },
  preview: {
    port: 5003,
    strictPort: true,
  },
})
