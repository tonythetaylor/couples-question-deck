import { useEffect, useRef } from "react";
import type { Deck, Question } from "../../../domain/types";
import { saveActiveDeck } from "../../../storage/db";
import { withRecentIds } from "../../../lib/deck/recent";

export function useCooldownRecorder(params: {
  deck: Deck | null;
  current: Question | null;
  recentLimit: number;
  onDeckUpdate: (next: Deck) => void;
}) {
  const { deck, current, recentLimit, onDeckUpdate } = params;
  const lastRecordedIdRef = useRef<string | null>(null);

  // prime on first load
  useEffect(() => {
    const id = deck?.questions?.[deck.index]?.id ?? null;
    lastRecordedIdRef.current = id;
  }, [deck?.id]); // only when new deck loads

  useEffect(() => {
    if (!deck || !current) return;
    if (lastRecordedIdRef.current === current.id) return;

    lastRecordedIdRef.current = current.id;

    const next = withRecentIds(deck, [current.id], recentLimit);
    onDeckUpdate(next);
    saveActiveDeck(next).catch(() => {});
  }, [deck, current?.id, recentLimit, onDeckUpdate]);
}