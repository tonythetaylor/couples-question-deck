// src/helpers/themeBootstrap.ts
import { applyTheme } from "../../theme/theme";
import { applyAccentDerivedVars } from "./accent";

const THEME_KEY = "sr-theme";
const BG_LIGHT_KEY = "sr-bg-light";
const BG_DARK_KEY = "sr-bg-dark";
const ACCENT_KEY = "sr-accent";

function getStoredTheme() {
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

export function bootstrapTheme() {
  applyTheme(getStoredTheme());

  applyBackgroundOverrides(
    localStorage.getItem(BG_LIGHT_KEY) ?? "",
    localStorage.getItem(BG_DARK_KEY) ?? ""
  );

  const accent = (localStorage.getItem(ACCENT_KEY) ?? "").trim();
  applyAccent(accent);
  applyAccentDerivedVars(accent); // ✅ makes --accent-soft-strong real

  document.body.style.background = "var(--bg)";
}