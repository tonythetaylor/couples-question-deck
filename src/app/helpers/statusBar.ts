// src/helpers/statusBar.ts
export function setStatusBarColor(color: string) {
  const metas = document.querySelectorAll<HTMLMetaElement>(
    'meta[name="theme-color"]'
  );
  metas.forEach((m) => m.setAttribute("content", color));
}