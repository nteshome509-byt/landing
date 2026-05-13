import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['monsoon-certainty-prevail.ngrok-free.dev'],
    watch: {
      usePolling: true
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        capabilities: resolve(__dirname, "capabilities/index.html"),
        approach: resolve(__dirname, "approach/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        privacy: resolve(__dirname, "privacy/index.html"),
        terms: resolve(__dirname, "terms/index.html"),
        cookies: resolve(__dirname, "cookies/index.html"),
      },
    },
  },
});