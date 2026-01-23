import { useEffect, useState } from "react";
import type { Deck } from "../../../domain/types";
import { loadActiveDeck, saveActiveDeck } from "../../../storage/db";

export function useActiveDeck() {
  const [deck, setDeck] = useState<Deck | null>(null);

  useEffect(() => {
    (async () => {
      const d = await loadActiveDeck();
      setDeck(d);
    })();
  }, []);

  async function persist(next: Deck) {
    setDeck(next);
    await saveActiveDeck(next);
  }

  return { deck, setDeck, persist };
}