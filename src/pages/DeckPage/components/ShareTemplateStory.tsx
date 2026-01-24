// src/pages/DeckPage/components/ShareTemplateStory.tsx
import React from "react";
import { ShareTemplate } from "./ShareTemplate";
import type { Deck, Question } from "../../../domain/types";

export function ShareTemplateStory({
  deck,
  deckUrl,
  current,
  shareRef,
}: {
  deck: Deck;
  current: Question;
  deckUrl: string;
  shareRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      aria-hidden
      className="fixed -left-[9999px] top-0 pointer-events-none opacity-0"
    >
      {/* 9:16 story canvas. THIS is what we screenshot. */}
      <div
        ref={shareRef}
        className="w-[1080px] h-[1920px] flex items-center justify-center px-[96px]"
        style={{
          background: `
            radial-gradient(
              1200px 900px at 30% 30%,
              color-mix(in srgb, var(--share-accent) 28%, transparent),
              transparent 66%
            ),
            radial-gradient(
              900px 700px at 70% 45%,
              color-mix(in srgb, var(--share-accent) 20%, transparent),
              transparent 64%
            ),
            linear-gradient(
              180deg,
              color-mix(in srgb, var(--share-bg) 92%, white),
              var(--share-bg)
            )
          `,
        }}
      >
        <ShareTemplate deck={deck} current={current} deckUrl={deckUrl} />
      </div>
    </div>
  );
}