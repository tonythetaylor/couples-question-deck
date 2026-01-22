import * as htmlToImage from "html-to-image";

export async function nodeToPngDataUrl(node: HTMLElement, opts?: { backgroundColor?: string }) {
  return htmlToImage.toPng(node, {
    pixelRatio: 2,
    cacheBust: true,
    backgroundColor: opts?.backgroundColor, // IG corner fix (no transparency)
    style: { transform: "scale(1)", transformOrigin: "top left" },
  });
}