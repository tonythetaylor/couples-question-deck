const THEME_META_SELECTOR = 'meta[name="theme-color"]';



/**
 * Sets the browser/UI chrome color.
 * If accent is enabled, we tint the base bg toward the accent (subtle).
 * If accent is off, it stays pure bg.
 */
export function setThemeColorMeta(opts: {
  resolvedMode: "light" | "dark";
  bgLight: string;   // fallback light bg (e.g. "#f6f7f9")
  bgDark: string;    // fallback dark bg (e.g. "#000000")
  accent?: string;   // "#rrggbb" or ""
  accentEnabled?: boolean;
}) {
  const { resolvedMode, bgLight, bgDark, accent = "", accentEnabled = false } = opts;

  const base = resolvedMode === "dark" ? bgDark : bgLight;

  // If accent is on, tint the meta color a bit toward the accent
  // (keeps readability of icons while still feeling “accented”)
  const color = accentEnabled && accent
    ? `color-mix(in srgb, ${base} 78%, ${accent} 22%)`
    : base;

  // Update ALL theme-color metas (you have 2 with media queries)
  const metas = document.querySelectorAll<HTMLMetaElement>(THEME_META_SELECTOR);
  metas.forEach((m) => m.setAttribute("content", color));

  // For some iOS/Safari cases, also set as a CSS variable for debugging/consistency
  document.documentElement.style.setProperty("--theme-color", color);
}