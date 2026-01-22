import { useEffect, useState } from "react";
import { HomePage } from "../pages/HomePage";
import { DeckPage } from "../pages/DesktopPage/DeckPage";
import { SavedPage } from "../pages/SavedPage";
import { SettingsPage } from "../pages/SettingsPage";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { applyTheme } from "../theme/theme";
import { Bookmark, Palette } from "lucide-react";

type Route = "home" | "deck" | "saved" | "settings";
type ThemeMode = "system" | "light" | "dark";

const THEME_KEY = "sr-theme";
const BG_LIGHT_KEY = "sr-bg-light";
const BG_DARK_KEY = "sr-bg-dark";
const ACCENT_KEY = "sr-accent";

/* ---------- bootstrap helpers ---------- */

function getStoredTheme(): ThemeMode {
  const v = localStorage.getItem(THEME_KEY);
  return v === "light" || v === "dark" || v === "system" ? v : "system";
}

function applyBackgroundOverrides(light: string, dark: string) {
  const root = document.documentElement;

  if (light) root.style.setProperty("--bg-override-light", light);
  else root.style.removeProperty("--bg-override-light");

  if (dark) root.style.setProperty("--bg-override-dark", dark);
  else root.style.removeProperty("--bg-override-dark");
}

function applyAccent(accent: string) {
  const root = document.documentElement;

  if (accent) {
    root.style.setProperty("--accent", accent);
    root.setAttribute("data-accent", "on");
  } else {
    root.style.removeProperty("--accent");
    root.removeAttribute("data-accent");
  }
}

/* ---------- App ---------- */

export default function App() {
  const [route, setRoute] = useState<Route>("home");

  useEffect(() => {
    applyTheme(getStoredTheme());

    applyBackgroundOverrides(
      localStorage.getItem(BG_LIGHT_KEY) ?? "",
      localStorage.getItem(BG_DARK_KEY) ?? ""
    );

    applyAccent(localStorage.getItem(ACCENT_KEY) ?? "");
    document.body.style.background = "var(--bg)";
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Background enhancer layer */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 800px at 50% -10%, rgba(255,255,255,0.10), transparent 55%)," +
              "radial-gradient(900px 700px at 50% 110%, rgba(0,0,0,0.10), transparent 60%)," +
              "radial-gradient(700px 500px at 18% 12%, var(--accent-soft), transparent 60%)," +
              "radial-gradient(700px 500px at 82% 18%, var(--accent-soft), transparent 62%)",
            opacity: 0.9,
          }}
        />

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

                    <div className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>
                      Saved cards live here. Theme settings live here too.
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{
                        background: "color-mix(in srgb, var(--fg) 3%, transparent)",
                        border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
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
                        background: "color-mix(in srgb, var(--fg) 3%, transparent)",
                        border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
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

                  <Button className="w-full" variant="ghost" onClick={() => setRoute("settings")}>
                    <span className="inline-flex items-center justify-center gap-2">
                      <Palette size={16} className="opacity-90" />
                      Theme settings
                    </span>
                  </Button>
                </div>

                <div className="mt-3 text-[11px]" style={{ color: "var(--muted)" }}>
                  One place for what you keep and how it looks.
                </div>
              </Card>
            </div>
          </div>
        )}

        {route === "deck" && <DeckPage onExit={() => setRoute("home")} />}
        {route === "saved" && <SavedPage onExit={() => setRoute("home")} />}
        {route === "settings" && <SettingsPage onExit={() => setRoute("home")} />}
      </div>
    </div>
  );
}