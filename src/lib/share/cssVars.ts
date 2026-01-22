function readCssVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

export function getShareThemeVars() {
  return {
    bg: readCssVar("--bg") || "#ffffff",
    fg: readCssVar("--fg") || "#0f172a",
    muted: readCssVar("--muted") || "#475569",
    card: readCssVar("--card") || "#ffffff",
    accent: readCssVar("--accent") || "#2563eb",
    accentSoft: readCssVar("--accent-soft") || "rgba(37,99,235,0.12)",
  };
}

export function applyShareVars(el: HTMLElement, vars: ReturnType<typeof getShareThemeVars>) {
  el.style.setProperty("--share-bg", vars.bg);
  el.style.setProperty("--share-fg", vars.fg);
  el.style.setProperty("--share-muted", vars.muted);
  el.style.setProperty("--share-card", vars.card);
  el.style.setProperty("--share-accent", vars.accent);
  el.style.setProperty("--share-accent-soft", vars.accentSoft);
}