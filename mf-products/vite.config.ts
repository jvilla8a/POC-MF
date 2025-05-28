import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'mf-products',
      filename: 'remoteEntry.js',
      exposes: {
        './Products': './src/components/Products.vue'
      },
      shared: ['vue']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5002
  },
  preview: {
    port: 5002,
    strictPort: true
  }
})
