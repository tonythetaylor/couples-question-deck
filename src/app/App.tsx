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

const THEME_KEY = "sr-theme";
const BG_LIGHT_KEY = "sr-bg-light";
const BG_DARK_KEY = "sr-bg-dark";
const ACCENT_KEY = "sr-accent";

function getResolvedMode(): "light" | "dark" {
  const mode = (localStorage.getItem(THEME_KEY) ?? "system") as
    | "system"
    | "light"
    | "dark";

  const systemDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const shouldDark = mode === "dark" || (mode === "system" && systemDark);
  return shouldDark ? "dark" : "light";
}

function setThemeColorMeta(color: string) {
  // Update ALL theme-color metas (you have 2 with media queries sometimes)
  const metas = document.querySelectorAll<HTMLMetaElement>(
    'meta[name="theme-color"]',
  );
  metas.forEach((m) => m.setAttribute("content", color));
}

function computeStatusBarColor(): string {
  const resolved = getResolvedMode();

  const bgLight = localStorage.getItem(BG_LIGHT_KEY) || "#f6f7f9";
  const bgDark = localStorage.getItem(BG_DARK_KEY) || "#000000";

  const accent = (localStorage.getItem(ACCENT_KEY) || "").trim();

  // Base is the actual background for the mode
  const base = resolved === "dark" ? bgDark : bgLight;

  // If accent is off, just return base
  if (!accent) return base;

  // If accent is on, tint the base slightly toward accent.
  // This gives “theme-color” an accent vibe without becoming neon.
  // Uses CSS color-mix so it matches your design language.
  return `color-mix(in srgb, ${base} 78%, ${accent} 22%)`;
}

export default function App() {
  const [route, setRoute] = useState<Route>("home");

  useEffect(() => {
    bootstrapTheme();

    // Ensure browser underlay matches app background
    document.body.style.background = "var(--bg)";

    // Push initial theme-color for iOS/Chrome UI
    setThemeColorMeta(computeStatusBarColor());

    // Keep theme-color synced if storage changes (Settings updates localStorage)
    const onStorage = () => setThemeColorMeta(computeStatusBarColor());
    window.addEventListener("storage", onStorage);

    // Also update when focus returns (Safari sometimes needs a nudge)
    const onFocus = () => setThemeColorMeta(computeStatusBarColor());
    window.addEventListener("focus", onFocus);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  // When route changes, re-apply theme-color too (covers cases where Settings changes state locally)
  useEffect(() => {
    setThemeColorMeta(computeStatusBarColor());
  }, [route]);

  return (
    <div className="min-h-[100dvh] relative overflow-hidden">
      {/* Background enhancer layer (full viewport, including safe areas) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
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

        {/* CENTER ACCENT BLOOM */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 900px at 50% 50%, var(--accent-soft-strong), transparent 58%)",
            opacity: 0.8,
          }}
        />

        {/* EDGE FADE BACK TO THEME BG (TOP/BOTTOM + subtle sides) */}
        <div
          className="absolute inset-0"
          style={{
            background: `
      linear-gradient(to bottom, var(--bg) 0%, transparent 22%),
      linear-gradient(to top,    var(--bg) 0%, transparent 22%),
      linear-gradient(to right,  var(--bg) 0%, transparent 10%),
      linear-gradient(to left,   var(--bg) 0%, transparent 10%)
    `,
            opacity: 1,
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
