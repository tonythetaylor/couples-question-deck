// src/pages/DeckPage/components/ShareTemplate.tsx
import type { Deck, Question } from "../../../domain/types";
import { CATEGORY_LABEL } from "../utils/categoryLabels";
import { TIP_TEXT } from "../utils/shareText";

export function ShareTemplate({
  current,
  deckUrl,
  shareRef,
}: {
  deck: Deck;
  current: Question;
  deckUrl: string;
  shareRef: React.RefObject<HTMLDivElement | null>; 
}) {
  return (
    <div aria-hidden className="fixed -left-[9999px] top-0 pointer-events-none opacity-0">
      {/* Outer stays square (no transparency) */}
      <div
        ref={shareRef}
        className="w-[1080px] h-[1080px] p-[72px]"
        style={{ background: "var(--share-bg, #ffffff)" }}
      >
        {/* Rounded inner is purely visual */}
        <div
          className="w-full h-full rounded-[56px] overflow-hidden p-[72px] flex flex-col justify-between"
          style={{
            background:
              "radial-gradient(800px 600px at 15% 10%, color-mix(in srgb, var(--share-fg, #0f172a) 8%, transparent), transparent 60%)," +
              "radial-gradient(900px 700px at 85% 18%, var(--share-accent-soft, rgba(37,99,235,0.10)), transparent 55%)," +
              "radial-gradient(700px 700px at 35% 88%, color-mix(in srgb, var(--share-accent, #2563eb) 12%, transparent), transparent 55%)," +
              "linear-gradient(180deg, color-mix(in srgb, var(--share-bg, #f8fafc) 96%, white), var(--share-bg, #eef2f7))",
          }}
        >
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              <div
                className="text-[34px] font-extrabold tracking-tight"
                style={{ color: "var(--share-fg, #0f172a)" }}
              >
                Shared Reality
              </div>
              <div className="text-[22px] font-semibold" style={{ color: "var(--share-muted, #475569)" }}>
                {CATEGORY_LABEL[current.category] ?? current.category}
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center">
              <div
                className="w-full rounded-[44px] px-[72px] py-[76px] ring-1"
                style={{
                  background: "var(--share-card, #ffffff)",
                  borderColor: "color-mix(in srgb, var(--share-fg, #0f172a) 12%, transparent)",
                  boxShadow: "0 20px 50px rgba(2,6,23,0.08), 0 2px 0 rgba(2,6,23,0.04)",
                }}
              >
                <div
                  className="text-center text-[72px] font-extrabold leading-[1.05] tracking-tight"
                  style={{ color: "var(--share-fg, #0f172a)" }}
                >
                  {current.prompt}
                </div>

                {current.notes ? (
                  <div
                    className="mt-10 mx-auto max-w-[860px] text-center text-[28px] leading-snug"
                    style={{ color: "var(--share-muted, #475569)" }}
                  >
                    {current.notes}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between gap-10">
            <div className="flex items-center gap-4">
              <div
                className="rounded-full px-4 py-2 text-[18px] font-extrabold tracking-wide"
                style={{ background: "var(--share-fg, #0f172a)", color: "white" }}
              >
                TIP
              </div>
              <div className="text-[24px]" style={{ color: "var(--share-muted, #475569)" }}>
                {TIP_TEXT}
              </div>
            </div>

            <div className="text-right">
              <div className="text-[20px] font-semibold" style={{ color: "var(--share-muted, #475569)" }}>
                SharedReality Deck
              </div>
              <div className="text-[24px] font-extrabold" style={{ color: "var(--share-fg, #0f172a)" }}>
                {deckUrl}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}