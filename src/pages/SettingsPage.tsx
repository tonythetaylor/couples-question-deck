// SettingsPage.tsx (UPDATED)
// Fixes accent not applying by:
// - making accentEnabled a real piece of state again
// - storing accent even when disabled (optional), but applying only when enabled
// - removing the broken setAccentEnabled calls (they referenced a non-existent setter)
// - keeping accent + accentEnabled in sync with UI controls + presets + hex input

import { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Pill } from "../ui/Pill";
import { applyTheme } from "../theme/theme";
import { Home } from "lucide-react";
import { applyAccentDerivedVars } from "../app/helpers/accent";

type ThemeMode = "system" | "light" | "dark";

const THEME_KEY = "sr-theme";
const BG_LIGHT_KEY = "sr-bg-light";
const BG_DARK_KEY = "sr-bg-dark";
const ACCENT_KEY = "sr-accent";

/** Accent presets (quick vibe picks) */
const ACCENT_PRESETS: Array<{ id: string; label: string; value: string }> = [
  { id: "electric-blue", label: "Electric Blue", value: "#2563eb" },
  { id: "cyan", label: "Cyan", value: "#06b6d4" },
  { id: "mint", label: "Mint", value: "#10b981" },
  { id: "amber", label: "Amber", value: "#f59e0b" },
  { id: "rose", label: "Rose", value: "#f43f5e" },
  { id: "purple", label: "Purple", value: "#8b5cf6" },
  { id: "hot-pink", label: "Hot Pink", value: "#ec4899" },
  { id: "blood-red", label: "Blood Red", value: "#ef4444" },
];

const BG_PRESETS_LIGHT = [
  { id: "default", label: "Default", value: "" },
  { id: "paper", label: "Paper", value: "#f6f7f9" },
  { id: "mist", label: "Mist", value: "#eef2f6" },
  { id: "slate", label: "Slate", value: "#e7ebf0" },
];

const BG_PRESETS_DARK = [
  { id: "default", label: "Default", value: "" },
  { id: "trueblack", label: "True Black", value: "#000000" },
  { id: "ink", label: "Ink", value: "#05070a" },
  { id: "charcoal", label: "Charcoal", value: "#0b0f14" },
];

const VIBE_PRESETS: Array<{ id: string; label: string; light: string; dark: string }> = [
  { id: "bp-core", label: "BlackPlanet Core", light: "#f6f7f9", dark: "#000000" },
  { id: "midnight", label: "Midnight", light: "#f4f6fb", dark: "#070A10" },
  { id: "purple-haze", label: "Purple Haze", light: "#f7f4ff", dark: "#0B0014" },
  { id: "deep-ocean", label: "Deep Ocean", light: "#f2f7ff", dark: "#001018" },
  { id: "bloodline", label: "Bloodline", light: "#fff4f4", dark: "#120000" },
];

function getStoredTheme(): ThemeMode {
  const v = localStorage.getItem(THEME_KEY);
  if (v === "light" || v === "dark" || v === "system") return v;
  return "system";
}
function setStoredTheme(mode: ThemeMode) {
  localStorage.setItem(THEME_KEY, mode);
}

function getStoredBg() {
  return {
    light: localStorage.getItem(BG_LIGHT_KEY) ?? "",
    dark: localStorage.getItem(BG_DARK_KEY) ?? "",
  };
}
function setStoredBg(light: string, dark: string) {
  localStorage.setItem(BG_LIGHT_KEY, light);
  localStorage.setItem(BG_DARK_KEY, dark);
}

function applyBackgroundOverrides(light: string, dark: string) {
  const root = document.documentElement;

  if (light) root.style.setProperty("--bg-override-light", light);
  else root.style.removeProperty("--bg-override-light");

  if (dark) root.style.setProperty("--bg-override-dark", dark);
  else root.style.removeProperty("--bg-override-dark");
}

function isValidHex(v: string) {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(v);
}
function normalizeHex(raw: string): "" | string | null {
  const v = raw.trim();
  if (!v) return "";
  const withHash = v.startsWith("#") ? v : `#${v}`;
  return isValidHex(withHash) ? withHash : null;
}

function getStoredAccent() {
  const v = localStorage.getItem(ACCENT_KEY) ?? "";
  const n = normalizeHex(v);
  return n === null ? "" : n;
}
function setStoredAccent(accent: string) {
  if (accent) localStorage.setItem(ACCENT_KEY, accent);
  else localStorage.removeItem(ACCENT_KEY);
}

/**
 * Accent is OFF by default.
 * When enabled: set --accent + data-accent="on"
 * When disabled: remove both.
 */
function applyAccent(accentEnabled: boolean, accent: string) {
  const root = document.documentElement;

  if (accentEnabled && accent) {
    root.style.setProperty("--accent", accent);
    root.setAttribute("data-accent", "on");
  } else {
    root.style.removeProperty("--accent");
    root.removeAttribute("data-accent");
  }
}

function colorInputValue(hexOrEmpty: string, fallback: string) {
  const n = normalizeHex(hexOrEmpty);
  if (n && n !== "") return n;
  return fallback;
}

function subscribeToMediaQuery(query: string, onChange: (matches: boolean) => void) {
  const mql = window.matchMedia?.(query);
  if (!mql) return () => {};

  const handler = (e: MediaQueryListEvent) => onChange(e.matches);
  onChange(mql.matches);

  if (typeof mql.addEventListener === "function") {
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }

  const legacyHandler = (e: MediaQueryList) => onChange(e.matches);
  (mql as any).addListener(legacyHandler);
  return () => (mql as any).removeListener(legacyHandler);
}

/* ---------- small UI helpers to match HomePage feel ---------- */

function Seg({
  items,
  value,
  onChange,
  cols,
  small = false,
}: {
  items: Array<{ id: string; label: string }>;
  value: string;
  onChange: (id: string) => void;
  cols: number;
  small?: boolean;
}) {
  return (
    <div
      className={`grid gap-1 rounded-2xl p-1`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        background: "var(--seg-surface)",
        border: "1px solid var(--seg-border)",
      }}
    >
      {items.map((it) => {
        const selected = value === it.id;
        return (
          <button
            key={it.id}
            type="button"
            onClick={() => onChange(it.id)}
            aria-pressed={selected}
            className={`${small ? "h-9 text-[12px]" : "h-10 text-sm"} rounded-xl font-extrabold transition`}
            style={{
              background: selected ? "var(--seg-selected-bg)" : "transparent",
              color: selected ? "var(--seg-selected-fg)" : "var(--fg)",
              boxShadow: selected
                ? `inset 0 1px 0 var(--glass-highlight), inset 0 -1px 0 var(--glass-inner)`
                : "none",
              opacity: selected ? 1 : 0.9,
            }}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}

function PanelRow({
  title,
  subtitle,
  right,
  children,
}: {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl px-4 py-3"
      style={{
        background: "color-mix(in srgb, var(--fg) 3%, transparent)",
        border: "1px solid color-mix(in srgb, var(--fg) 8%, transparent)",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-0.5 min-w-0">
          <div className="text-sm font-extrabold" style={{ color: "var(--fg)" }}>
            {title}
          </div>
          {subtitle ? (
            <div className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>
              {subtitle}
            </div>
          ) : null}
        </div>
        {right ? <div className="shrink-0">{right}</div> : null}
      </div>

      {children ? <div className="mt-3">{children}</div> : null}
    </div>
  );
}

/* ---------- Page ---------- */

export function SettingsPage({ onExit }: { onExit: () => void }) {
  const storedBg = getStoredBg();
  const storedAccent = getStoredAccent(); // "" or "#xxxxxx"

  const [mode, setMode] = useState<ThemeMode>(() => getStoredTheme());

  const [bgLight, setBgLight] = useState(() => storedBg.light);
  const [bgDark, setBgDark] = useState(() => storedBg.dark);
  const [bgLightInput, setBgLightInput] = useState(() => storedBg.light || "");
  const [bgDarkInput, setBgDarkInput] = useState(() => storedBg.dark || "");

  // ✅ Accent state is explicit again
  const [accentEnabled, setAccentEnabled] = useState<boolean>(() => !!storedAccent);
  const [accent, setAccent] = useState<string>(() => storedAccent || "");
  const [accentInput, setAccentInput] = useState<string>(() => storedAccent || "");

  const [systemDark, setSystemDark] = useState(false);

  useEffect(() => {
    return subscribeToMediaQuery("(prefers-color-scheme: dark)", setSystemDark);
  }, []);

  const resolved = useMemo(() => {
    return mode === "dark" || (mode === "system" && systemDark) ? "dark" : "light";
  }, [mode, systemDark]);

  useEffect(() => {
    setStoredTheme(mode);
    applyTheme(mode);
  }, [mode]);

  useEffect(() => {
    setStoredBg(bgLight, bgDark);
    applyBackgroundOverrides(bgLight, bgDark);
  }, [bgLight, bgDark]);

  // ✅ Persist + apply accent correctly.
  // - If accentEnabled is false, we remove data-accent and CSS var.
  // - We still keep the chosen hex in state so toggling back "On" is instant.
useEffect(() => {
  setStoredAccent(accent);
  applyAccent(!!accent, accent);
  applyAccentDerivedVars(accent); // makes UI change immediately
}, [accent]);

  function resetAll() {
    setMode("system");

    setBgLight("");
    setBgDark("");
    setBgLightInput("");
    setBgDarkInput("");

    setAccentEnabled(false);
    setAccent("");
    setAccentInput("");

    localStorage.removeItem(THEME_KEY);
    localStorage.removeItem(BG_LIGHT_KEY);
    localStorage.removeItem(BG_DARK_KEY);
    localStorage.removeItem(ACCENT_KEY);

    applyTheme("system");
    applyBackgroundOverrides("", "");
    applyAccent(false, "");
  }

  function applyVibe(v: (typeof VIBE_PRESETS)[number]) {
    setBgLight(v.light);
    setBgDark(v.dark);
    setBgLightInput(v.light);
    setBgDarkInput(v.dark);
  }

  function commitLight(raw: string) {
    const n = normalizeHex(raw);
    if (n === null) return;
    setBgLight(n);
  }
  function commitDark(raw: string) {
    const n = normalizeHex(raw);
    if (n === null) return;
    setBgDark(n);
  }

  function commitAccent(raw: string) {
    const n = normalizeHex(raw);
    if (n === null) return;

    if (n === "") {
      // clear disables
      setAccentEnabled(false);
      setAccent("");
      setAccentInput("");
      return;
    }

    setAccentEnabled(true);
    setAccent(n);
    setAccentInput(n);
  }

  function applyAccentPreset(hex: string) {
    setAccentEnabled(true);
    setAccent(hex);
    setAccentInput(hex);
  }

  return (
    <div className="mx-auto max-w-md px-4 py-6 space-y-4">
      <header className="pt-safe space-y-2">
        <div className="flex items-center justify-between gap-2">
          <Button variant="ghost" onClick={onExit} className="inline-flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home
          </Button>

          <Button variant="ghost" onClick={resetAll}>
            Reset
          </Button>
        </div>

        <div className="text-[11px] font-extrabold tracking-[0.14em] uppercase" style={{ color: "var(--muted)" }}>
          Library
        </div>

        <h1 className="text-[26px] leading-[1.12] font-extrabold tracking-tight" style={{ color: "var(--fg)" }}>
          Theme settings
        </h1>

        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          Tune the vibe. Everything is saved locally on this device.
        </p>
      </header>

      {/* Theme */}
      <Card>
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="text-[11px] font-extrabold tracking-[0.14em] uppercase" style={{ color: "var(--muted)" }}>
              Theme
            </div>
            <div className="text-sm font-extrabold tracking-tight" style={{ color: "var(--fg)" }}>
              Light, dark, or system
            </div>
            <div className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>
              Current: <span style={{ color: "var(--fg)", fontWeight: 800 }}>{resolved}</span>
            </div>
          </div>

          <Pill variant="strong">{resolved}</Pill>
        </div>

        <div className="mt-4">
          <Seg
            cols={3}
            items={[
              { id: "system", label: "System" },
              { id: "light", label: "Light" },
              { id: "dark", label: "Dark" },
            ]}
            value={mode}
            onChange={(id) => setMode(id as ThemeMode)}
          />
        </div>
      </Card>

      {/* Accent */}
      <Card>
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="text-[11px] font-extrabold tracking-[0.14em] uppercase" style={{ color: "var(--muted)" }}>
              Accent
            </div>
            <div className="text-sm font-extrabold tracking-tight" style={{ color: "var(--fg)" }}>
              Optional highlight color
            </div>
            <div className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>
              Turn it on when you want extra contrast.
            </div>
          </div>

          <button
            type="button"
            onClick={() => setAccentEnabled((v) => !v)}
            aria-pressed={accentEnabled}
            className="h-9 rounded-xl px-3 text-[12px] font-extrabold transition"
            style={{
              background: accentEnabled ? "var(--seg-selected-bg)" : "var(--seg-surface)",
              color: accentEnabled ? "var(--seg-selected-fg)" : "var(--fg)",
              border: `1px solid var(--seg-border)`,
              boxShadow: accentEnabled
                ? `inset 0 1px 0 var(--glass-highlight), inset 0 -1px 0 var(--glass-inner)`
                : "none",
            }}
          >
            {accentEnabled ? "On" : "Off"}
          </button>
        </div>

        <div className="mt-4 space-y-3">
          <PanelRow
            title="Current accent"
            subtitle={accentEnabled && accent ? accent : "Default (accent off)"}
            right={
              <div className="flex items-center gap-2">
                <span
                  className="h-6 w-6 rounded-xl"
                  style={{
                    background: accentEnabled ? colorInputValue(accent, "#2563eb") : "transparent",
                    border: "1px solid color-mix(in srgb, var(--fg) 12%, transparent)",
                  }}
                  aria-hidden
                  title="Accent swatch"
                />
                <input
                  type="color"
                  value={colorInputValue(accent || "#2563eb", "#2563eb")}
                  onChange={(e) => {
                    setAccentEnabled(true);
                    setAccent(e.target.value);
                    setAccentInput(e.target.value);
                  }}
                  className="h-9 w-12 rounded-xl"
                  style={{
                    border: "1px solid color-mix(in srgb, var(--fg) 12%, transparent)",
                    background: "transparent",
                  }}
                  aria-label="Pick accent color"
                />
              </div>
            }
          />

          <PanelRow title="Hex" subtitle="Press Enter to apply. Clear to disable.">
            <input
              value={accentInput}
              onChange={(e) => setAccentInput(e.target.value)}
              onBlur={() => commitAccent(accentInput)}
              onKeyDown={(e) => {
                if (e.key === "Enter") commitAccent(accentInput);
              }}
              placeholder="#2563eb"
              className="w-full bg-transparent outline-none text-sm font-extrabold"
              style={{
                color: "var(--fg)",
                borderRadius: 14,
                padding: "10px 12px",
                border: "1px solid color-mix(in srgb, var(--fg) 12%, transparent)",
              }}
              aria-label="Accent hex"
            />
          </PanelRow>

          <div>
            <div className="text-[11px] font-extrabold tracking-[0.14em] uppercase" style={{ color: "var(--muted)" }}>
              Presets
            </div>

            <div className="mt-3 grid grid-cols-8 gap-2">
              {ACCENT_PRESETS.map((p) => {
                const active = accentEnabled && accent && accent.toLowerCase() === p.value.toLowerCase();

                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => applyAccentPreset(p.value)}
                    className="h-9 w-9 rounded-xl transition-transform active:scale-[0.98]"
                    style={{
                      background: p.value,
                      border: "1px solid color-mix(in srgb, var(--fg) 12%, transparent)",
                      boxShadow: active
                        ? `0 0 0 2px color-mix(in srgb, var(--fg) 16%, transparent), 0 10px 22px rgba(0,0,0,0.12)`
                        : `inset 0 1px 0 rgba(255,255,255,0.18)`,
                    }}
                    aria-label={`Set accent to ${p.label}`}
                    title={p.label}
                  />
                );
              })}
            </div>

            {accentEnabled ? (
              <div className="mt-3">
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => {
                    setAccentEnabled(false);
                  }}
                >
                  Disable accent
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </Card>

      {/* Vibes */}
      <Card>
        <div className="space-y-1">
          <div className="text-[11px] font-extrabold tracking-[0.14em] uppercase" style={{ color: "var(--muted)" }}>
            Vibes
          </div>
          <div className="text-sm font-extrabold tracking-tight" style={{ color: "var(--fg)" }}>
            One-tap background sets
          </div>
          <div className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>
            Applies both light and dark backgrounds.
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {VIBE_PRESETS.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => applyVibe(v)}
              className="rounded-2xl px-3 py-3 text-left font-extrabold transition"
              style={{
                background: "color-mix(in srgb, var(--fg) 3%, transparent)",
                border: "1px solid color-mix(in srgb, var(--fg) 8%, transparent)",
                color: "var(--fg)",
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="truncate text-sm">{v.label}</span>
                <span className="flex items-center gap-1.5">
                  <span
                    className="h-4 w-4 rounded-full"
                    style={{
                      background: v.light,
                      border: "1px solid color-mix(in srgb, var(--fg) 12%, transparent)",
                    }}
                  />
                  <span
                    className="h-4 w-4 rounded-full"
                    style={{
                      background: v.dark,
                      border: "1px solid color-mix(in srgb, var(--fg) 12%, transparent)",
                    }}
                  />
                </span>
              </div>
            </button>
          ))}
        </div>
      </Card>

      {/* Background */}
      <Card>
        <div className="space-y-1">
          <div className="text-[11px] font-extrabold tracking-[0.14em] uppercase" style={{ color: "var(--muted)" }}>
            Background
          </div>
          <div className="text-sm font-extrabold tracking-tight" style={{ color: "var(--fg)" }}>
            Light + dark overrides
          </div>
          <div className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>
            Optional. Leave “Default” to use the built-in theme background.
          </div>
        </div>

        <div className="mt-4 space-y-4">
          <PanelRow title="Light background" subtitle="Pick a preset or type a hex value.">
            <div className="grid grid-cols-[1fr_auto] gap-2">
              <select
                value={bgLight}
                onChange={(e) => {
                  setBgLight(e.target.value);
                  setBgLightInput(e.target.value);
                }}
                className="relative overflow-hidden rounded-2xl outline-none px-4 h-11 text-sm font-semibold w-full"
                style={{
                  background: "color-mix(in srgb, var(--fg) 4%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
                  color: "var(--fg)",
                }}
              >
                {BG_PRESETS_LIGHT.map((p) => (
                  <option key={p.id} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>

              <input
                type="color"
                value={colorInputValue(bgLight, "#f6f7f9")}
                onChange={(e) => {
                  setBgLight(e.target.value);
                  setBgLightInput(e.target.value);
                }}
                className="h-11 w-12 rounded-2xl"
                style={{
                  border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
                  background: "transparent",
                }}
                aria-label="Pick light background color"
              />
            </div>

            <div className="mt-2">
              <input
                value={bgLightInput}
                onChange={(e) => setBgLightInput(e.target.value)}
                onBlur={() => commitLight(bgLightInput)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") commitLight(bgLightInput);
                }}
                placeholder="#f6f7f9"
                className="w-full bg-transparent outline-none text-sm font-extrabold"
                style={{
                  color: "var(--fg)",
                  borderRadius: 14,
                  padding: "10px 12px",
                  border: "1px solid color-mix(in srgb, var(--fg) 12%, transparent)",
                }}
                aria-label="Light background hex"
              />
              <div className="mt-2 text-[11px]" style={{ color: "var(--muted)" }}>
                Press Enter to apply.
              </div>
            </div>
          </PanelRow>

          <PanelRow title="Dark background" subtitle="Pick a preset or type a hex value.">
            <div className="grid grid-cols-[1fr_auto] gap-2">
              <select
                value={bgDark}
                onChange={(e) => {
                  setBgDark(e.target.value);
                  setBgDarkInput(e.target.value);
                }}
                className="relative overflow-hidden rounded-2xl outline-none px-4 h-11 text-sm font-semibold w-full"
                style={{
                  background: "color-mix(in srgb, var(--fg) 4%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
                  color: "var(--fg)",
                }}
              >
                {BG_PRESETS_DARK.map((p) => (
                  <option key={p.id} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>

              <input
                type="color"
                value={colorInputValue(bgDark, "#000000")}
                onChange={(e) => {
                  setBgDark(e.target.value);
                  setBgDarkInput(e.target.value);
                }}
                className="h-11 w-12 rounded-2xl"
                style={{
                  border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
                  background: "transparent",
                }}
                aria-label="Pick dark background color"
              />
            </div>

            <div className="mt-2">
              <input
                value={bgDarkInput}
                onChange={(e) => setBgDarkInput(e.target.value)}
                onBlur={() => commitDark(bgDarkInput)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") commitDark(bgDarkInput);
                }}
                placeholder="#000000"
                className="w-full bg-transparent outline-none text-sm font-extrabold"
                style={{
                  color: "var(--fg)",
                  borderRadius: 14,
                  padding: "10px 12px",
                  border: "1px solid color-mix(in srgb, var(--fg) 12%, transparent)",
                }}
                aria-label="Dark background hex"
              />
              <div className="mt-2 text-[11px]" style={{ color: "var(--muted)" }}>
                Press Enter to apply.
              </div>
            </div>
          </PanelRow>

          <div className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>
            Theme, background, and accent are stored locally on this device.
          </div>
        </div>
      </Card>
    </div>
  );
}