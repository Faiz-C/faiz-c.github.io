import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    port: 8100,
  },
  build: {
    outDir: 'build'
  },
  plugins: [vue(), react(), checker({ typescript: true })]
})
