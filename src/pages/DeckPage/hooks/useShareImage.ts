// src/pages/DeckPage/hooks/useShareImage.ts
import { useEffect, useRef, useState } from "react";
import { nodeToPngDataUrl } from "../../../lib/share/htmlToPng";
import { isUserCancelledShare } from "../../../lib/share/shareGuards";
import { applyShareVars, getShareThemeVars } from "../../../lib/share/cssVars";

function isTransparentLike(v?: string | null) {
  if (!v) return true;
  const s = v.trim().toLowerCase();
  return (
    !s ||
    s === "transparent" ||
    s === "rgba(0,0,0,0)" ||
    s === "rgba(0, 0, 0, 0)" ||
    s === "#0000" ||
    s === "#00000000"
  );
}

function pickSmokeyStoryBackground(theme: { bg?: string; accent?: string }) {
  // If the theme provides a real bg, use it (solid fill)
  if (!isTransparentLike(theme.bg)) return theme.bg!.trim();

  // Otherwise, fall back to a solid fill based on accent presence
  // (Solid is required because nodeToPngDataUrl "backgroundColor" cannot be a gradient.)
  // The smokey gradient is handled INSIDE ShareTemplateStory via CSS background.
  return theme.accent ? theme.accent : "#000000";
}

export function useShareImage(params: { getFilename: () => string }) {
  const { getFilename } = params;

  // ✅ two independent export surfaces
  const storyRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [sharing, setSharing] = useState(false);
  const [sharePreviewUrl, setSharePreviewUrl] = useState<string | null>(null);
  const [shareFilename, setShareFilename] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (sharePreviewUrl?.startsWith("blob:")) URL.revokeObjectURL(sharePreviewUrl);
    };
  }, [sharePreviewUrl]);

  function closeSharePreview() {
    if (sharePreviewUrl?.startsWith("blob:")) URL.revokeObjectURL(sharePreviewUrl);
    setSharePreviewUrl(null);
    setShareFilename(null);
  }

  async function shareStoryPng() {
    const el = storyRef.current;
    if (!el) return;

    closeSharePreview();
    setSharing(true);

    try {
      const theme = getShareThemeVars();
      applyShareVars(el, theme);

      // ✅ story needs a SOLID background fill for export compositing
      // The smokey gradient is in the template CSS; this fill just avoids weird alpha behavior.
      const backgroundColor = pickSmokeyStoryBackground(theme);

      const dataUrl = await nodeToPngDataUrl(el, { backgroundColor });

      const res = await fetch(dataUrl);
      const blob = await res.blob();

      const filename = getFilename();
      const file = new File([blob], filename, { type: "image/png" });

      const navAny = navigator as any;
      const hasWebShare = typeof navigator.share === "function";
      const canShareFiles =
        hasWebShare &&
        (typeof navAny.canShare !== "function" || navAny.canShare({ files: [file] }));

      if (canShareFiles) {
        try {
          await navigator.share({ title: "Is This Everything?", files: [file] });
          return;
        } catch (err) {
          if (isUserCancelledShare(err)) return;
        }
      }

      const objectUrl = URL.createObjectURL(blob);
      setSharePreviewUrl(objectUrl);
      setShareFilename(filename);
    } catch (err) {
      if (isUserCancelledShare(err)) return;
    } finally {
      setSharing(false);
    }
  }

  async function saveCardPng() {
    const el = cardRef.current;
    if (!el) return;

    closeSharePreview();
    setSharing(true);

    try {
      const theme = getShareThemeVars();
      applyShareVars(el, theme);

      // ✅ card save: keep transparency outside rounded card
      const dataUrl = await nodeToPngDataUrl(el, { backgroundColor: "transparent" });

      const res = await fetch(dataUrl);
      const blob = await res.blob();

      const objectUrl = URL.createObjectURL(blob);
      setSharePreviewUrl(objectUrl);
      setShareFilename(getFilename());
    } catch (err) {
      if (isUserCancelledShare(err)) return;
    } finally {
      setSharing(false);
    }
  }

  return {
    storyRef,
    cardRef,
    sharing,
    sharePreviewUrl,
    shareFilename,
    closeSharePreview,
    sharePng: shareStoryPng, // keep your API name
    saveCardPng,
  };
}