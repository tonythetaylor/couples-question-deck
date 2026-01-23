// src/pages/DeckPage/components/ShareTemplate.tsx
import React from "react";
import { BRAND } from "../../../config/brand";
import { getTipTextForQuestion } from "../../../config/brandUtils";
import type { Deck, Question, Category } from "../../../domain/types";
import { CATEGORY_LABEL } from "../utils/categoryLabels";

const normalizeCategoryLabel = (category: Category) =>
  CATEGORY_LABEL[category] ?? category;

// Small helper: CSS line-clamp without Tailwind plugin
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
  shareRef,
}: {
  deck: Deck;
  current: Question;
  deckUrl: string;
  shareRef: React.RefObject<HTMLDivElement | null>;
}) {
  const tipText = getTipTextForQuestion(current);

  const promptLen = current.prompt.length;

  // Auto-shrink for very long prompts so layout holds together
  const promptFont = promptLen > 170 ? 72 : promptLen > 120 ? 80 : 86; // px



  return (
    <div
      aria-hidden
      className="fixed -left-[9999px] top-0 pointer-events-none opacity-0"
    >
      {/* 1:1 export canvas */}
      <div ref={shareRef} className="w-[1080px] h-[1080px] p-[72px]">
        {/* Canvas background (matches app dark vibe) */}
        <div
          className="w-full h-full rounded-[56px] overflow-hidden flex items-center justify-center"
          style={{
            background: `
    /* Soft cloudy blooms */
    radial-gradient(
      1200px 900px at 30% 35%,
      color-mix(in srgb, var(--share-accent, #2563eb) 28%, transparent),
      transparent 65%
    ),
    radial-gradient(
      900px 700px at 70% 45%,
      color-mix(in srgb, var(--share-accent, #2563eb) 22%, transparent),
      transparent 62%
    ),
    radial-gradient(
      800px 600px at 50% 75%,
      color-mix(in srgb, var(--share-accent, #2563eb) 18%, transparent),
      transparent 60%
    ),

    /* Ambient haze */
    linear-gradient(
      180deg,
      rgba(255,255,255,0.06),
      rgba(255,255,255,0.02)
    ),

    /* Base dark */
    linear-gradient(
      180deg,
      #0b0f14,
      #070a0f
    )
    `,
          }}
        >
          {/*  Add subtle grain */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml;utf8,\
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">\
        <filter id="n">\
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>\
        </filter>\
        <rect width="100%" height="100%" filter="url(#n)" opacity="0.035"/>\
      </svg>\')',
              mixBlendMode: "overlay",
            }}
          />
          {/* The Card (styled to look like QuestionCard) */}
          <div
            className="w-full h-full rounded-[52px] p-[66px] flex flex-col"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow:
                "0 60px 140px rgba(0,0,0,0.55), 0 2px 0 rgba(255,255,255,0.04) inset",
            }}
          >
            {/* Top meta */}
            <div className="flex items-center justify-between">
              <span
                className="text-[22px] font-extrabold tracking-[0.24em] uppercase"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {normalizeCategoryLabel(current.category)}
              </span>

              <span
                className="text-[22px] font-extrabold tracking-[0.24em] uppercase"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Intensity {current.intensity}
              </span>
            </div>

            {/* Content zone that can shrink/clamp without pushing footer out */}
            <div className="min-h-0 flex-1 flex flex-col">
              {/* Prompt */}
              <div
                className="mt-10 font-extrabold tracking-tight"
                style={{
                  color: "rgba(255,255,255,0.94)",
                  fontSize: `${promptFont}px`,
                  lineHeight: "1.05",
                  ...clampStyle(7),
                }}
              >
                {current.prompt}
              </div>

           
            </div>

            {/* Bottom branding footer (always visible) */}
            <div className="mt-auto pt-[40px] flex items-center justify-between">
              <div
                className="text-[18px] font-semibold tracking-[0.18em] uppercase"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {tipText}
              </div>

              <div
                className="text-[18px] font-bold tracking-[0.24em] uppercase"
                style={{ color: "rgba(255,255,255,0.42)" }}
              >
                {BRAND.appName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
