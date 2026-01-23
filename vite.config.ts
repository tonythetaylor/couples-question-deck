import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
import fs from "node:fs";

const REPO = "/couples-question-deck/";

export default defineConfig({
  base: REPO,
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "pwa-192.png", "pwa-512.png"],
      manifest: {
        name: "Shared Reality Deck",
        short_name: "SharedReality",
        description: "Mobile-first couples question decks",
        theme_color: "#0b0f14",
        background_color: "#0b0f14",
        display: "standalone",
        start_url: REPO,
        scope: REPO,
        id: REPO,
        orientation: "portrait",
        icons: [
          { src: "pwa-192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512.png", sizes: "512x512", type: "image/png" },
        ],
      },

      devOptions: {
        enabled: true,
      },
    }),
  ],
  server: {
    host: true, // allow LAN access
    https: {
      key: fs.readFileSync("./certs/dev.key"),
      cert: fs.readFileSync("./certs/dev.crt"),
    },
  },
});