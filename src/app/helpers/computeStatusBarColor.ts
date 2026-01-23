export function computeStatusBarColor(): string {
  const accent = getComputedStyle(document.documentElement)
    .getPropertyValue("--accent")
    .trim();

  const bg = getComputedStyle(document.documentElement)
    .getPropertyValue("--bg")
    .trim();

  if (!accent || accent === "transparent") {
    return bg || "#000000";
  }

  // Blend background + accent so it feels like your radial wash
  return `color-mix(in srgb, ${bg} 75%, ${accent} 25%)`;
}