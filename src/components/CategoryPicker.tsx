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
};

const CATEGORY_HINTS: Partial<Record<Category, string>> = {
  boundaries: "Agreements, what’s acceptable, what isn’t.",
  co_living: "Home routines, chores, space, systems.",
  trust: "Truth, consistency, reliability.",
  intimacy: "Affection, consent, closeness.",
  parenting_family: "Family systems and roles.",
  breakup_exit: "If it ends, how do we do it well?",
};

const CORE: Category[] = [
  "intent",
  "values",
  "communication",
  "accountability",
  "regulation",
  "repair",
  "money",
  "humor",
];

const DEEP: Category[] = [
  "trust",
  "boundaries",
  "co_living",
  "intimacy",
  "parenting_family",
  "breakup_exit",
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
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[12px] font-extrabold transition active:scale-[0.99]"
      style={{
        background: active
          ? "var(--seg-selected-bg)"
          : "color-mix(in srgb, var(--fg) 4%, transparent)",
        color: active ? "var(--seg-selected-fg)" : "var(--fg)",
        border: "1px solid color-mix(in srgb, var(--fg) 12%, transparent)",
        boxShadow: active
          ? "inset 0 1px 0 var(--glass-highlight), inset 0 -1px 0 var(--glass-inner)"
          : "none",
      }}
    >
      <span>{label}</span>

      {typeof count === "number" && (
        <span
          className="rounded-full px-2 py-[2px] text-[10px] font-extrabold"
          style={{
            background: active
              ? "color-mix(in srgb, var(--seg-selected-fg) 14%, transparent)"
              : "color-mix(in srgb, var(--fg) 8%, transparent)",
            color: active ? "var(--seg-selected-fg)" : "var(--muted)",
            border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
          }}
        >
          {count}
        </span>
      )}
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

  const coreCats = useMemo(() => CORE.filter((c) => !hiddenSet.has(c)), [hiddenSet]);
  const deepCats = useMemo(() => DEEP.filter((c) => !hiddenSet.has(c)), [hiddenSet]);
  const allCats = useMemo(() => uniq([...coreCats, ...deepCats]), [coreCats, deepCats]);

  const selected = useMemo(() => new Set(value), [value]);
  const anySelected = value.length > 0;

  // Filter = view only (does NOT change selection)
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

  const selectAll = () => onChange(allCats);
  const clearAll = () => onChange([]);

  // Nice tiny label style (homepage-y)
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
          <div className="text-sm font-extrabold" style={{ color: "var(--fg)" }}>
            Pick the vibe of the deck
          </div>
          <div className="text-[11px]" style={{ color: "var(--muted)" }}>
            Multi-select. Empty = any category.
          </div>
        </div>
      )}

      {/* FILTER (view only) */}
      <div className="space-y-2">
        <div style={labelStyle}>Filter</div>

        <div className="grid grid-cols-3 gap-1 rounded-2xl p-1" style={segWrapStyle}>
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
            Core
          </button>
          <button
            type="button"
            onClick={() => setFilter("deep")}
            aria-pressed={filter === "deep"}
            className="h-8 rounded-xl text-[12px] font-extrabold transition"
            style={segBtn(filter === "deep")}
          >
            Deep
          </button>
        </div>

        <div className="text-[11px]" style={{ color: "var(--muted)" }}>
          {filter === "core"
            ? "Day-to-day clarity: communication, values, regulation, repair."
            : filter === "deep"
              ? "Higher stakes: trust, boundaries, co-living, intimacy, exit clarity."
              : "Browse everything. Selection stays the same."}
        </div>
      </div>

      {/* ACTIONS (selection only) */}
      <div className="space-y-2">
        <div style={labelStyle}>Selection</div>

        <div className="grid grid-cols-2 gap-1 rounded-2xl p-1" style={segWrapStyle}>
          <button
            type="button"
            onClick={selectAll}
            className="h-8 rounded-xl text-[12px] font-extrabold transition"
            style={segBtn(anySelected && value.length === allCats.length)}
            title="Select all categories"
          >
            Select all
          </button>
          <button
            type="button"
            onClick={clearAll}
            className="h-8 rounded-xl text-[12px] font-extrabold transition"
            style={segBtn(!anySelected)}
            title="Clear selected categories"
          >
            Clear all
          </button>
        </div>
      </div>

      {/* CHIPS */}
      <div className="flex flex-wrap gap-2">
        {visibleCats.map((cat) => (
          <Chip
            key={cat}
            label={CATEGORY_LABELS[cat]}
            hint={CATEGORY_HINTS[cat]}
            count={counts?.[cat]}
            active={selected.has(cat)}
            onClick={() => toggle(cat)}
          />
        ))}
      </div>

      {/* FOOTER */}
      <div className="flex justify-between text-[11px]" style={{ color: "var(--muted)" }}>
        <span>Selected</span>
        <span style={{ color: "var(--fg)", fontWeight: 800 }}>
          {value.length ? `${value.length} picked` : "Any"}
        </span>
      </div>
    </div>
  );
}