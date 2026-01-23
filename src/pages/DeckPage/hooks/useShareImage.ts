import { useEffect, useRef, useState } from "react";
import { nodeToPngDataUrl } from "../../../lib/share/htmlToPng";
import { isUserCancelledShare } from "../../../lib/share/shareGuards";
import { safeSlug } from "../../../lib/share/slug";
import { applyShareVars, getShareThemeVars } from "../../../lib/share/cssVars";

export function useShareImage(params: {
  getFilename: () => string;
}) {
  const { getFilename } = params;

  const shareRef = useRef<HTMLDivElement | null>(null);
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

  async function sharePng() {
    if (!shareRef.current) return;

    closeSharePreview();
    setSharing(true);

    try {
      const theme = getShareThemeVars();
      applyShareVars(shareRef.current, theme);

      // IMPORTANT: fills transparency behind rounded corners (IG black-corner fix)
      const dataUrl = await nodeToPngDataUrl(shareRef.current, { backgroundColor: theme.bg });

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

  return {
    shareRef,
    sharing,
    sharePreviewUrl,
    shareFilename,
    closeSharePreview,
    sharePng,
    safeSlug, // convenient export if you want it
  };
}