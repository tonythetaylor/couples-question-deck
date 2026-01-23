// src/pages/DeckPage/components/ShareTemplate.tsx
import type { Deck, Question } from "../../../domain/types";
import { CATEGORY_LABEL } from "../utils/categoryLabels";
import { TIP_TEXT } from "../utils/shareText";

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
  return (
    <div
      aria-hidden
      className="fixed -left-[9999px] top-0 pointer-events-none opacity-0"
    >
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
              // subtle top feed (keeps top from looking flat)
              "linear-gradient(to bottom, color-mix(in srgb, var(--share-accent, #2563eb) 10%, transparent), transparent 32%)," +
              // HERO CENTER GLOW (centered)
              "radial-gradient(1200px 900px at 50% 50%, color-mix(in srgb, var(--share-accent, #2563eb) 16%, transparent), transparent 64%)," +
              // balanced side kisses (mid-screen, not top-biased)
              "radial-gradient(900px 700px at 18% 48%, color-mix(in srgb, var(--share-accent, #2563eb) 12%, transparent), transparent 62%)," +
              "radial-gradient(900px 700px at 82% 52%, color-mix(in srgb, var(--share-accent, #2563eb) 12%, transparent), transparent 62%)," +
              // subtle foreground depth
              "radial-gradient(900px 650px at 15% 10%, color-mix(in srgb, var(--share-fg, #0f172a) 10%, transparent), transparent 62%)," +
              // base paper gradient
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
              <div
                className="text-[22px] font-semibold"
                style={{ color: "var(--share-muted, #475569)" }}
              >
                {CATEGORY_LABEL[current.category] ?? current.category}
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center">
              <div
                className="w-full rounded-[44px] px-[72px] py-[76px] ring-1"
                style={{
                  background: "var(--share-card, #ffffff)",
                  borderColor:
                    "color-mix(in srgb, var(--share-fg, #0f172a) 12%, transparent)",
                  boxShadow:
                    "0 20px 50px rgba(2,6,23,0.08), 0 2px 0 rgba(2,6,23,0.04)",
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

          <div className="flex items-end justify-between gap-12">
  {/* Left: Tip */}
  <div className="flex items-start gap-4 max-w-[70%]">
    <div
      className="shrink-0 px-3 h-9 inline-flex items-center rounded-xl text-[12px] font-extrabold uppercase tracking-[0.18em]"
      style={{
        background: "color-mix(in srgb, var(--share-fg, #0f172a) 8%, transparent)",
        border: "1px solid color-mix(in srgb, var(--share-fg, #0f172a) 14%, transparent)",
        color: "var(--share-fg, #0f172a)",
      }}
    >
      Tip
    </div>

    <div
      className="text-[18px] leading-relaxed font-medium"
      style={{ color: "var(--share-muted, #475569)" }}
    >
      {TIP_TEXT}
    </div>
  </div>

  {/* Right: Branding */}
  <div className="text-right leading-tight">
    <div
      className="text-[12px] font-bold tracking-[0.18em] uppercase"
      style={{ color: "var(--share-muted, #475569)" }}
    >
      A Shared Reality
    </div>

    <div
      className="text-[12px] font-bold tracking-[0.18em] uppercase"
      style={{ color: "var(--share-muted, #475569)" }}
    >
      Deck
    </div>

    <div
      className="mt-1 text-[22px] font-extrabold tracking-tight"
      style={{ color: "var(--share-fg, #0f172a)" }}
    >
      by TaylorTheory
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}