import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
 css: {
    // 🌟 Yeh browser ko CSS ka fresh map read karne par majboor karega
    devSourcemap: true,
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
