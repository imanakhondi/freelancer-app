import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        short_name: "IMAN",
        name: "Freelancer App",
        icons: [
          {
            src: "icons/icon-192x192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "icons/icon-512x512.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            src: "icons/icon-1024x512.png",
            type: "image/png",
            sizes: "1024x512",
          },
        ],
        start_url: ".",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
