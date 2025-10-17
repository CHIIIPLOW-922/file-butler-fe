import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // 屏蔽 node_modules 中的 Sass 库警告
        quietDeps: true
      }
    }
  },
  plugins: [vue()],
  server: {
    port: 8999,
    hmr: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/butler',
        changeOrigin: true, // 修改请求头的 Host 为目标服务器的 URL
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve('src')  // ✅ 使用 path.resolve 定义路径别名
    }
  },
})
