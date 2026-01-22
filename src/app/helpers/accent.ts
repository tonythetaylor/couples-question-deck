// src/helpers/accent.ts
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const h = hex.replace("#", "").trim();
  if (!/^([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(h)) return null;

  const full =
    h.length === 3 ? h.split("").map((c) => c + c).join("") : h;

  const n = parseInt(full, 16);
  return {
    r: (n >> 16) & 255,
    g: (n >> 8) & 255,
    b: n & 255,
  };
}

function rgba({ r, g, b }: { r: number; g: number; b: number }, a: number) {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/**
 * Sets derived accent vars (no color-mix required).
 * Call this whenever accent changes.
 */
export function applyAccentDerivedVars(accent: string) {
  const root = document.documentElement;

  if (!accent) {
    root.style.removeProperty("--accent-soft");
    root.style.removeProperty("--accent-soft-strong");
    root.style.removeProperty("--accent-ring");
    root.style.removeProperty("--accent-ring-strong");
    root.style.removeProperty("--accent-glow");
    return;
  }

  const rgb = hexToRgb(accent);
  if (!rgb) return;

  // Tuned to look good over both light/dark glass
  root.style.setProperty("--accent-soft", rgba(rgb, 0.18));
  root.style.setProperty("--accent-soft-strong", rgba(rgb, 0.32));
  root.style.setProperty("--accent-ring", rgba(rgb, 0.55));
  root.style.setProperty("--accent-ring-strong", rgba(rgb, 0.78));
  root.style.setProperty("--accent-glow", `0 0 0 4px ${rgba(rgb, 0.22)}`);
}