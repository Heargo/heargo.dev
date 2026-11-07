import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  // Keep the VUE_APP_ prefix from the Vue CLI days so deploy env vars don't change.
  envPrefix: ['VITE_', 'VUE_APP_'],
  css: {
    preprocessorOptions: {
      // Variables and mixins only: global rules live in src/styles/global.scss, loaded once in main.js.
      scss: { additionalData: `@use "@/styles/variables" as *;\n` },
    },
  },
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.spec.js'],
  },
})
