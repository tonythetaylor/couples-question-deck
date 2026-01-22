import { useEffect, useState } from "react";
import type { Question } from "../domain/types";
import { loadSavedQuestions, saveSavedQuestions } from "../storage/db";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Pill } from "../ui/Pill";
import { Home } from "lucide-react";

export function SavedPage({ onExit }: { onExit: () => void }) {
  const [saved, setSaved] = useState<Question[]>([]);

  useEffect(() => {
    (async () => setSaved(await loadSavedQuestions()))();
  }, []);

  const count = saved.length;

  async function clearAll() {
    await saveSavedQuestions([]);
    setSaved([]);
  }

  // Option A: typographic chips (non-interactive)
  const chipStyle: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 650,
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "var(--muted)",
      whiteSpace: "nowrap",
    padding: 0,
    border: "none",
    background: "transparent",
  };

  return (
    <div className="mx-auto max-w-md px-4 py-6 space-y-4">
      {/* Header */}
      <header className="flex items-center justify-between pt-safe">
        <Button
          variant="ghost"
          onClick={onExit}
          className="inline-flex items-center gap-2"
        >
          <Home className="h-4 w-4" />
          Home
        </Button>

        <Button variant="ghost" onClick={clearAll} disabled={count === 0}>
          Clear
        </Button>
      </header>

      {/* Summary */}
      <Card>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div
              className="text-sm font-extrabold tracking-tight"
              style={{ color: "var(--fg)" }}
            >
              Saved questions
            </div>
            <div className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
              Your bookmarks live on this device only.
            </div>
          </div>

          {/* Count should read like a label, not a button */}
          <Pill variant="strong">{count}</Pill>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-x-3 gap-y-2">
          <span style={chipStyle}>{count ? `${count} total` : "0 total"}</span>
          <span style={chipStyle}>Local only</span>
          <span style={chipStyle}>
            {count ? "Clear wipes all" : "Save from decks"}
          </span>
        </div>

        <p
          className="mt-3 text-xs leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Tip: saved items are meant to be re-used. If a question hits, keep it
          and run it again later.
        </p>
      </Card>

      {/* List */}
      <div className="space-y-3">
        {saved.map((q) => (
          <Card key={q.id}>
            {/* Minimal chips (not pills) */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                <span style={chipStyle}>{q.category}</span>
                <span style={chipStyle}>Intensity {q.intensity}</span>
              </div>

              {/* tiny meta, keeps cards “indexable” */}
              <span
                className="text-[11px] font-extrabold tracking-[0.14em] uppercase"
                style={{ color: "var(--muted)" }}
              >
                Saved
              </span>
            </div>

            <div
              className="mt-3 text-base font-extrabold leading-snug tracking-tight"
              style={{ color: "var(--fg)" }}
            >
              {q.prompt}
            </div>

            {q.notes && (
              <div
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {q.notes}
              </div>
            )}
          </Card>
        ))}

        {count === 0 && (
          <Card>
            <div className="space-y-2">
              <div
                className="text-sm font-extrabold"
                style={{ color: "var(--fg)" }}
              >
                Nothing saved yet
              </div>

              <div
                className="text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                While you’re running a deck, tap Save on anything you’d want to
                revisit later.
              </div>

              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
                <span style={chipStyle}>Run a deck</span>
                <span style={chipStyle}>Save the hitters</span>
                <span style={chipStyle}>Build your library</span>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
