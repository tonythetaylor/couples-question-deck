import { get, set } from "idb-keyval";
import type { Deck, Question } from "../domain/types";
import { DB_KEYS } from "./keys";

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