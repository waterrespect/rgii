import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    cors: true,
    open: true,
    //  端口：
    port: 7473,
    //  IP地址:
    host: "0.0.0.0",
    //  跨域代理
    proxy: {
      '/api': {
        target: 'http://localhost:6363',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
