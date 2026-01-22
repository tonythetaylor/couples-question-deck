import { useMemo, useState } from "react";
import type { Category } from "../domain/types";
import type { DeckOptions, Tone } from "../domain/types";
import { CategoryPicker } from "../components/CategoryPicker";
import { QUESTIONS } from "../data/questions";
import { generateDeck } from "../domain/deck";
import { loadDeckHistory, pushDeckHistory, saveActiveDeck } from "../storage/db";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { ChevronDown } from "lucide-react";

const RECENT_COOLDOWN_LIMIT = 80;

// Keep consistent with deck.ts normalizeSize bounds
const MIN_SIZE = 3;
const MAX_SIZE = 50;

function clampInt(n: number, min: number, max: number) {
  const x = Math.floor(Number.isFinite(n) ? n : min);
  return Math.max(min, Math.min(max, x));
}

function collectRecentQuestionIdsFromHistory(history: any[], limit: number) {
  const seen = new Set<string>();
  const out: string[] = [];

  for (const deck of history ?? []) {
    const qs = deck?.questions ?? [];
    for (const q of qs) {
      const id = q?.id;
      if (!id || seen.has(id)) continue;
      seen.add(id);
      out.push(id);
      if (out.length >= limit) return out;
    }
  }
  return out;
}

const CATEGORY_LABELS: Partial<Record<Category, string>> = {
  intent: "Intent",
  accountability: "Accountability",
  communication: "Communication",
  regulation: "Regulation",
  money: "Money",
  repair: "Repair",
  values: "Values",
  humor: "Humor",
  boundaries: "Boundaries",
  co_living: "Co-living",
  trust: "Trust",
  intimacy: "Intimacy",
  parenting_family: "Parenting/Family",
  breakup_exit: "Exit Clarity",
};

function SummaryPill({ text }: { text: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-extrabold tracking-[0.08em] uppercase"
      style={{
        background: "color-mix(in srgb, var(--fg) 4%, transparent)",
        border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
        color: "var(--fg)",
      }}
    >
      {text}
    </span>
  );
}

function CollapsibleSection({
  eyebrow,
  title,
  subtitle,
  open,
  onToggle,
  rightSlot,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  open: boolean;
  onToggle: () => void;
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left"
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div
              className="text-[11px] font-extrabold tracking-[0.14em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              {eyebrow}
            </div>

            <div
              className="text-sm font-extrabold tracking-tight"
              style={{ color: "var(--fg)" }}
            >
              {title}
            </div>

            {subtitle ? (
              <div className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>
                {subtitle}
              </div>
            ) : null}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {rightSlot}
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl"
              style={{
                background: "color-mix(in srgb, var(--fg) 3%, transparent)",
                border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
                color: "var(--fg)",
              }}
              aria-hidden
            >
              <ChevronDown
                size={16}
                className="transition-transform opacity-80"
                style={{
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </span>
          </div>
        </div>
      </button>

      {open ? <div className="mt-5">{children}</div> : null}
    </Card>
  );
}

export function HomePage({ onStart }: { onStart: () => void }) {
  // Presets + custom
  const [presetSize, setPresetSize] = useState<5 | 8 | 12>(8);
  const [useCustomSize, setUseCustomSize] = useState(false);
  const [customSizeRaw, setCustomSizeRaw] = useState<string>("8");

  const size = useMemo(() => {
    if (!useCustomSize) return presetSize;
    const parsed = Number(customSizeRaw);
    return clampInt(parsed, MIN_SIZE, MAX_SIZE);
  }, [useCustomSize, presetSize, customSizeRaw]);

  const [tone, setTone] = useState<DeckOptions["tone"]>("mixed");
  const [excludeMoney, setExcludeMoney] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  // Collapsibles (flow: categories → customize)
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [customizeOpen, setCustomizeOpen] = useState(false);

  const excludeTags = useMemo(() => {
    const tags: string[] = [];
    if (excludeMoney) tags.push("money", "expectations");
    return tags;
  }, [excludeMoney]);

  const categoryCounts = useMemo(() => {
    const out: Partial<Record<Category, number>> = {};
    for (const q of QUESTIONS) out[q.category] = (out[q.category] ?? 0) + 1;
    return out;
  }, []);

  async function handleGenerate() {
    const history = await loadDeckHistory();
    const recentQuestionIds = collectRecentQuestionIdsFromHistory(history, RECENT_COOLDOWN_LIMIT);

    const opts: DeckOptions = {
      size,
      tone,
      excludeTags,
      recentQuestionIds,
      categories: selectedCategories,
    };

    const deck = generateDeck(QUESTIONS, opts);

    await saveActiveDeck(deck);
    await pushDeckHistory(deck);
    onStart();
  }

  // Minimal, non-interactive tags
  const tagStyle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "var(--muted)",
    padding: 0,
    border: "none",
    background: "transparent",
  };

  const whatsInside = useMemo(() => {
    const defaults: Category[] = [
      "intent",
      "accountability",
      "communication",
      "regulation",
      "money",
      "repair",
      "values",
      "humor",
    ];

    const list = selectedCategories.length ? selectedCategories : defaults;
    return list.map((c) => CATEGORY_LABELS[c] ?? c);
  }, [selectedCategories]);

  const pickedCount = selectedCategories.length;

  return (
    <div className="mx-auto max-w-md px-4 py-6 space-y-4">
      {/* Header */}
      <header className="pt-safe space-y-2">
        <div
          className="text-[11px] font-extrabold tracking-[0.14em] uppercase"
          style={{ color: "var(--muted)" }}
        >
          Shared Reality Deck
        </div>

        <h1
          className="text-[26px] leading-[1.12] font-extrabold tracking-tight"
          style={{ color: "var(--fg)" }}
        >
          Revealing questions, one at a time.
        </h1>

        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          No gotchas. You’re gathering data, not arguing.
        </p>
      </header>

      {/* 1) Categories FIRST */}
      <CollapsibleSection
        eyebrow="Step 1"
        title="Pick categories"
        subtitle="Optional. Empty means any category."
        open={categoriesOpen}
        onToggle={() => setCategoriesOpen((v) => !v)}
        rightSlot={<SummaryPill text={pickedCount ? `${pickedCount} picked` : "Any"} />}
      >
        <CategoryPicker
          value={selectedCategories}
          onChange={setSelectedCategories}
          hidden={["anchor"]}
          counts={categoryCounts}
          showHeader={false}
        />

        {/* Small helper action: encourage next step */}
        <div className="mt-5">
          <Button
            className="w-full"
            variant="ghost"
            onClick={() => {
              setCustomizeOpen(true);
              setCategoriesOpen(false);
            }}
          >
            Continue to deck options
          </Button>
        </div>
      </CollapsibleSection>

      {/* 2) Customize SECOND */}
      <CollapsibleSection
        eyebrow="Step 2"
        title="Deck options"
        subtitle="Size, tone, and filters."
        open={customizeOpen}
        onToggle={() => setCustomizeOpen((v) => !v)}
        rightSlot={<SummaryPill text={`${size} cards`} />}
      >
        <div className="space-y-5">
          {/* Size */}
          <div className="space-y-2">
            <div className="text-xs font-semibold" style={{ color: "var(--muted)" }}>
              Deck size
            </div>

            {/* Presets + Custom */}
            <div
              className="grid grid-cols-4 gap-1 rounded-2xl p-1"
              style={{
                background: "var(--seg-surface)",
                border: "1px solid var(--seg-border)",
              }}
            >
              {[5, 8, 12].map((n) => {
                const selected = !useCustomSize && presetSize === n;
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => {
                      setUseCustomSize(false);
                      setPresetSize(n as 5 | 8 | 12);
                      setCustomSizeRaw(String(n));
                    }}
                    aria-pressed={selected}
                    className="h-9 rounded-xl text-[12px] font-extrabold transition"
                    style={{
                      background: selected ? "var(--seg-selected-bg)" : "transparent",
                      color: selected ? "var(--seg-selected-fg)" : "var(--fg)",
                      boxShadow: selected
                        ? "inset 0 1px 0 var(--glass-highlight), inset 0 -1px 0 var(--glass-inner)"
                        : "none",
                    }}
                  >
                    {n}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => {
                  setUseCustomSize(true);
                  if (!customSizeRaw) setCustomSizeRaw(String(presetSize));
                }}
                aria-pressed={useCustomSize}
                className="h-9 rounded-xl text-[12px] font-extrabold transition"
                style={{
                  background: useCustomSize ? "var(--seg-selected-bg)" : "transparent",
                  color: useCustomSize ? "var(--seg-selected-fg)" : "var(--fg)",
                  boxShadow: useCustomSize
                    ? "inset 0 1px 0 var(--glass-highlight), inset 0 -1px 0 var(--glass-inner)"
                    : "none",
                }}
              >
                Custom
              </button>
            </div>

            {useCustomSize ? (
              <div
                className="rounded-2xl px-4 py-3"
                style={{
                  background: "color-mix(in srgb, var(--fg) 3%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold" style={{ color: "var(--muted)" }}>
                      Custom size
                    </div>
                    <div className="text-[11px]" style={{ color: "var(--muted)" }}>
                      {MIN_SIZE}–{MAX_SIZE} cards
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setCustomSizeRaw(
                          String(clampInt(Number(customSizeRaw) - 1, MIN_SIZE, MAX_SIZE))
                        )
                      }
                      className="h-9 w-9 rounded-xl font-extrabold"
                      style={{
                        background: "var(--seg-surface)",
                        border: "1px solid var(--seg-border)",
                        color: "var(--fg)",
                      }}
                      aria-label="Decrease size"
                    >
                      −
                    </button>

                    <input
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={customSizeRaw}
                      onChange={(e) => setCustomSizeRaw(e.target.value.replace(/[^\d]/g, ""))}
                      onBlur={() =>
                        setCustomSizeRaw(String(clampInt(Number(customSizeRaw), MIN_SIZE, MAX_SIZE)))
                      }
                      className="h-9 w-16 rounded-xl text-center text-sm font-extrabold outline-none"
                      style={{
                        background: "transparent",
                        border: "1px solid color-mix(in srgb, var(--fg) 12%, transparent)",
                        color: "var(--fg)",
                      }}
                      aria-label="Custom deck size"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setCustomSizeRaw(
                          String(clampInt(Number(customSizeRaw) + 1, MIN_SIZE, MAX_SIZE))
                        )
                      }
                      className="h-9 w-9 rounded-xl font-extrabold"
                      style={{
                        background: "var(--seg-surface)",
                        border: "1px solid var(--seg-border)",
                        color: "var(--fg)",
                      }}
                      aria-label="Increase size"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-2 text-[11px]" style={{ color: "var(--muted)" }}>
                  Effective size:{" "}
                  <span style={{ color: "var(--fg)", fontWeight: 800 }}>{size}</span>
                </div>
              </div>
            ) : null}
          </div>

          {/* Tone */}
          <div className="space-y-2">
            <div className="text-xs font-semibold" style={{ color: "var(--muted)" }}>
              Tone
            </div>

            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                background: "color-mix(in srgb, var(--fg) 4%, transparent)",
                border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-8"
                style={{
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.14), transparent)",
                  opacity: 0.7,
                }}
              />

              <select
                value={tone}
                onChange={(e) => setTone(e.target.value as Tone | "mixed")}
                className="relative z-10 w-full bg-transparent outline-none px-4 h-11 text-sm font-semibold"
                style={{ color: "var(--fg)" }}
              >
                <option value="mixed">Mixed</option>
                <option value="gentle">Gentle</option>
                <option value="neutral">Neutral</option>
                <option value="direct">Direct</option>
              </select>
            </div>

            <div className="text-[11px]" style={{ color: "var(--muted)" }}>
              Mixed is best for first runs.
            </div>
          </div>

          {/* Exclude money */}
          <label
            className="flex items-center justify-between gap-4 rounded-2xl px-4 py-3"
            style={{
              background: "color-mix(in srgb, var(--fg) 3%, transparent)",
              border: "1px solid color-mix(in srgb, var(--fg) 8%, transparent)",
            }}
          >
            <div className="space-y-0.5">
              <div className="text-sm font-extrabold" style={{ color: "var(--fg)" }}>
                Avoid money topics
              </div>
              <div className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>
                Removes money + expectations prompts.
              </div>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={excludeMoney}
              onClick={() => setExcludeMoney((v) => !v)}
              className="h-7 w-12 rounded-full p-1 transition"
              style={{
                background: excludeMoney ? "var(--toggle-track-on)" : "var(--toggle-track-off)",
                border: "1px solid var(--toggle-track-border)",
                boxShadow: excludeMoney
                  ? "inset 0 1px 0 var(--glass-highlight), inset 0 -1px 0 var(--glass-inner)"
                  : "none",
              }}
            >
              <span
                className="block h-5 w-5 rounded-full transition"
                style={{
                  transform: excludeMoney ? "translateX(20px)" : "translateX(0px)",
                  background: excludeMoney ? "var(--toggle-thumb-on)" : "var(--toggle-thumb-off)",
                  boxShadow: "inset 0 1px 0 var(--glass-highlight)",
                }}
              />
            </button>
          </label>

          {/* Generate */}
          <Button className="w-full" onClick={handleGenerate}>
            Generate deck
          </Button>

          {/* Collapse after open (your request) */}
          <Button
            className="w-full"
            variant="ghost"
            onClick={() => setCustomizeOpen(false)}
          >
            Collapse options
          </Button>

          <div className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>
            Tip: ask one question per conversation. Don’t explain why you’re asking.
          </div>
        </div>
      </CollapsibleSection>

      {/* What's inside */}
      <Card>
        <div className="text-sm font-extrabold tracking-tight" style={{ color: "var(--fg)" }}>
          What’s inside
        </div>

        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          Questions designed to surface intent, self-awareness, communication depth, regulation,
          and mutuality.
        </p>

        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
          {whatsInside.map((t) => (
            <span key={t} style={tagStyle}>
              {t}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}