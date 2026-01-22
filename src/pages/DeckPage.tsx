import { useEffect, useMemo, useState } from "react";
import { QUESTIONS } from "../data/questions";
import { swapQuestion, toggleSave } from "../domain/deck";
import type { Deck } from "../domain/types";
import {
  loadActiveDeck,
  saveActiveDeck,
  loadSavedQuestions,
  saveSavedQuestions,
} from "../storage/db";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Pill } from "../ui/Pill";

const CATEGORY_LABEL: Record<string, string> = {
  intent: "Intent",
  accountability: "Accountability",
  communication: "Communication",
  regulation: "Regulation",
  money: "Money",
  anchor: "Anchor",
  repair: "Repair",
  values: "Values",
  humor: "Humor",
};

const MAX_SWAPS_PER_CARD = 1;

export function DeckPage({ onExit }: { onExit: () => void }) {
  const [deck, setDeck] = useState<Deck | null>(null);

  useEffect(() => {
    (async () => {
      const d = await loadActiveDeck();
      setDeck(d);
    })();
  }, []);

  const current = useMemo(() => {
    if (!deck) return null;
    return deck.questions[deck.index] ?? null;
  }, [deck]);

  async function persist(next: Deck) {
    setDeck(next);
    await saveActiveDeck(next);
  }

  async function handleNext() {
    const d = deck;
    if (!d) return;
    if (d.index >= d.questions.length - 1) return; // guard

    const nextIndex = Math.min(d.index + 1, d.questions.length - 1);
    await persist({ ...d, index: nextIndex });
  }

  async function handlePrev() {
    const d = deck;
    if (!d) return;

    const nextIndex = Math.max(d.index - 1, 0);
    await persist({ ...d, index: nextIndex });
  }

  async function handleSwap() {
    const d = deck;
    if (!d) return;

    const swapsByIndex = d.swapsByIndex ?? {};
    const used = swapsByIndex[d.index] ?? 0;

    if (used >= MAX_SWAPS_PER_CARD) return;

    const swapped = swapQuestion(d, QUESTIONS);

    await persist({
      ...swapped,
      swapsByIndex: {
        ...swapsByIndex,
        [d.index]: used + 1,
      },
    });
  }

  async function handleSave() {
    const d = deck;
    if (!d) return;

    const next = toggleSave(d);
    await persist(next);

    const saved = await loadSavedQuestions();
    const q = next.questions[next.index];
    if (!q) return;

    const already = saved.some((x) => x.id === q.id);
    const shouldSave = next.savedQuestionIds.includes(q.id);

    const updated = shouldSave
      ? already
        ? saved
        : [q, ...saved]
      : saved.filter((x) => x.id !== q.id);

    await saveSavedQuestions(updated);
  }

  if (!deck) {
    return (
      <div className="mx-auto max-w-md px-4 py-6">
        <Card>
          <div className="text-sm font-semibold text-slate-700">
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

  const isSaved = current ? deck.savedQuestionIds.includes(current.id) : false;
  const isLast = deck.index === deck.questions.length - 1;
  const progress = Math.round(((deck.index + 1) / deck.questions.length) * 100);

  const swapsUsed = deck.swapsByIndex?.[deck.index] ?? 0;
  const canSwap = swapsUsed < MAX_SWAPS_PER_CARD;

  return (
    <div className="mx-auto max-w-md px-4 py-6 space-y-4">
      <header className="space-y-3">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={onExit}>
            Home
          </Button>

          <div className="flex items-center gap-2">
            {isLast && (
              <span className="rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 px-2.5 py-1 text-[11px] font-extrabold tracking-wide">
                END
              </span>
            )}

            <div className="text-xs font-semibold text-slate-500 tabular-nums">
              {deck.index + 1} / {deck.questions.length}
            </div>
          </div>
        </div>

        <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              isLast ? "bg-emerald-600" : "bg-slate-900"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {current && (
        <Card>
          <div className="flex items-center justify-between gap-3">
            <Pill>{CATEGORY_LABEL[current.category] ?? current.category}</Pill>
            <Pill>Intensity {current.intensity}</Pill>
          </div>

          <div className="mt-4 text-xl font-extrabold text-slate-900 leading-snug">
            {current.prompt}
          </div>

          <div className="mt-4 text-xs text-slate-500">
            Ask it once. Don’t narrate. Let silence do the lifting.
          </div>

          {current.notes && (
            <div className="mt-4 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700 ring-1 ring-slate-200">
              <div className="text-xs font-semibold text-slate-500 mb-1">
                Why this question exists
              </div>
              {current.notes}
            </div>
          )}
        </Card>
      )}

      {isLast && (
        <div className="text-xs text-slate-600 px-1">
          You’re on the last card. Swap to rotate this question, or go back to
          review.
        </div>
      )}

      {!canSwap && (
        <div className="text-xs text-slate-500 px-1">
          One swap per question. Sit with what’s here.
        </div>
      )}

      <div className="grid grid-cols-3 gap-2">
        <Button
          variant="ghost"
          onClick={handlePrev}
          disabled={deck.index === 0}
        >
          Back
        </Button>

        <Button onClick={handleSave}>{isSaved ? "Saved" : "Save"}</Button>

        <Button
          variant="ghost"
          onClick={handleSwap}
          disabled={!canSwap}
          className={!canSwap ? "opacity-50 cursor-not-allowed" : ""}
        >
          {canSwap ? "Swap" : "Swapped"}
        </Button>
      </div>

      <Button
        className={`w-full ${isLast ? "opacity-60 cursor-not-allowed" : ""}`}
        onClick={handleNext}
        disabled={isLast}
      >
        {isLast ? "Completed" : "Next"}
      </Button>

      {isLast && (
        <Card>
          <div className="text-sm font-bold text-slate-900">End of deck</div>
          <p className="mt-2 text-sm text-slate-600">
            Don’t marathon these. The point is shared reality, not speedrunning
            intimacy.
          </p>
          <div className="mt-3">
            <Button className="w-full" onClick={onExit}>
              Back home
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}