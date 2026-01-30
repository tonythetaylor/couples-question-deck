// src/domain/deck.ts
import type { Category, Deck, DeckOptions, Question } from "./types";

type NonAnchorCategory = Exclude<Category, "anchor">;

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
 * Prefer "fresh" items (not in recentIds). If we can't fill n, fall back to stale.
 * Guarantees no duplicates in the returned list.
 */
function pickNWithCooldown<T extends { id: string }>(
  candidates: T[],
  n: number,
  recentIds: Set<string>,
) {
  if (n <= 0 || candidates.length === 0) return [];

  const target = Math.min(n, candidates.length);

  const fresh = candidates.filter((q) => !recentIds.has(q.id));
  const stale = candidates.filter((q) => recentIds.has(q.id));

  const picked: T[] = [];
  const pickedIds = new Set<string>();

  const takeFresh = pickN(fresh, Math.min(target, fresh.length));
  for (const q of takeFresh) {
    if (!pickedIds.has(q.id)) {
      picked.push(q);
      pickedIds.add(q.id);
    }
  }

  if (picked.length < target) {
    const need = target - picked.length;
    const staleRemaining = stale.filter((q) => !pickedIds.has(q.id));
    const takeStale = pickN(staleRemaining, Math.min(need, staleRemaining.length));
    for (const q of takeStale) {
      if (!pickedIds.has(q.id)) {
        picked.push(q);
        pickedIds.add(q.id);
      }
    }
  }

  return picked.slice(0, target);
}

// Keep this in sync with your Category union
const EMPTY_MIX: Record<Category, number> = {
  intent: 0,
  accountability: 0,
  communication: 0,
  regulation: 0,
  money: 0,
  repair: 0,
  values: 0,
  humor: 0,

  boundaries: 0,
  co_living: 0,
  trust: 0,
  intimacy: 0,

  parenting_family: 0,
  breakup_exit: 0,

  anchor: 0,

  // new
  adult_parent: 0,
  marriage: 0,
  health_wellness: 0,
  fitness_goals: 0,
};

const PRIORITY_ORDER: NonAnchorCategory[] = [
  // core
  "intent",
  "values",
  "communication",
  "accountability",
  "regulation",
  "repair",
  "money",
  "humor",
  // deep
  "trust",
  "boundaries",
  "co_living",
  "intimacy",
  "parenting_family",
  "breakup_exit",
  // new
  "adult_parent",
  "marriage",
  "health_wellness",
  "fitness_goals",
];

function clampInt(n: number, min: number, max: number) {
  const x = Math.floor(Number.isFinite(n) ? n : min);
  return Math.max(min, Math.min(max, x));
}

/**
 * Your UI can allow any number; we clamp to keep UX sane.
 * You can adjust these bounds.
 */
function normalizeSize(size: number) {
  return clampInt(size, 3, 50);
}

/**
 * For custom sizes, we choose a baseline profile based on “closest preset”
 * and then distribute extra slots across core categories first.
 */
function baselineForSize(size: number) {
  if (size <= 6) return 5;
  if (size <= 10) return 8;
  return 12;
}

/**
 * Baseline “seed profile” (5/8/12) used by computeDefaultMix.
 * This matches your requested baseline behavior exactly.
 */
function applyBaselineProfile(base: Record<Category, number>, baseline: number) {
  // reset all non-anchor counts
  for (const k of Object.keys(base) as Category[]) {
    if (k !== "anchor") base[k] = 0;
  }

  if (baseline === 5) {
    base.intent = 1;
    base.accountability = 1;
    base.communication = 1;
    base.regulation = 1;
    base.money = 1;
    return;
  }

  if (baseline === 8) {
    base.intent = 2;
    base.accountability = 1;
    base.communication = 1;
    base.regulation = 1;
    base.money = 1;
    base.repair = 1;
    base.humor = 1;
    return;
  }

  // baseline 12+ default
  base.intent = 2;
  base.accountability = 2;
  base.communication = 2;
  base.regulation = 2;
  base.money = 1;
  base.repair = 1;
  base.values = 1;
  base.humor = 1;
}

/**
 * Default mix when user did NOT pick categories.
 * Works for ANY size.
 * Anchor handled separately so it can never be accidentally sliced out.
 */
function computeDefaultMix(
  sizeInput: number,
  weights?: Partial<Record<Category, number>>,
  reservedSlots = 0,
) {
  const size = normalizeSize(sizeInput);
  const target = Math.max(0, size - reservedSlots);
  const base: Record<Category, number> = { ...EMPTY_MIX };

  if (target === 0) return base;

  // start from a baseline profile (5/8/12) then “grow” it
  const baseline = baselineForSize(size);
  applyBaselineProfile(base, baseline);

  // If baseline overshoots (possible with very small target), reduce.
  let total = Object.entries(base)
    .filter(([k]) => k !== "anchor")
    .reduce((s, [, v]) => s + v, 0);

  let over = Math.max(0, total - target);
  if (over > 0) {
    const reductionOrder: NonAnchorCategory[] = [
      // shave “nice-to-haves” first
      "humor",
      "values",
      "repair",
      "money",

      // then core pillars
      "regulation",
      "communication",
      "accountability",
      "intent",

      // then deeper/optional domains
      "trust",
      "boundaries",
      "co_living",
      "intimacy",
      "parenting_family",
      "adult_parent",
      "marriage",
      "health_wellness",
      "fitness_goals",
      "breakup_exit",
    ];

    let i = 0;
    while (over > 0 && i < 600) {
      const c = reductionOrder[i % reductionOrder.length];
      if (base[c] > 0) {
        base[c] -= 1;
        over -= 1;
      }
      i++;
      if (reductionOrder.every((k) => base[k] === 0)) break;
    }
  }

  // If baseline undershoots (common for custom sizes), add extras in priority order.
  total = Object.entries(base)
    .filter(([k]) => k !== "anchor")
    .reduce((s, [, v]) => s + v, 0);

  let remaining = Math.max(0, target - total);
  if (remaining > 0) {
    // grow core first, then deep
    let i = 0;
    while (remaining > 0 && i < 2000) {
      const c = PRIORITY_ORDER[i % PRIORITY_ORDER.length];
      base[c] += 1;
      remaining -= 1;
      i++;
    }
  }

  // Optional: weights as gentle nudges
  if (weights) {
    const allowed: NonAnchorCategory[] = [...PRIORITY_ORDER];
    const ranked = [...allowed]
      .sort((a, b) => (weights[b] ?? 0) - (weights[a] ?? 0))
      .filter((c) => (weights[c] ?? 0) > 0);

    if (ranked.length) {
      const nudges = Math.min(4, Math.floor(target / 4));
      for (let i = 0; i < nudges; i++) {
        const to = ranked[i % ranked.length];
        const from = [...PRIORITY_ORDER].reverse().find((c) => c !== to && base[c] > 0);
        if (from && from !== to) {
          base[from] -= 1;
          base[to] += 1;
        }
      }
    }
  }

  return base;
}

/**
 * When user picks categories: build a mix only across those categories (excluding anchor).
 * Works for ANY size.
 */
function computeSelectedMix(
  sizeInput: number,
  allowedCategories: Category[],
  weights?: Partial<Record<Category, number>>,
  reservedSlots = 0,
) {
  const size = normalizeSize(sizeInput);
  const target = Math.max(0, size - reservedSlots);
  const base: Record<Category, number> = { ...EMPTY_MIX };

  const allowed: NonAnchorCategory[] = Array.from(
    new Set(allowedCategories.filter((c): c is NonAnchorCategory => c !== "anchor")),
  );

  if (allowed.length === 0 || target === 0) return base;

  const ordered: NonAnchorCategory[] = PRIORITY_ORDER.filter((c) => allowed.includes(c));
  const cycle: NonAnchorCategory[] = ordered.length ? ordered : allowed;

  // simple, fair distribution
  for (let i = 0; i < target; i++) {
    base[cycle[i % cycle.length]] += 1;
  }

  // gentle nudges via weights (optional)
  if (weights) {
    const ranked = [...allowed]
      .sort((a, b) => (weights[b] ?? 0) - (weights[a] ?? 0))
      .filter((c) => (weights[c] ?? 0) > 0);

    if (ranked.length) {
      const nudges = Math.min(4, Math.floor(target / 4));
      for (let i = 0; i < nudges; i++) {
        const to = ranked[i % ranked.length];
        const from = [...cycle].reverse().find((c) => c !== to && base[c] > 0);
        if (from && from !== to) {
          base[from] -= 1;
          base[to] += 1;
        }
      }
    }
  }

  return base;
}

export function generateDeck(all: Question[], options: DeckOptions): Deck {
  const recent = new Set<string>(options.recentQuestionIds ?? []);
  const selectedCategories = options.categories ?? [];

  const size = normalizeSize(options.size);

  const toneOk = (q: Question) =>
    options.tone === "mixed" ? true : q.tone === options.tone || q.tone === "neutral";

  const tagOk = (q: Question) => !(q.tags ?? []).some((t) => (options.excludeTags ?? []).includes(t));

  // Anchor: separate, never blocked by category selection
  const includeAnchor = size >= 8;
  const anchorCandidates = includeAnchor
    ? all.filter((q) => toneOk(q) && tagOk(q) && q.category === "anchor")
    : [];

  const anchorFresh = anchorCandidates.filter((q) => !recent.has(q.id));
  const anchor =
    anchorFresh.length
      ? pickOne(anchorFresh)
      : anchorCandidates.length
        ? pickOne(anchorCandidates)
        : undefined;

  const reserved = anchor ? 1 : 0;

  // Non-anchor pool, category constrained
  const categoryOk = (q: Question) => {
    if (q.category === "anchor") return false;
    if (!selectedCategories.length) return true;
    return selectedCategories.includes(q.category);
  };

  const pool = all.filter((q) => toneOk(q) && tagOk(q) && categoryOk(q));

  const mix = selectedCategories.length
    ? computeSelectedMix(size, selectedCategories, options.weights, reserved)
    : computeDefaultMix(size, options.weights, reserved);

  const chosen: Question[] = [];
  const already = new Set<string>();

  if (anchor) {
    chosen.push(anchor);
    already.add(anchor.id);
  }

  for (const [cat, n] of Object.entries(mix) as [Category, number][]) {
    if (cat === "anchor" || n <= 0) continue;
    const candidates = pool.filter((q) => q.category === cat && !already.has(q.id));
    const picked = pickNWithCooldown(candidates, n, recent);
    for (const q of picked) already.add(q.id);
    chosen.push(...picked);
  }

  const remainingSlots = Math.max(0, size - chosen.length);
  const fillCandidates = pool.filter((q) => !already.has(q.id));
  const fillPicked = pickNWithCooldown(fillCandidates, remainingSlots, recent);

  const questions = shuffle([...chosen, ...fillPicked]).slice(0, size);

  return {
    id: uid(),
    createdAt: Date.now(),
    // store normalized size back into options to keep everything consistent
    options: { ...options, size },
    questions,
    index: 0,
    savedQuestionIds: [],
    swapsByIndex: {},
  };
}

export function swapQuestion(deck: Deck, all: Question[]): Deck {
  const current = deck.questions[deck.index];
  if (!current) return deck;

  const excludeIds = new Set(deck.questions.map((q) => q.id));
  const recent = new Set<string>(deck.options.recentQuestionIds ?? []);
  const selectedCategories = deck.options.categories ?? [];

  const toneOk = (q: Question) =>
    deck.options.tone === "mixed"
      ? true
      : q.tone === deck.options.tone || q.tone === "neutral";

  const tagOk = (q: Question) => !(q.tags ?? []).some((t) => (deck.options.excludeTags ?? []).includes(t));

  const categoryOk = (q: Question) => {
    if (q.category === "anchor") return false;
    if (!selectedCategories.length) return true;
    return selectedCategories.includes(q.category);
  };

  const baseOk = (q: Question) => toneOk(q) && tagOk(q) && categoryOk(q) && !excludeIds.has(q.id);

  const tier1 = all.filter(
    (q) => baseOk(q) && q.category === current.category && q.intensity === current.intensity,
  );
  const tier2 = all.filter((q) => baseOk(q) && q.category === current.category);
  const tier3 = all.filter((q) => baseOk(q));

  const pickPreferFresh = (arr: Question[]) => {
    if (!arr.length) return null;
    const fresh = arr.filter((q) => !recent.has(q.id));
    return pickOne(fresh.length ? fresh : arr);
  };

  const replacement = pickPreferFresh(tier1) ?? pickPreferFresh(tier2) ?? pickPreferFresh(tier3);
  if (!replacement) return deck;

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