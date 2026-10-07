import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  css: {
    // 🌟 Yeh browser ko CSS ka fresh map read karne par majboor karega
    devSourcemap: true,
  },
  server: {
    host: "localhost",
    port: 5173,
    strictPort: true,
    hmr: {
      host: "localhost",
      protocol: "ws",
      port: 5173,
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
