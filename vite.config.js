import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
    }
  }
})