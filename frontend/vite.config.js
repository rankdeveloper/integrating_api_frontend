import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxying API requests starting with /api
      "/api": {
        target: "http://localhost:3000", // Your backend API server
        changeOrigin: true,
      },

      "/name": {
        target: "http://localhost:3000", // Your backend API server
        changeOrigin: true,
      },
    },
  },
});
