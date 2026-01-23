// src/helpers/themeBootstrap.ts
import { applyTheme } from "../../theme/theme";
import { applyAccentDerivedVars } from "./accent";

const THEME_KEY = "sr-theme";
const BG_LIGHT_KEY = "sr-bg-light";
const BG_DARK_KEY = "sr-bg-dark";
const ACCENT_KEY = "sr-accent";

type ThemeMode = "system" | "light" | "dark";

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

/**
 * Updates the actual status bar / browser UI tint.
 * IMPORTANT: This must target meta[name="theme-color"], not "accent".
 */
function setThemeColorMeta(color: string) {
  const metas = document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]');
  metas.forEach((m) => m.setAttribute("content", color));
}

/**
 * Pick a single "top-of-screen" color that matches your vibe.
 * - If accent is ON: blend bg + accent to approximate your accent wash.
 * - If accent is OFF: use bg.
 */
function computeStatusBarColor(accent: string): string {
  const root = document.documentElement;
  const bg = getComputedStyle(root).getPropertyValue("--bg").trim() || (root.classList.contains("dark") ? "#000000" : "#f6f7f9");

  if (!accent || accent === "transparent") return bg;

  // Best-effort: Safari support for color-mix is good on modern iOS.
  // If it ever fails, you still at least set theme-color to accent below.
  return `color-mix(in srgb, ${bg} 72%, ${accent} 28%)`;
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

  // Make derived vars exist (accent-soft, accent-soft-strong, etc.)
  applyAccentDerivedVars(accent);

  // Status bar / browser UI tint
  // If accent is on, set a blended "wash" color; otherwise use bg.
  const color = computeStatusBarColor(accent);

  // Some browsers may not like color-mix in meta; if so, fall back to accent/bg.
  if (color.startsWith("color-mix(")) {
    // Fallback safety: set to accent first, then set to bg-blend if supported by browser.
    // (Browsers that don't understand color-mix will ignore that assignment.)
    setThemeColorMeta(accent || (root.classList.contains("dark") ? "#000000" : "#f6f7f9"));
    setThemeColorMeta(color);
  } else {
    setThemeColorMeta(color);
  }
}

export function bootstrapTheme() {
  // 1) Apply theme class + theme-color metas for light/dark/system
  const mode = getStoredTheme();
  applyTheme(mode);

  // 2) Apply background overrides (these feed into --bg)
  applyBackgroundOverrides(
    (localStorage.getItem(BG_LIGHT_KEY) ?? "").trim(),
    (localStorage.getItem(BG_DARK_KEY) ?? "").trim()
  );

  // 3) Apply accent + derived vars + status bar tint
  const accent = (localStorage.getItem(ACCENT_KEY) ?? "").trim();
  applyAccent(accent);

  // 4) Ensure browser underlay matches your CSS bg
  document.body.style.background = "var(--bg)";

  // 5) Keep status bar correct when returning to the tab/app (iOS likes this)
  const sync = () => applyAccent((localStorage.getItem(ACCENT_KEY) ?? "").trim());
  window.addEventListener("focus", sync, { passive: true });
  document.addEventListener("visibilitychange", sync, { passive: true });
}