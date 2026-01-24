// src/pages/DeckPage/components/ShareTemplate.tsx
import React from "react";
import { BRAND } from "../../../config/brand";
import { getTipTextForQuestion } from "../../../config/brandUtils";
import type { Deck, Question, Category } from "../../../domain/types";
import { CATEGORY_LABEL } from "../utils/categoryLabels";

const normalizeCategoryLabel = (category: Category) =>
  CATEGORY_LABEL[category] ?? category;

const clampStyle = (lines: number): React.CSSProperties => ({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: lines,
  overflow: "hidden",
});

export function ShareTemplate({
  deck: _deck,
  deckUrl: _deckUrl,
  current,
}: {
  deck: Deck;
  current: Question;
  deckUrl: string;
}) {
  const tipText = getTipTextForQuestion(current);

  const promptLen = current.prompt.length;
  const promptFont = promptLen > 170 ? 72 : promptLen > 120 ? 80 : 86;

  return (
    // IMPORTANT: no fixed/offscreen wrapper here
    <div className="w-[1080px] h-[1080px] p-[72px]">
      <div
        className="relative w-full h-full rounded-[56px] overflow-hidden flex items-center justify-center"
        style={{
          background: `
            radial-gradient(
              1200px 900px at 30% 35%,
              color-mix(in srgb, var(--share-accent, #2563eb) 30%, transparent),
              transparent 66%
            ),
            radial-gradient(
              900px 700px at 70% 45%,
              color-mix(in srgb, var(--share-accent, #2563eb) 22%, transparent),
              transparent 64%
            ),
            radial-gradient(
              900px 700px at 50% 78%,
              color-mix(in srgb, var(--share-accent, #2563eb) 18%, transparent),
              transparent 62%
            ),
            linear-gradient(
              180deg,
              color-mix(in srgb, var(--share-fg, #0f172a) 10%, transparent),
              transparent 55%
            ),
            linear-gradient(
              180deg,
              color-mix(in srgb, var(--share-bg, #ffffff) 92%, white),
              var(--share-bg, #ffffff)
            )
          `,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,\
<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220">\
  <filter id="n">\
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>\
  </filter>\
  <rect width="100%" height="100%" filter="url(#n)" opacity="0.055"/>\
</svg>\')',
            mixBlendMode: "overlay",
          }}
        />

        <div
          className="w-full h-full rounded-[52px] p-[66px] flex flex-col"
          style={{
            background: `
              linear-gradient(
                180deg,
                color-mix(in srgb, var(--share-card, #ffffff) 18%, transparent),
                color-mix(in srgb, var(--share-card, #ffffff) 8%, transparent)
              )
            `,
            border: `1px solid color-mix(in srgb, var(--share-fg, #0f172a) 14%, transparent)`,
            boxShadow: `
              0 60px 140px color-mix(in srgb, black 55%, transparent),
              0 2px 0 color-mix(in srgb, white 10%, transparent) inset
            `,
            backdropFilter: "blur(26px) saturate(130%)",
            WebkitBackdropFilter: "blur(26px) saturate(130%)",
          }}
        >
          <div className="flex items-center justify-between">
            <span
              className="text-[22px] font-extrabold tracking-[0.24em] uppercase"
              style={{
                color:
                  "color-mix(in srgb, var(--share-fg, #0f172a) 55%, transparent)",
              }}
            >
              {normalizeCategoryLabel(current.category)}
            </span>

            <span
              className="text-[22px] font-extrabold tracking-[0.24em] uppercase"
              style={{
                color:
                  "color-mix(in srgb, var(--share-fg, #0f172a) 55%, transparent)",
              }}
            >
              Intensity {current.intensity}
            </span>
          </div>

          <div className="min-h-0 flex-1 flex flex-col">
            <div
              className="mt-10 font-extrabold tracking-tight"
              style={{
                color:
                  "color-mix(in srgb, var(--share-fg, #0f172a) 94%, transparent)",
                fontSize: `${promptFont}px`,
                lineHeight: "1.05",
                ...clampStyle(7),
              }}
            >
              {current.prompt}
            </div>
          </div>

          <div className="mt-auto pt-[40px] flex items-center justify-between">
            <div
              className="text-[18px] font-semibold tracking-[0.18em] uppercase"
              style={{
                color:
                  "color-mix(in srgb, var(--share-muted, #475569) 78%, transparent)",
              }}
            >
              {tipText}
            </div>

            <div
              className="text-[18px] font-bold tracking-[0.24em] uppercase"
              style={{
                color:
                  "color-mix(in srgb, var(--share-muted, #475569) 86%, transparent)",
              }}
            >
              {BRAND.appName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}