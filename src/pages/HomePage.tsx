import { useMemo, useState } from "react";
import { QUESTIONS } from "../data/questions";
import { generateDeck } from "../domain/deck";
import type { DeckOptions, Tone } from "../domain/types";
import { pushDeckHistory, saveActiveDeck } from "../storage/db";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Pill } from "../ui/Pill";

export function HomePage({ onStart }: { onStart: () => void }) {
  const [size, setSize] = useState<DeckOptions["size"]>(8);
  const [tone, setTone] = useState<DeckOptions["tone"]>("mixed");
  const [excludeMoney, setExcludeMoney] = useState(false);

  const excludeTags = useMemo(() => {
    const tags: string[] = [];
    if (excludeMoney) tags.push("money", "expectations");
    return tags;
  }, [excludeMoney]);

  async function handleGenerate() {
    const opts: DeckOptions = { size, tone, excludeTags };
    const deck = generateDeck(QUESTIONS, opts);
    await saveActiveDeck(deck);
    await pushDeckHistory(deck);
    onStart();
  }

  return (
    <div className="mx-auto max-w-md px-4 py-6 space-y-4">
      <header className="space-y-2">
        <div className="text-xs font-semibold text-slate-500">Shared Reality Deck</div>
        <h1 className="text-2xl font-extrabold text-slate-900 leading-tight">
          Revealing questions, one at a time.
        </h1>
        <p className="text-sm text-slate-600">
          No gotchas. You’re gathering data, not arguing.
        </p>
      </header>

      <Card>
        <div className="flex items-center justify-between">
          <div className="text-sm font-bold text-slate-900">Deck setup</div>
          <Pill>{size} cards</Pill>
        </div>

        <div className="mt-4 space-y-4">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-500">Deck size</div>
            <div className="grid grid-cols-3 gap-2">
              {[5, 8, 12].map(n => (
                <button
                  key={n}
                  className={`rounded-2xl px-3 py-3 text-sm font-semibold ring-1 ${
                    size === n ? "bg-slate-900 text-white ring-slate-900" : "bg-white ring-slate-200 text-slate-800"
                  }`}
                  onClick={() => setSize(n as DeckOptions["size"])}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-500">Tone</div>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value as Tone | "mixed")}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            >
              <option value="mixed">Mixed</option>
              <option value="gentle">Gentle</option>
              <option value="neutral">Neutral</option>
              <option value="direct">Direct</option>
            </select>
          </div>

          <label className="flex items-center gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={excludeMoney}
              onChange={(e) => setExcludeMoney(e.target.checked)}
              className="h-5 w-5 rounded border-slate-300"
            />
            Avoid money topics
          </label>

          <Button className="w-full" onClick={handleGenerate}>
            Generate deck
          </Button>

          <div className="text-xs text-slate-500">
            Tip: ask one question per conversation. Don’t explain why you’re asking.
          </div>
        </div>
      </Card>

      <Card>
        <div className="text-sm font-bold text-slate-900">What’s inside</div>
        <p className="mt-2 text-sm text-slate-600">
          Questions designed to surface intent, self-awareness, communication depth, regulation, and mutuality.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Pill>Intent</Pill>
          <Pill>Accountability</Pill>
          <Pill>Communication</Pill>
          <Pill>Regulation</Pill>
          <Pill>Money</Pill>
          <Pill>Repair</Pill>
          <Pill>Values</Pill>
          <Pill>Humor</Pill>
        </div>
      </Card>
    </div>
  );
}