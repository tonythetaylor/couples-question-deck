import { useMemo, useState } from "react";

import { QUESTIONS } from "../../data/questions";
import { swapQuestion } from "../../domain/deck";
import type { Deck } from "../../domain/types";

import { Button } from "../../ui/Button";
import { Card } from "../../ui/Card";

import { CATEGORY_LABEL } from "./utils/categoryLabels";

import { useActiveDeck } from "./hooks/useActiveDeck";
import { useCooldownRecorder } from "./hooks/useCooldownRecorder";
import { useSavedQuestions } from "./hooks/useSavedQuestions";
import { useShareImage } from "./hooks/useShareImage";

import { withRecentIds } from "../../lib/deck/recent";
import { safeSlug } from "../../lib/share/slug";

import { ShareTemplate } from "./components/ShareTemplate";
import { SharePreviewModal } from "./components/SharePreviewModal";
import { DeckHeader } from "./components/DeckHeader";
import { QuestionCard } from "./components/QuestionCard";
import { ActionRow } from "./components/ActionRow";
import { EndOfDeckCard } from "./components/EndOfDeckCard";
import { ShareTemplateStory } from "./components/ShareTemplateStory";

const MAX_SWAPS_PER_CARD = 1;
const RECENT_COOLDOWN_LIMIT = 80;

export function DeckPage({ onExit }: { onExit: () => void }) {
  const { deck, setDeck, persist } = useActiveDeck();
  const { toggle: toggleSaved } = useSavedQuestions();
  const [copied, setCopied] = useState(false);

  const current = useMemo(() => {
    if (!deck) return null;
    return deck.questions[deck.index] ?? null;
  }, [deck]);

  useCooldownRecorder({
    deck,
    current,
    recentLimit: RECENT_COOLDOWN_LIMIT,
    onDeckUpdate: setDeck,
  });

  const deckUrl = `${window.location.origin}${import.meta.env.BASE_URL}`;

  const {
    storyRef,
    cardRef,
    sharing,
    sharePreviewUrl,
    shareFilename,
    closeSharePreview,
    sharePng,
    saveCardPng,
  } = useShareImage({
    getFilename: () => {
      if (!current) return "shared-reality.png";
      const safeCategory = safeSlug(
        CATEGORY_LABEL[current.category] ?? current.category,
      );
      return `shared-reality-${safeCategory}-${current.id}.png`;
    },
  });

  async function handleNext() {
    if (!deck) return;
    if (deck.index >= deck.questions.length - 1) return;
    await persist({
      ...deck,
      index: Math.min(deck.index + 1, deck.questions.length - 1),
    });
  }

  async function handlePrev() {
    if (!deck) return;
    await persist({ ...deck, index: Math.max(deck.index - 1, 0) });
  }

  async function handleSwap() {
    if (!deck) return;

    const swapsByIndex = (deck as any).swapsByIndex ?? {};
    const used = swapsByIndex[deck.index] ?? 0;
    if (used >= MAX_SWAPS_PER_CARD) return;

    const swapped = swapQuestion(deck, QUESTIONS);
    const swappedCurrent = swapped.questions[swapped.index];
    const withRecent = swappedCurrent
      ? withRecentIds(swapped, [swappedCurrent.id], RECENT_COOLDOWN_LIMIT)
      : swapped;

    const next: Deck = {
      ...(withRecent as any),
      swapsByIndex: { ...swapsByIndex, [deck.index]: used + 1 },
    };

    await persist(next);
  }

  async function handleSave() {
    if (!deck) return;
    const next = await toggleSaved(deck);
    await persist(next);
  }

  async function copyDeckLink() {
    try {
      await navigator.clipboard.writeText(deckUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
      return;
    } catch {}

    try {
      const ta = document.createElement("textarea");
      ta.value = deckUrl;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      ta.style.top = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  if (!deck) {
    return (
      <div className="mx-auto max-w-md px-4 py-6">
        <Card>
          <div
            className="text-sm font-semibold"
            style={{ color: "var(--muted)" }}
          >
            No active deck.
          </div>
          <div className="mt-3">
            <Button className="w-full" onClick={onExit}>
              Go home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (!current) return null;

  const isSaved = deck.savedQuestionIds.includes(current.id);
  const isLast = deck.index === deck.questions.length - 1;

  const swapsUsed = (deck as any).swapsByIndex?.[deck.index] ?? 0;
  const canSwap = swapsUsed < MAX_SWAPS_PER_CARD;

  return (
    <div className="mx-auto max-w-md px-4 py-6 space-y-4">
      <DeckHeader
        index={deck.index}
        total={deck.questions.length}
        onExit={onExit}
      />

      {/* Card-only export surface (1080x1080, transparent outside corners) */}
      <div
        aria-hidden
        className="fixed -left-[9999px] top-0 pointer-events-none opacity-0"
      >
        <div ref={cardRef}>
          <ShareTemplate deck={deck} current={current} deckUrl={deckUrl} />
        </div>
      </div>

      {/* Story export surface (1080x1920 smokey background) */}
      <ShareTemplateStory
        deck={deck}
        current={current}
        deckUrl={deckUrl}
        shareRef={storyRef}
      />

      <QuestionCard current={current} onLongPressSave={saveCardPng} />

      <ActionRow
        canPrev={deck.index > 0}
        canSwap={canSwap}
        isSaved={isSaved}
        sharing={sharing}
        onPrev={handlePrev}
        onSave={handleSave}
        onSwap={handleSwap}
        onShare={sharePng}
      />

      {!isLast ? (
        <Button className="w-full" onClick={handleNext}>
          Next
        </Button>
      ) : (
        <EndOfDeckCard onExit={onExit} />
      )}

      {sharePreviewUrl && (
        <SharePreviewModal
          url={sharePreviewUrl}
          filename={shareFilename ?? undefined}
          copied={copied}
          onClose={closeSharePreview}
          onCopyLink={copyDeckLink}
        />
      )}
    </div>
  );
}
