// src/components/CategoryPicker.tsx
import { useMemo, useState } from "react";
import type { Category } from "../domain/types";

type Props = {
  value: Category[];
  onChange: (next: Category[]) => void;
  hidden?: Category[];
  counts?: Partial<Record<Category, number>>;
  showHeader?: boolean;
};

const CATEGORY_LABELS: Record<Category, string> = {
  intent: "Intent",
  accountability: "Accountability",
  communication: "Communication",
  regulation: "Regulation",
  money: "Money",
  repair: "Repair",
  values: "Values",
  humor: "Humor",
  anchor: "Anchor",

  boundaries: "Boundaries",
  co_living: "Co-living",
  trust: "Trust",
  intimacy: "Intimacy",
  parenting_family: "Parenting",
  breakup_exit: "Exit clarity",

  adult_parent: "Adult + Parent",
  marriage: "Marriage",
  health_wellness: "Health + Wellness",
  fitness_goals: "Fitness Goals",
};

const CATEGORY_HINTS: Partial<Record<Category, string>> = {
  boundaries: "Agreements, what’s acceptable, what isn’t.",
  co_living: "Home routines, chores, space, systems.",
  trust: "Truth, consistency, reliability.",
  intimacy: "Affection, consent, closeness.",
  parenting_family: "Family systems and roles.",
  breakup_exit: "If it ends, how do we do it well?",
  adult_parent: "Grown-up boundaries with the people who raised you.",
  marriage: "Long-game partnership, upkeep, and re-choosing each other.",
  health_wellness: "Body, mind, stress, rest, and support.",
  fitness_goals: "Consistency, identity, habits, and accountability.",
};

// “Surface” categories
const CORE: Category[] = [
  "intent",
  "values",
  "communication",
  "accountability",
  "regulation",
  "repair",
  "money",
  "humor",
  "health_wellness",
  "fitness_goals",
];

// “Underneath” categories
const DEEP: Category[] = [
  "trust",
  "boundaries",
  "co_living",
  "intimacy",
  "parenting_family",
  "breakup_exit",
  "adult_parent",
  "marriage",
];

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

function Chip({
  label,
  hint,
  count,
  active,
  onClick,
}: {
  label: string;
  hint?: string;
  count?: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      title={hint ? `${label}: ${hint}` : label}
      className="group flex items-center justify-between gap-3 rounded-2xl px-3 py-3 text-[12px] font-extrabold transition active:scale-[0.99]"
      style={{
        background: active
          ? "var(--seg-selected-bg)"
          : "color-mix(in srgb, var(--fg) 3.5%, transparent)",
        color: active ? "var(--seg-selected-fg)" : "var(--fg)",
        border: active
          ? "1px solid color-mix(in srgb, var(--seg-selected-fg) 18%, transparent)"
          : "1px solid color-mix(in srgb, var(--fg) 9%, transparent)",
        boxShadow: active
          ? "inset 0 1px 0 var(--glass-highlight), inset 0 -1px 0 var(--glass-inner)"
          : "none",
      }}
    >
      <span className="leading-tight">{label}</span>

      {typeof count === "number" && (
        <span
          className="shrink-0 rounded-full px-2 py-[2px] text-[10px] font-extrabold"
          style={{
            background: active
              ? "color-mix(in srgb, var(--seg-selected-fg) 14%, transparent)"
              : "color-mix(in srgb, var(--fg) 7%, transparent)",
            color: active ? "var(--seg-selected-fg)" : "var(--muted)",
            border: "1px solid color-mix(in srgb, var(--fg) 9%, transparent)",
            opacity: 0.92,
          }}
        >
          {count}
        </span>
      )}
    </button>
  );
}

function SmallPill({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[11px] font-extrabold transition active:scale-[0.99]"
      style={{
        background: "color-mix(in srgb, var(--fg) 6%, transparent)",
        color: "var(--fg)",
        border: "1px solid color-mix(in srgb, var(--fg) 12%, transparent)",
      }}
      title="Remove"
    >
      <span>{label}</span>
      <span
        aria-hidden
        className="grid place-items-center rounded-full w-5 h-5 text-[12px]"
        style={{
          background: "color-mix(in srgb, var(--fg) 10%, transparent)",
          color: "var(--muted)",
        }}
      >
        ×
      </span>
    </button>
  );
}

export function CategoryPicker({
  value,
  onChange,
  hidden = [],
  counts,
  showHeader = false,
}: Props) {
  const hiddenSet = useMemo(() => new Set(hidden), [hidden]);

  const coreCats = useMemo(
    () => CORE.filter((c) => !hiddenSet.has(c)),
    [hiddenSet],
  );
  const deepCats = useMemo(
    () => DEEP.filter((c) => !hiddenSet.has(c)),
    [hiddenSet],
  );
  const allCats = useMemo(
    () => uniq([...coreCats, ...deepCats]),
    [coreCats, deepCats],
  );

  const selectedSet = useMemo(() => new Set(value), [value]);
  const anySelected = value.length > 0;

  const [filter, setFilter] = useState<"all" | "core" | "deep">("all");

  const visibleCats = useMemo(() => {
    if (filter === "core") return coreCats;
    if (filter === "deep") return deepCats;
    return allCats;
  }, [filter, coreCats, deepCats, allCats]);

  const toggle = (cat: Category) => {
    const next = new Set(value);
    next.has(cat) ? next.delete(cat) : next.add(cat);
    onChange(Array.from(next));
  };

  const selectAllVisible = () => {
    const next = new Set(value);
    for (const c of visibleCats) next.add(c);
    onChange(Array.from(next));
  };

  const clearAll = () => onChange([]);

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--muted)",
  };

  const segWrapStyle: React.CSSProperties = {
    background: "var(--seg-surface)",
    border: "1px solid var(--seg-border)",
  };

  const segBtn = (active: boolean): React.CSSProperties => ({
    background: active ? "var(--seg-selected-bg)" : "transparent",
    color: active ? "var(--seg-selected-fg)" : "var(--fg)",
    boxShadow: active
      ? "inset 0 1px 0 var(--glass-highlight), inset 0 -1px 0 var(--glass-inner)"
      : "none",
    opacity: active ? 1 : 0.9,
  });

  return (
    <div className="space-y-4">
      {showHeader && (
        <div className="space-y-1">
          <div style={labelStyle}>Categories</div>
          <div
            className="text-sm font-extrabold"
            style={{ color: "var(--fg)" }}
          >
            Choose what you want to touch
          </div>
          <div className="text-[11px]" style={{ color: "var(--muted)" }}>
            Empty means the deck can pull from anywhere.
          </div>
        </div>
      )}

      {/* TOP BAR: Layers + actions (single row, less stacking) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div style={labelStyle}>Layer</div>
          <div className="text-[11px]" style={{ color: "var(--muted)" }}>
            {anySelected ? `${value.length} selected` : "Any"}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div
            className="grid grid-cols-3 gap-1 rounded-2xl p-1 flex-1"
            style={segWrapStyle}
          >
            <button
              type="button"
              onClick={() => setFilter("all")}
              aria-pressed={filter === "all"}
              className="h-8 rounded-xl text-[12px] font-extrabold transition"
              style={segBtn(filter === "all")}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setFilter("core")}
              aria-pressed={filter === "core"}
              className="h-8 rounded-xl text-[12px] font-extrabold transition"
              style={segBtn(filter === "core")}
            >
              Surface
            </button>
            <button
              type="button"
              onClick={() => setFilter("deep")}
              aria-pressed={filter === "deep"}
              className="h-8 rounded-xl text-[12px] font-extrabold transition"
              style={segBtn(filter === "deep")}
            >
              Underneath
            </button>
          </div>

          <button
            type="button"
            onClick={selectAllVisible}
            className="h-10 px-3 rounded-2xl text-[12px] font-extrabold transition"
            style={{
              background: "color-mix(in srgb, var(--fg) 4%, transparent)",
              color: "var(--fg)",
              border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
            }}
            title="Select all in this layer"
          >
            All
          </button>

          <button
            type="button"
            onClick={clearAll}
            className="h-10 px-3 rounded-2xl text-[12px] font-extrabold transition"
            style={{
              background: "transparent",
              color: "var(--muted)",
              border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
            }}
            title="Clear selected categories"
          >
            None
          </button>
        </div>

        <div className="text-[11px]" style={{ color: "var(--muted)" }}>
          {filter === "core"
            ? "Start light: clarity, values, everyday truth."
            : filter === "deep"
              ? "Higher stakes: trust, boundaries, intimacy, family."
              : "Browse everything. Selection is separate."}
        </div>
      </div>

      {/* SELECTED: visible + removable (reduces “what did I pick?” mental load) */}
      {anySelected && (
        <div className="space-y-2">
          <div style={labelStyle}>Selected</div>
          <div className="flex flex-wrap gap-2">
            {value
              .slice()
              .sort((a, b) =>
                CATEGORY_LABELS[a].localeCompare(CATEGORY_LABELS[b]),
              )
              .map((cat) => (
                <SmallPill
                  key={cat}
                  label={CATEGORY_LABELS[cat]}
                  onRemove={() => toggle(cat)}
                />
              ))}
          </div>
        </div>
      )}

      {/* CHIPS: grid instead of wrap (cleaner, less “pile”) */}
      <div className="space-y-2">
        <div style={labelStyle}>
          {filter === "core"
            ? "Surface"
            : filter === "deep"
              ? "Underneath"
              : "All categories"}
        </div>

        <div className="grid grid-cols-2 gap-2">
          {visibleCats.map((cat) => (
            <Chip
              key={cat}
              label={CATEGORY_LABELS[cat]}
              hint={CATEGORY_HINTS[cat]}
              count={counts?.[cat]}
              active={selectedSet.has(cat)}
              onClick={() => toggle(cat)}
            />
          ))}
        </div>

        <div className="text-[11px]" style={{ color: "var(--muted)" }}>
          Tip: leave selection empty for “surprise me.”
        </div>
      </div>
    </div>
  );
}