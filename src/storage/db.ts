import { get, set } from "idb-keyval";
import type { Deck, Question } from "../domain/types";
import { DB_KEYS } from "./keys";

const RECENT_LIMIT = 120; // tweak: 60–200 depending on your question pool size

export async function loadActiveDeck(): Promise<Deck | null> {
  return (await get(DB_KEYS.activeDeck)) ?? null;
}

export async function saveActiveDeck(deck: Deck | null) {
  await set(DB_KEYS.activeDeck, deck);
}

export async function loadDeckHistory(): Promise<Deck[]> {
  return (await get(DB_KEYS.deckHistory)) ?? [];
}

export async function pushDeckHistory(deck: Deck) {
  const history = await loadDeckHistory();
  await set(DB_KEYS.deckHistory, [deck, ...history].slice(0, 25));
}

export async function loadSavedQuestions(): Promise<Question[]> {
  return (await get(DB_KEYS.savedQuestions)) ?? [];
}

export async function saveSavedQuestions(qs: Question[]) {
  await set(DB_KEYS.savedQuestions, qs);
}

/** NEW: recent cooldown ids */
export async function loadRecentQuestionIds(): Promise<string[]> {
  return (await get(DB_KEYS.recentQuestionIds)) ?? [];
}

export async function saveRecentQuestionIds(ids: string[]) {
  await set(DB_KEYS.recentQuestionIds, ids.slice(0, RECENT_LIMIT));
}

/**
 * NEW: add IDs to the front, de-dupe, and cap length.
 * (Newest first)
 */
export async function pushRecentQuestionIds(idsToAdd: string[]) {
  if (!idsToAdd.length) return;

  const existing = await loadRecentQuestionIds();
  const merged = [...idsToAdd, ...existing];

  const seen = new Set<string>();
  const deduped: string[] = [];
  for (const id of merged) {
    if (!seen.has(id)) {
      seen.add(id);
      deduped.push(id);
    }
    if (deduped.length >= RECENT_LIMIT) break;
  }

  await set(DB_KEYS.recentQuestionIds, deduped);
}