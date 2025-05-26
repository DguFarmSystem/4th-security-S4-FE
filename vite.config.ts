import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // @ → src/
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://memekly.koyeb.app',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path
      }
    }
  }
});