import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    proxy:{  //adding proxy for JSON Server URL (http://localhost:8000)
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite:(path) =>path.replace(/^\/api/,""),
      }
    }
  }
})
 