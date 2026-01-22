import { useEffect, useState } from "react";
import { HomePage } from "../pages/HomePage";
import { DeckPage } from "../pages/DesktopPage/DeckPage";
import { SavedPage } from "../pages/SavedPage";
import { SettingsPage } from "../pages/SettingsPage";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Bookmark, Palette } from "lucide-react";

import { bootstrapTheme } from "./helpers/themeBootstrap";

type Route = "home" | "deck" | "saved" | "settings";

export default function App() {
  const [route, setRoute] = useState<Route>("home");

  useEffect(() => {
    bootstrapTheme();

    // optional: ensure the browser underlay matches app background
    document.body.style.background = "var(--bg)";
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background enhancer layer */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
  {/* FULL-SCREEN ACCENT WASH */}
  <div
    className="absolute inset-0"
    style={{
      background: `
        linear-gradient(
          to bottom,
          var(--accent-soft-strong),
          transparent 65%
        )
      `,
      opacity: 0.55,
    }}
  />

  {/* EXISTING RADIAL ACCENTS (keep these) */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(900px 700px at 20% 12%, var(--accent-soft-strong), transparent 55%)," +
        "radial-gradient(900px 700px at 80% 18%, var(--accent-soft-strong), transparent 58%)",
      opacity: 0.9,
    }}
  />

  {/* NOISE LAYER (keep last) */}
  <div
    className="absolute inset-0"
    style={{
      opacity: 0.08,
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.25'/%3E%3C/svg%3E\")",
      mixBlendMode: "overlay",
    }}
  />
</div>

      {/* Content respects safe area */}
      <div className="pt-safe">
        {route === "home" && (
          <div className="space-y-4">
            <HomePage onStart={() => setRoute("deck")} />

            <div className="mx-auto max-w-md px-4 pb-10">
              <Card>
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div
                      className="text-[11px] font-extrabold tracking-[0.14em] uppercase"
                      style={{ color: "var(--muted)" }}
                    >
                      Library
                    </div>

                    <div
                      className="text-sm font-extrabold tracking-tight"
                      style={{ color: "var(--fg)" }}
                    >
                      Saved + Theme
                    </div>

                    <div
                      className="text-[11px] leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      Saved cards live here. Theme settings live here too.
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{
                        background:
                          "color-mix(in srgb, var(--fg) 3%, transparent)",
                        border:
                          "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
                        color: "var(--fg)",
                      }}
                      aria-hidden
                      title="Saved"
                    >
                      <Bookmark size={16} className="opacity-80" />
                    </span>

                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{
                        background:
                          "color-mix(in srgb, var(--fg) 3%, transparent)",
                        border:
                          "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
                        color: "var(--fg)",
                      }}
                      aria-hidden
                      title="Theme"
                    >
                      <Palette size={16} className="opacity-80" />
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Button className="w-full" onClick={() => setRoute("saved")}>
                    <span className="inline-flex items-center justify-center gap-2">
                      <Bookmark size={16} className="opacity-90" />
                      Saved cards
                    </span>
                  </Button>

                  <Button
                    className="w-full"
                    variant="ghost"
                    onClick={() => setRoute("settings")}
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      <Palette size={16} className="opacity-90" />
                      Theme settings
                    </span>
                  </Button>
                </div>

                <div
                  className="mt-3 text-[11px]"
                  style={{ color: "var(--muted)" }}
                >
                  One place for what you keep and how it looks.
                </div>
              </Card>
            </div>
          </div>
        )}

        {route === "deck" && <DeckPage onExit={() => setRoute("home")} />}
        {route === "saved" && <SavedPage onExit={() => setRoute("home")} />}
        {route === "settings" && (
          <SettingsPage onExit={() => setRoute("home")} />
        )}
      </div>
    </div>
  );
}
