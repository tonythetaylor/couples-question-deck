import type { Category, Deck, DeckOptions, Question } from "./types";

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickOne<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickN<T>(arr: T[], n: number) {
  return shuffle(arr).slice(0, n);
}

/**
 * Computes how many questions to take per category *excluding anchor*.
 * We handle anchor separately so it can never be accidentally sliced out.
 */
function computeMix(
  size: 5 | 8 | 12,
  weights?: Partial<Record<Category, number>>,
  reservedSlots = 0
) {
  // `reservedSlots` is how many slots we’ve already committed (e.g., anchor)
  const target = Math.max(0, size - reservedSlots);

  // Default distribution excluding anchor
  const base: Record<Category, number> = {
    intent: 0,
    accountability: 0,
    communication: 0,
    regulation: 0,
    money: 0,
    anchor: 0, // ignored here
    repair: 0,
    values: 0,
    humor: 0,
  };

  // Defaults designed to sum to `target`
  if (size === 5) {
    // No anchor, no humor by default for the smallest deck
    base.intent = 1;
    base.accountability = 1;
    base.communication = 1;
    base.regulation = 1;
    base.money = 1;
  } else if (size === 8) {
    // Add a touch of humor for levity
    // (Values can still appear via swap/fill/weights)
    base.intent = 2;
    base.accountability = 1;
    base.communication = 1;
    base.regulation = 1;
    base.money = 1;
    base.repair = 1;
    base.humor = 1;
  } else {
    // size === 12
    // Broader spread with 1 humor by default
    base.intent = 2;
    base.accountability = 2;
    base.communication = 2;
    base.regulation = 2;
    base.money = 1;
    base.repair = 1;
    base.values = 1;
    base.humor = 1;
  }

  // If we reserved slots (e.g., anchor), reduce the base totals to match target.
  // We reduce from categories with higher counts first (and never go below 0).
  const totalBase = Object.entries(base)
    .filter(([k]) => k !== "anchor")
    .reduce((s, [, v]) => s + v, 0);

  let over = Math.max(0, totalBase - target);
  if (over > 0) {
    const reductionOrder: Category[] = [
      "intent",
      "accountability",
      "communication",
      "regulation",
      "values",
      "repair",
      "humor",
      "money",
    ];

    let i = 0;
    while (over > 0 && i < 200) {
      const c = reductionOrder[i % reductionOrder.length];
      if (base[c] > 0) {
        base[c] -= 1;
        over -= 1;
      }
      i++;
      // if everything hit 0, bail (shouldn’t happen with sane targets)
      if (reductionOrder.every((k) => base[k] === 0)) break;
    }
  }

  if (weights) {
    // redistribute remaining slots toward weighted categories, excluding anchor
    const current = Object.entries(base)
      .filter(([k]) => k !== "anchor")
      .reduce((s, [, v]) => s + v, 0);

    let remaining = Math.max(0, target - current);

    const sorted = Object.entries(weights)
      .filter(([k]) => k !== "anchor")
      .sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0))
      .map(([k]) => k as Category);

    let i = 0;
    while (remaining > 0 && sorted.length > 0) {
      base[sorted[i % sorted.length]] += 1;
      i++;
      remaining--;
    }
  }

  return base;
}

export function generateDeck(all: Question[], options: DeckOptions): Deck {
  const toneOk = (q: Question) =>
    options.tone === "mixed" ? true : q.tone === options.tone || q.tone === "neutral";

  const tagOk = (q: Question) =>
    !q.tags.some((t) => options.excludeTags.includes(t));

  const pool = all.filter((q) => toneOk(q) && tagOk(q));

  // Anchor: at most 1, only if deck >= 8, and only if we actually have anchors in pool
  const includeAnchor = options.size >= 8;
  const anchorCandidate = includeAnchor ? pool.filter((q) => q.category === "anchor") : [];
  const anchor = anchorCandidate.length ? pickOne(anchorCandidate) : undefined;

  // Reserve 1 slot if we are including an anchor so it never gets sliced out
  const reserved = anchor ? 1 : 0;
  const mix = computeMix(options.size, options.weights, reserved);

  const chosen: Question[] = [];
  const already = new Set<string>();

  if (anchor) {
    chosen.push(anchor);
    already.add(anchor.id);
  }

  for (const [cat, n] of Object.entries(mix) as [Category, number][]) {
    if (cat === "anchor") continue;
    if (n <= 0) continue;

    const candidates = pool.filter((q) => q.category === cat && !already.has(q.id));
    const picked = pickN(candidates, n);
    picked.forEach((q) => already.add(q.id));
    chosen.push(...picked);
  }

  // Fill to exact size from any non-anchor
  const targetSize = options.size;
  const remainingSlots = Math.max(0, targetSize - chosen.length);

  const fill = shuffle(
    pool.filter((q) => q.category !== "anchor" && !already.has(q.id))
  ).slice(0, remainingSlots);

  const questions = shuffle([...chosen, ...fill]).slice(0, targetSize);

  return {
    id: uid(),
    createdAt: Date.now(),
    options,
    questions,
    index: 0,
    savedQuestionIds: [],
    swapsByIndex: {}, // ✅ NEW: supports swap-limit UX
  };
}

export function swapQuestion(deck: Deck, all: Question[]): Deck {
  const current = deck.questions[deck.index];
  if (!current) return deck;

  const excludeIds = new Set(deck.questions.map((q) => q.id));
  const candidates = all.filter(
    (q) =>
      q.category === current.category &&
      q.intensity === current.intensity &&
      !excludeIds.has(q.id) &&
      !q.tags.some((t) => deck.options.excludeTags.includes(t))
  );

  if (candidates.length === 0) return deck;

  const replacement = candidates[Math.floor(Math.random() * candidates.length)];
  const questions = [...deck.questions];
  questions[deck.index] = replacement;

  return { ...deck, questions };
}

export function toggleSave(deck: Deck): Deck {
  const q = deck.questions[deck.index];
  if (!q) return deck;

  const set = new Set(deck.savedQuestionIds);
  if (set.has(q.id)) set.delete(q.id);
  else set.add(q.id);

  return { ...deck, savedQuestionIds: [...set] };
}