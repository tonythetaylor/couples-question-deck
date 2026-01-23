import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
import fs from "node:fs";

// GH Pages repo path (prod only)
const REPO = "/";

export default defineConfig(({ command }) => {
  const isDev = command === "serve";

  // Dev at "/" • Prod at "/couples-question-deck/"
  const base = isDev ? "/" : REPO;

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),

      VitePWA({
        registerType: "autoUpdate",
        manifestFilename: "manifest.webmanifest",

        includeAssets: [
          "favicon.svg",
          "pwa-192.png",
          "pwa-512.png",
        ],

        manifest: {
          /* =========================
             BRAND
             ========================= */
          name: "Is This Everything?",
          short_name: "IsThisEverything",
          description: "A conversation-first relationship space.",

          /* =========================
             PWA CHROME
             ========================= */
          theme_color: "#0b0f14",
          background_color: "#0b0f14",

          display: "standalone",
          orientation: "portrait",

          /* =========================
             ROUTING
             ========================= */
          start_url: base,
          scope: base,
          id: base,

          /* =========================
             ICONS
             ========================= */
          icons: [
            {
              src: "pwa-192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "pwa-512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },

        workbox: {
          globPatterns: [
            "**/*.{js,css,html,ico,png,svg,webmanifest}",
          ],
          navigateFallback: "index.html",
        },

        // IMPORTANT:
        // iOS + self-signed certs = SW install failures
        devOptions: {
          enabled: false,
          type: "module",
        },
      }),
    ],

    server: {
      host: true,
      https: {
        key: fs.readFileSync("./certs/dev.key"),
        cert: fs.readFileSync("./certs/dev.crt"),
      },
    },
  };
});