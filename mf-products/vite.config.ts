import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mf-products',
      filename: 'remoteEntry.js',
      exposes: {
        './Products': './src/components/Products',
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
    port: 5002,
    cors: true,
    strictPort: true,
    origin: 'http://localhost:5002',
  },
  preview: {
    port: 5002,
    strictPort: true,
  },
})
