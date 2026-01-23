import { loadSavedQuestions, saveSavedQuestions } from "../../../storage/db";
import type { Deck, Question } from "../../../domain/types";
import { toggleSave } from "../../../domain/deck";

export function useSavedQuestions() {
  async function toggle(deck: Deck) {
    const next = toggleSave(deck);

    const saved = await loadSavedQuestions();
    const q: Question | undefined = next.questions[next.index];
    if (!q) return next;

    const already = saved.some((x) => x.id === q.id);
    const shouldSave = next.savedQuestionIds.includes(q.id);

    const updated = shouldSave ? (already ? saved : [q, ...saved]) : saved.filter((x) => x.id !== q.id);
    await saveSavedQuestions(updated);

    return next;
  }

  return { toggle };
}