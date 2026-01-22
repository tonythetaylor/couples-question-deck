import type { Deck } from "../../domain/types";

export function withRecentIds(deck: Deck, ids: string[], limit: number) {
  const prev = deck.options.recentQuestionIds ?? [];
  const next = [...ids, ...prev];

  const seen = new Set<string>();
  const deduped: string[] = [];

  for (const id of next) {
    if (!id) continue;
    if (seen.has(id)) continue;
    seen.add(id);
    deduped.push(id);
    if (deduped.length >= limit) break;
  }

  return { ...deck, options: { ...deck.options, recentQuestionIds: deduped } };
}