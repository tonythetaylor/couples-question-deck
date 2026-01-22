// src/pages/DeckPage/components/SharePreviewModal.tsx
import { ExternalLink, Link as LinkIcon, X } from "lucide-react";

export function SharePreviewModal({
  url,
  filename,
  copied,
  onClose,
  onCopyLink,
}: {
  url: string;
  filename?: string;
  copied: boolean;
  onClose: () => void;
  onCopyLink: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div
        className="relative w-full sm:max-w-md overflow-hidden rounded-3xl ring-1"
        style={{
          background: "var(--card)",
          borderColor: "color-mix(in srgb, var(--fg) 12%, transparent)",
          boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
        }}
      >
        <div
          className="flex items-center justify-between px-4 py-3 border-b"
          style={{ borderColor: "color-mix(in srgb, var(--fg) 10%, transparent)" }}
        >
          <div className="text-sm font-extrabold" style={{ color: "var(--fg)" }}>
            Share image
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2"
            style={{
              color: "var(--muted)",
              border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
              background: "transparent",
            }}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-4 space-y-3">
          <div
            className="overflow-hidden rounded-2xl ring-1"
            style={{
              borderColor: "color-mix(in srgb, var(--fg) 10%, transparent)",
              background: "color-mix(in srgb, var(--fg) 3%, transparent)",
            }}
          >
            <img src={url} alt="Shared Reality card" className="w-full h-auto" />
          </div>

          <div className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
            On iOS Safari: tap{" "}
            <span style={{ fontWeight: 800, color: "var(--fg)" }}>Open image</span>, then use
            the Share button in the image viewer to Messages, Save Image, AirDrop, etc.
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-extrabold"
              style={{ background: "var(--btn)", color: "var(--btn-fg)" }}
            >
              <ExternalLink className="h-4 w-4" />
              Open image
            </a>

            <button
              onClick={onCopyLink}
              className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-extrabold"
              style={{
                background: "transparent",
                color: "var(--fg)",
                border: "1px solid color-mix(in srgb, var(--fg) 12%, transparent)",
              }}
            >
              <LinkIcon className="h-4 w-4" />
              {copied ? "Copied" : "Copy link"}
            </button>
          </div>

          {filename ? (
            <div className="text-[11px]" style={{ color: "var(--muted)" }}>
              Filename:{" "}
              <span className="font-mono" style={{ color: "var(--fg)" }}>
                {filename}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}