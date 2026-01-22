import { useEffect, useMemo, useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  Home,
  RefreshCw,
  Share2,
  X,
  ExternalLink,
  Link as LinkIcon,
} from "lucide-react";

import { QUESTIONS } from "../data/questions";
import { swapQuestion, toggleSave } from "../domain/deck";
import type { Category, Deck } from "../domain/types";
import {
  loadActiveDeck,
  saveActiveDeck,
  loadSavedQuestions,
  saveSavedQuestions,
} from "../storage/db";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

const CATEGORY_LABEL: Record<Category, string> = {
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

  parenting_family: "Parenting / Family",
  breakup_exit: "Exit clarity",
};

const MAX_SWAPS_PER_CARD = 1;

// NEW: how “long” the cooldown memory should be.
// Bigger = fewer repeats across multiple decks.
const RECENT_COOLDOWN_LIMIT = 80;

function safeSlug(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

/**
 * iOS Safari: when user taps "Cancel" on share sheet, navigator.share() throws AbortError.
 * Treat that as a normal exit and do NOT run fallbacks.
 */
function isUserCancelledShare(err: unknown) {
  const anyErr = err as any;
  const name = anyErr?.name;
  const message = String(anyErr?.message ?? "");
  return (
    name === "AbortError" ||
    name === "NotAllowedError" ||
    /abort/i.test(message) ||
    /canceled|cancelled|cancel/i.test(message)
  );
}

// NEW: merge IDs into deck.options.recentQuestionIds (dedupe + cap)
function withRecentIds(deck: Deck, ids: string[]) {
  const prev = deck.options.recentQuestionIds ?? [];
  const next = [...ids, ...prev]; // newest first
  const seen = new Set<string>();
  const deduped: string[] = [];
  for (const id of next) {
    if (!id) continue;
    if (seen.has(id)) continue;
    seen.add(id);
    deduped.push(id);
    if (deduped.length >= RECENT_COOLDOWN_LIMIT) break;
  }
  return {
    ...deck,
    options: { ...deck.options, recentQuestionIds: deduped },
  };
}

export function DeckPage({ onExit }: { onExit: () => void }) {
  const [deck, setDeck] = useState<Deck | null>(null);

  const [sharing, setSharing] = useState(false);
  const [sharePreviewUrl, setSharePreviewUrl] = useState<string | null>(null);
  const [shareFilename, setShareFilename] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // off-screen share template
  const shareRef = useRef<HTMLDivElement | null>(null);

  // NEW: track which question id we already recorded in cooldown,
  // so we don't keep re-adding it on rerenders.
  const lastRecordedIdRef = useRef<string | null>(null);

  useEffect(() => {
    (async () => {
      const d = await loadActiveDeck();
      setDeck(d);
      // prime the ref so the first render doesn’t “double record”
      const first = d?.questions?.[d.index]?.id ?? null;
      lastRecordedIdRef.current = first;
    })();
  }, []);

  // cleanup object URLs
  useEffect(() => {
    return () => {
      if (sharePreviewUrl?.startsWith("blob:")) URL.revokeObjectURL(sharePreviewUrl);
    };
  }, [sharePreviewUrl]);

  const current = useMemo(() => {
    if (!deck) return null;
    return deck.questions[deck.index] ?? null;
  }, [deck]);

  // NEW: every time the visible card changes, push it into recent cooldown memory
  useEffect(() => {
    if (!deck || !current) return;
    if (lastRecordedIdRef.current === current.id) return;

    lastRecordedIdRef.current = current.id;
    const next = withRecentIds(deck, [current.id]);

    // persist quietly (no await needed, but we DO it now, not later)
    setDeck(next);
    saveActiveDeck(next).catch(() => {});
  }, [deck, current?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  async function persist(next: Deck) {
    setDeck(next);
    await saveActiveDeck(next);
  }

  async function handleNext() {
    const d = deck;
    if (!d) return;
    if (d.index >= d.questions.length - 1) return;

    const nextIndex = Math.min(d.index + 1, d.questions.length - 1);
    await persist({ ...d, index: nextIndex });
  }

  async function handlePrev() {
    const d = deck;
    if (!d) return;

    const nextIndex = Math.max(d.index - 1, 0);
    await persist({ ...d, index: nextIndex });
  }

  async function handleSwap() {
    const d = deck;
    if (!d) return;

    const swapsByIndex = (d as any).swapsByIndex ?? {};
    const used = swapsByIndex[d.index] ?? 0;
    if (used >= MAX_SWAPS_PER_CARD) return;

    const swapped = swapQuestion(d, QUESTIONS);

    // NEW: record the replacement card in cooldown immediately (prevents “swap-loop” repeats)
    const swappedCurrent = swapped.questions[swapped.index];
    const withRecent = swappedCurrent ? withRecentIds(swapped, [swappedCurrent.id]) : swapped;

    await persist({
      ...withRecent,
      swapsByIndex: {
        ...swapsByIndex,
        [d.index]: used + 1,
      },
    } as any);
  }

  async function handleSave() {
    const d = deck;
    if (!d) return;

    const next = toggleSave(d);
    await persist(next);

    const saved = await loadSavedQuestions();
    const q = next.questions[next.index];
    if (!q) return;

    const already = saved.some((x) => x.id === q.id);
    const shouldSave = next.savedQuestionIds.includes(q.id);

    const updated = shouldSave
      ? already
        ? saved
        : [q, ...saved]
      : saved.filter((x) => x.id !== q.id);

    await saveSavedQuestions(updated);
  }

  function closeSharePreview() {
    if (sharePreviewUrl?.startsWith("blob:")) URL.revokeObjectURL(sharePreviewUrl);
    setSharePreviewUrl(null);
    setShareFilename(null);
  }

  const deckUrl = `${window.location.origin}${import.meta.env.BASE_URL}`;

  async function copyDeckLink() {
    try {
      await navigator.clipboard.writeText(deckUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
      return;
    } catch {
      // Clipboard can fail on iOS unless https + user gesture; use fallback below.
    }

    try {
      const ta = document.createElement("textarea");
      ta.value = deckUrl;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      ta.style.top = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // last resort: do nothing silently
    }
  }

  async function handleShareImage() {
    if (!current || !shareRef.current) return;

    closeSharePreview();

    setSharing(true);
    try {
      const dataUrl = await htmlToImage.toPng(shareRef.current, {
        pixelRatio: 2,
        cacheBust: true,
        style: { transform: "scale(1)", transformOrigin: "top left" },
      });

      const res = await fetch(dataUrl);
      const blob = await res.blob();

      const safeCategory = safeSlug(CATEGORY_LABEL[current.category] ?? current.category);
      const filename = `shared-reality-${safeCategory}-${current.id}.png`;
      const file = new File([blob], filename, { type: "image/png" });

      const navAny = navigator as any;
      const hasWebShare = typeof navigator.share === "function";
      const canShareFiles =
        hasWebShare &&
        (typeof navAny.canShare !== "function" || navAny.canShare({ files: [file] }));

      if (canShareFiles) {
        try {
          await navigator.share({
            title: "Shared Reality",
            files: [file],
          });
          return;
        } catch (err) {
          if (isUserCancelledShare(err)) return;
          // real error -> continue to modal fallback
        }
      }

      const objectUrl = URL.createObjectURL(blob);
      setSharePreviewUrl(objectUrl);
      setShareFilename(filename);
    } catch (err) {
      if (isUserCancelledShare(err)) return;

      if (typeof navigator.share === "function") {
        try {
          await navigator.share({
            title: "Shared Reality",
            text: "Shared Reality deck",
            url: deckUrl,
          });
          return;
        } catch (e2) {
          if (isUserCancelledShare(e2)) return;
        }
      }
    } finally {
      setSharing(false);
    }
  }

  if (!deck) {
    return (
      <div className="mx-auto max-w-md px-4 py-6">
        <Card>
          <div className="text-sm font-semibold" style={{ color: "var(--muted)" }}>
            No active deck.
          </div>
          <div className="mt-3">
            <Button className="w-full" onClick={onExit}>
              Go home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const isSaved = current ? deck.savedQuestionIds.includes(current.id) : false;
  const isLast = deck.index === deck.questions.length - 1;
  const progress = Math.round(((deck.index + 1) / deck.questions.length) * 100);

  const swapsUsed = (deck as any).swapsByIndex?.[deck.index] ?? 0;
  const canSwap = swapsUsed < MAX_SWAPS_PER_CARD;

  const TIP_TEXT = "Ask it once. Don’t narrate. Let silence do the lifting.";

  return (
    <div className="mx-auto max-w-md px-4 py-6 space-y-4">
      {/* Header */}
      <header className="pt-safe space-y-3">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onExit}
            className="inline-flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Home
          </Button>

          <div className="text-sm font-semibold tabular-nums" style={{ color: "var(--muted)" }}>
            {deck.index + 1} / {deck.questions.length}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-2 w-full rounded-full overflow-hidden bg-slate-200 dark:bg-white/10">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              isLast ? "bg-emerald-600 dark:bg-emerald-400" : "bg-slate-900 dark:bg-slate-50"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Hidden Share Card Template */}
      {current && (
        <div
          aria-hidden="true"
          className="fixed -left-[9999px] top-0 pointer-events-none opacity-0"
        >
          <div
            ref={shareRef}
            className="w-[1080px] h-[1080px] rounded-[56px] p-[72px] flex flex-col justify-between"
            style={{
              background:
                "radial-gradient(800px 600px at 15% 10%, rgba(15,23,42,0.08), transparent 60%)," +
                "radial-gradient(900px 700px at 85% 18%, rgba(2,132,199,0.10), transparent 55%)," +
                "radial-gradient(700px 700px at 35% 88%, rgba(16,185,129,0.08), transparent 55%)," +
                "linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%)",
            }}
          >
            <div className="space-y-10">
              <div className="flex items-center justify-between">
                <div className="text-[34px] font-extrabold tracking-tight text-slate-900">
                  Shared Reality
                </div>
                <div className="text-[22px] font-semibold text-slate-600">
                  {CATEGORY_LABEL[current.category] ?? current.category}
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center">
                <div
                  className="w-full rounded-[44px] bg-white ring-1 ring-slate-200 px-[72px] py-[76px]"
                  style={{
                    boxShadow: "0 20px 50px rgba(2,6,23,0.08), 0 2px 0 rgba(2,6,23,0.04)",
                  }}
                >
                  <div className="text-center text-[72px] font-extrabold leading-[1.05] tracking-tight text-slate-900">
                    {current.prompt}
                  </div>

                  {current.notes && (
                    <div className="mt-10 mx-auto max-w-[860px] text-center text-[28px] text-slate-600 leading-snug">
                      {current.notes}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-10">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-slate-900 text-white px-4 py-2 text-[18px] font-extrabold tracking-wide">
                  TIP
                </div>
                <div className="text-[24px] text-slate-700">{TIP_TEXT}</div>
              </div>

              <div className="text-right">
                <div className="text-[20px] font-semibold text-slate-500">SharedReality Deck</div>
                <div className="text-[24px] font-extrabold text-slate-900">{deckUrl}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MAIN QUESTION CARD */}
      {current && (
        <Card>
          <div className="flex items-center justify-between">
            <span
              className="text-[11px] font-extrabold tracking-[0.14em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              {CATEGORY_LABEL[current.category] ?? current.category}
            </span>
            <span
              className="text-[11px] font-extrabold tracking-[0.14em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              Intensity {current.intensity}
            </span>
          </div>

          <div
            className="mt-5 text-[32px] leading-[1.1] font-extrabold tracking-tight"
            style={{ color: "var(--fg)" }}
          >
            {current.prompt}
          </div>

          <div className="mt-5 text-base" style={{ color: "var(--muted)" }}>
            {TIP_TEXT}
          </div>

          {current.notes && (
            <div
              className="mt-5 rounded-3xl p-5"
              style={{
                background: "color-mix(in srgb, var(--fg) 3%, transparent)",
                border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
                boxShadow: "none",
              }}
            >
              <div
                className="text-sm font-extrabold tracking-tight"
                style={{ color: "color-mix(in srgb, var(--fg) 55%, transparent)" }}
              >
                Why this question exists
              </div>
              <div className="mt-2 text-lg font-semibold" style={{ color: "var(--fg)" }}>
                {current.notes}
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Actions row */}
      <div className="grid grid-cols-4 items-center gap-2">
        <Button
          variant="ghost"
          onClick={handlePrev}
          disabled={deck.index === 0}
          className="justify-start px-2"
        >
          <span className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </span>
        </Button>

        <Button
          onClick={handleSave}
          className="mx-auto w-full justify-center inline-flex items-center gap-2"
          style={{
            boxShadow: isSaved ? "0 0 0 4px var(--accent-ring)" : undefined,
          }}
        >
          {isSaved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
          {isSaved ? "Saved" : "Save"}
        </Button>

        <Button
          variant="ghost"
          onClick={handleSwap}
          disabled={!canSwap}
          className="justify-center px-2"
        >
          <span className="inline-flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            {canSwap ? "Swap" : "Swapped"}
          </span>
        </Button>

        <Button
          variant="ghost"
          onClick={handleShareImage}
          disabled={!current || sharing}
          className={`inline-flex items-center justify-center gap-2 ${
            sharing ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          <Share2 className="h-4 w-4" />
          {sharing ? "Sharing…" : "Share"}
        </Button>
      </div>

      {!isLast && (
        <Button className="w-full" onClick={handleNext}>
          <span className="inline-flex items-center justify-center gap-2">
            Next
            <ArrowRight className="h-4 w-4" />
          </span>
        </Button>
      )}

      {isLast && (
        <Card>
          <div className="text-lg font-extrabold" style={{ color: "var(--fg)" }}>
            End of deck
          </div>
          <p className="mt-2 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Don’t marathon these. The point is shared reality, not speedrunning intimacy.
          </p>
          <div className="mt-4">
            <Button className="w-full" onClick={onExit}>
              Back home
            </Button>
          </div>
        </Card>
      )}

      {/* Share Preview Modal (fallback) */}
      {sharePreviewUrl && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={closeSharePreview} />

          <div
            className="relative w-full sm:max-w-md overflow-hidden rounded-3xl ring-1"
            style={{
              background: "var(--card)",
              borderColor: "color-mix(in srgb, var(--fg) 12%, transparent)",
              boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
            }}
          >
            <div
              className="flex items-center justify-between px-4 py-3 border-b"
              style={{ borderColor: "color-mix(in srgb, var(--fg) 10%, transparent)" }}
            >
              <div className="text-sm font-extrabold" style={{ color: "var(--fg)" }}>
                Share image
              </div>
              <button
                onClick={closeSharePreview}
                className="rounded-xl p-2"
                style={{
                  color: "var(--muted)",
                  border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
                  background: "transparent",
                }}
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-4 space-y-3">
              <div
                className="overflow-hidden rounded-2xl ring-1"
                style={{
                  borderColor: "color-mix(in srgb, var(--fg) 10%, transparent)",
                  background: "color-mix(in srgb, var(--fg) 3%, transparent)",
                }}
              >
                <img src={sharePreviewUrl} alt="Shared Reality card" className="w-full h-auto" />
              </div>

              <div className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                On iOS Safari: tap{" "}
                <span style={{ fontWeight: 800, color: "var(--fg)" }}>Open image</span>, then use
                the Share button in the image viewer to Messages, Save Image, AirDrop, etc.
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={sharePreviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-extrabold"
                  style={{ background: "var(--btn)", color: "var(--btn-fg)" }}
                >
                  <ExternalLink className="h-4 w-4" />
                  Open image
                </a>

                <button
                  onClick={copyDeckLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-extrabold"
                  style={{
                    background: "transparent",
                    color: "var(--fg)",
                    border: "1px solid color-mix(in srgb, var(--fg) 12%, transparent)",
                  }}
                >
                  <LinkIcon className="h-4 w-4" />
                  {copied ? "Copied" : "Copy link"}
                </button>
              </div>

              {shareFilename && (
                <div className="text-[11px]" style={{ color: "var(--muted)" }}>
                  Filename:{" "}
                  <span className="font-mono" style={{ color: "var(--fg)" }}>
                    {shareFilename}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}