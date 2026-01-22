export type ThemeMode = "system" | "light" | "dark";

const KEY = "sr-theme";

export function getStoredTheme(): ThemeMode {
  const v = localStorage.getItem(KEY);
  return v === "light" || v === "dark" || v === "system" ? v : "system";
}

export function setStoredTheme(mode: ThemeMode) {
  localStorage.setItem(KEY, mode);
}

export function resolveDark(mode: ThemeMode) {
  if (mode === "dark") return true;
  if (mode === "light") return false;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

export function applyTheme(mode: ThemeMode) {
  const dark = resolveDark(mode);
  document.documentElement.classList.toggle("dark", dark);
  // Helps built-in controls match theme (scrollbars, form controls, etc.)
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
}