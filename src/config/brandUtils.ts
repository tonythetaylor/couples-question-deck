import { BRAND } from "./brand";
import type { Question } from "../domain/types";

export type ShareTextKind =
  | "safety_principle"
  | "safety_hint"
  | "safety_any"
  | "deck_tagline"
  | "word_of_mouth"
  | "philosophy"
  | "essence_one_line"
  | "tagline"
  | "tagline_long";

/**
 * Deterministic hash from a string seed (stable across sessions).
 */
function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0; // 32-bit
  }
  return Math.abs(hash);
}

/**
 * Pick one item.
 * - If seed is provided: stable selection
 * - If no seed: true random (fine for one-off shares)
 */
function pickOne<T>(items: T[], seed?: string | number): T {
  if (!items.length) throw new Error("pickOne() called with empty array");

  if (seed === undefined) {
    return items[Math.floor(Math.random() * items.length)];
  }

  const n =
    typeof seed === "number" ? Math.abs(seed) : hashString(String(seed));
  return items[n % items.length];
}

/**
 * A single, brand-safe line for share images and microcopy.
 * Keep these short because they will sit in a constrained visual layout.
 */
export function getShareLine(
  kind: ShareTextKind = "safety_any",
  opts?: { seed?: string | number }
): string {
  const seed = opts?.seed;

  const safetyPrinciples = BRAND.copy.safety.principles;
  const safetyHints = Object.values(BRAND.copy.safety.hints);

  const deckTaglines = BRAND.copy.deck.taglines;
  const wom = BRAND.copy.wordOfMouth.lines;

  const philosophy = [
    BRAND.philosophy.presenceOverPerformance,
    BRAND.philosophy.curiosityOverCertainty,
  ];

  switch (kind) {
    case "safety_principle":
      return pickOne(safetyPrinciples, seed);

    case "safety_hint":
      return pickOne(safetyHints, seed);

    case "safety_any": {
      // Weighted toward principles (feels more “anchoring” on share)
      const pool = [...safetyPrinciples, ...safetyPrinciples, ...safetyHints];
      return pickOne(pool, seed);
    }

    case "deck_tagline":
      return pickOne(deckTaglines, seed);

    case "word_of_mouth":
      return pickOne(wom, seed);

    case "philosophy":
      return pickOne(philosophy, seed);

    case "essence_one_line":
      return BRAND.essence.oneLine;

    case "tagline":
      return BRAND.tagline;

    case "tagline_long":
      return BRAND.taglineLong;

    default:
      return pickOne(safetyPrinciples, seed);
  }
}

/**
 * Convenience for a “poster-like” feel:
 * favors philosophy + essence + safety principles over casual lines.
 * Supports seed so each card can have its own stable caption.
 */
export function getShareCaption(opts?: { seed?: string | number }): string {
  const seed = opts?.seed;

  const pool: ShareTextKind[] = [
    "essence_one_line",
    "philosophy",
    "safety_principle",
    "safety_principle",
    "deck_tagline",
  ];

  const chosenKind = pickOne(pool, seed);
  // Slightly perturb seed so "kind choice" and "line choice" don't always mirror
  const lineSeed = seed === undefined ? undefined : `${seed}:line`;
  return getShareLine(chosenKind, { seed: lineSeed });
}

/**
 * Stable, per-question "tip" line.
 * Uses a deterministic seed so it changes per card but doesn't flicker per render.
 */
export function getTipTextForQuestion(
  q: Pick<Question, "id" | "prompt" | "category" | "intensity">
): string {
  // Prefer id, fall back to prompt. Add category/intensity to reduce collisions.
  const seed = `${q.id ?? ""}|${q.category}|${q.intensity}|${q.prompt}`;

  // "Poster-like" is usually best in-card: essence/philosophy/safety/deck tagline
  return getShareCaption({ seed });

  // If you want strictly "safety" instead, swap to:
  // return getShareLine("safety_any", { seed });
}