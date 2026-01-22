import { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Pill } from "../ui/Pill";
import { applyTheme } from "../theme/theme";
import { Home } from "lucide-react";

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

/** Accent storage + application */
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

/** For color input values, always return a valid hex */
function colorInputValue(hexOrEmpty: string, fallback: string) {
  const n = normalizeHex(hexOrEmpty);
  if (n && n !== "") return n;
  return fallback;
}

function subscribeToMediaQuery(
  query: string,
  onChange: (matches: boolean) => void,
) {
  const mql = window.matchMedia?.(query);
  if (!mql) return () => {};

  const handler = (e: MediaQueryListEvent) => onChange(e.matches);

  // set initial
  onChange(mql.matches);

  // Modern browsers
  if (typeof mql.addEventListener === "function") {
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }

  // Legacy Safari fallback (deprecated, but only used when needed)
  const legacyHandler = (e: MediaQueryList) => onChange(e.matches);
  // TS deprecation annoyance: cast to "any" in the fallback only
  (mql as any).addListener(legacyHandler);
  return () => (mql as any).removeListener(legacyHandler);
}

export function SettingsPage({ onExit }: { onExit: () => void }) {
  const storedBg = getStoredBg();
  const storedAccent = getStoredAccent();

  const [mode, setMode] = useState<ThemeMode>(() => getStoredTheme());

  const [bgLight, setBgLight] = useState(() => storedBg.light);
  const [bgDark, setBgDark] = useState(() => storedBg.dark);
  const [bgLightInput, setBgLightInput] = useState(() => storedBg.light || "");
  const [bgDarkInput, setBgDarkInput] = useState(() => storedBg.dark || "");

  // Accent: explicit enable switch + value
  const [accentEnabled, setAccentEnabled] = useState<boolean>(() => !!storedAccent);
  const [accent, setAccent] = useState(() => storedAccent || "");
  const [accentInput, setAccentInput] = useState(() => storedAccent || "");

  // Track system theme live (so resolved updates when OS flips)
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

  useEffect(() => {
    // Persist only when enabled; disabled means “no accent stored”
    if (accentEnabled) setStoredAccent(accent);
    else setStoredAccent("");

    applyAccent(accentEnabled, accent);
  }, [accentEnabled, accent]);

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

    // Clearing disables accent
    if (n === "") {
      setAccentEnabled(false);
      setAccent("");
      return;
    }

    // Setting any valid hex enables accent
    setAccentEnabled(true);
    setAccent(n);
  }

  function applyAccentPreset(hex: string) {
    setAccentEnabled(true);
    setAccent(hex);
    setAccentInput(hex);
  }

  const panelRow =
    "glass glass-strong ring-1 rounded-2xl px-3 py-3 flex items-center justify-between gap-3";
  const label = "text-[11px] font-extrabold tracking-tight";

  return (
    <div className="mx-auto max-w-md px-4 py-6 space-y-4">
      <header className="flex items-center justify-between pt-safe">
        <Button variant="ghost" onClick={onExit} className="inline-flex items-center gap-2">
          <Home className="h-4 w-4" />
          Home
        </Button>
        <Button variant="ghost" onClick={resetAll}>
          Reset
        </Button>
      </header>

      <Card>
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-extrabold tracking-tight" style={{ color: "var(--fg)" }}>
            Settings
          </div>
          <Pill variant="strong">{resolved}</Pill>
        </div>

        <div className="mt-4 space-y-6">
          {/* Theme */}
          <section className="space-y-2">
            <div className="text-xs font-semibold" style={{ color: "var(--muted)" }}>
              Theme
            </div>

            <div
              className="grid grid-cols-3 gap-1 rounded-2xl p-1"
              style={{
                background: "color-mix(in srgb, var(--fg) 4%, transparent)",
                border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
              }}
            >
              {(["system", "light", "dark"] as const).map((m) => {
                const selected = mode === m;
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMode(m)}
                    aria-pressed={selected}
                    className="h-10 rounded-xl text-sm font-extrabold transition"
                    style={{
                      background: selected ? "var(--btn)" : "transparent",
                      color: selected ? "var(--btn-fg)" : "var(--fg)",
                      boxShadow: selected
                        ? `inset 0 1px 0 var(--glass-highlight),
                           inset 0 -1px 0 var(--glass-inner),
                           0 8px 18px rgba(2,6,23,0.10)`
                        : "none",
                    }}
                  >
                    {m[0].toUpperCase() + m.slice(1)}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Accent */}
          <section className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold" style={{ color: "var(--muted)" }}>
                Accent
              </div>
              <button
                type="button"
                className="text-[11px] font-extrabold tracking-[0.14em] uppercase"
                style={{ color: "var(--muted)" }}
                onClick={() => setAccentEnabled((v) => !v)}
                aria-pressed={accentEnabled}
              >
                {accentEnabled ? "On" : "Off"}
              </button>
            </div>

            {/* Current accent row */}
            <div className={panelRow} style={{ borderColor: "var(--glass-border)", backgroundColor: "var(--glass-bg-strong)" }}>
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex flex-col min-w-0">
                  <span className={label} style={{ color: "var(--muted)" }}>
                    Current
                  </span>
                  <span className="text-sm font-extrabold truncate" style={{ color: "var(--fg)" }}>
                    {accentEnabled && accent ? accent : "Default (off)"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="h-6 w-6 rounded-xl ring-1"
                  style={{
                    background: accentEnabled ? colorInputValue(accent, "#3b82f6") : "transparent",
                    borderColor: "var(--glass-border)" as any,
                  }}
                  aria-hidden
                  title="Accent swatch"
                />

                <input
                  type="color"
                  value={colorInputValue(accent, "#3b82f6")}
                  onChange={(e) => {
                    setAccentEnabled(true);
                    setAccent(e.target.value);
                    setAccentInput(e.target.value);
                  }}
                  className="h-10 w-12 rounded-xl ring-1"
                  style={{ borderColor: "var(--glass-border)", background: "transparent" }}
                  aria-label="Pick accent color"
                />
              </div>
            </div>

            {/* Hex input row */}
            <div className={panelRow} style={{ borderColor: "var(--glass-border)", backgroundColor: "var(--glass-bg)" }}>
              <div className="flex flex-col">
                <span className={label} style={{ color: "var(--muted)" }}>
                  Hex
                </span>
                <span className="text-[11px]" style={{ color: "var(--muted)" }}>
                  Press Enter to apply, clear to disable
                </span>
              </div>

              <input
                value={accentInput}
                onChange={(e) => setAccentInput(e.target.value)}
                onBlur={() => commitAccent(accentInput)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") commitAccent(accentInput);
                }}
                placeholder="#3b82f6"
                className="w-36 bg-transparent outline-none text-sm font-extrabold text-right"
                style={{ color: "var(--fg)" }}
                aria-label="Accent hex"
              />
            </div>

            {/* Presets */}
            <div className="glass glass-strong ring-1 rounded-2xl p-3" style={{ borderColor: "var(--glass-border)" }}>
              <div className="flex items-center justify-between gap-3">
                <div className="text-[11px] font-extrabold tracking-tight" style={{ color: "var(--muted)" }}>
                  Presets
                </div>
                <Pill>{ACCENT_PRESETS.length}</Pill>
              </div>

              <div className="mt-3 grid grid-cols-8 gap-2">
                {ACCENT_PRESETS.map((p) => {
                  const active =
                    accentEnabled && accent && accent.toLowerCase() === p.value.toLowerCase();

                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => applyAccentPreset(p.value)}
                      className="h-9 w-9 rounded-xl ring-1 transition-transform active:scale-[0.98]"
                      style={{
                        background: p.value,
                        borderColor: active
                          ? "color-mix(in srgb, var(--fg) 18%, transparent)"
                          : "var(--glass-border)",
                        boxShadow: active
                          ? `0 0 0 2px color-mix(in srgb, var(--fg) 18%, transparent), 0 10px 22px rgba(0,0,0,0.12)`
                          : `inset 0 1px 0 rgba(255,255,255,0.18)`,
                      }}
                      aria-label={`Set accent to ${p.label}`}
                      title={p.label}
                    />
                  );
                })}
              </div>

              <div className="mt-3 text-[11px]" style={{ color: "var(--muted)" }}>
                Accent only affects UI when enabled (picked or typed).
              </div>

              {accentEnabled && (
                <div className="mt-3">
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => {
                      setAccentEnabled(false);
                      setAccent("");
                      setAccentInput("");
                    }}
                  >
                    Disable accent
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* Vibes */}
          <section className="space-y-2">
            <div className="text-xs font-semibold" style={{ color: "var(--muted)" }}>
              Vibes
            </div>

            <div className="grid grid-cols-2 gap-2">
              {VIBE_PRESETS.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => applyVibe(v)}
                  className="glass glass-focus rounded-2xl px-3 py-3 text-sm font-extrabold ring-1 text-left"
                  style={{ color: "var(--fg)", borderColor: "var(--glass-border)" }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="truncate">{v.label}</span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-4 w-4 rounded-full ring-1" style={{ background: v.light, borderColor: "var(--glass-border)" as any }} />
                      <span className="h-4 w-4 rounded-full ring-1" style={{ background: v.dark, borderColor: "var(--glass-border)" as any }} />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Background (unchanged from your version) */}
          <section className="space-y-3">
            <div className="text-xs font-semibold" style={{ color: "var(--muted)" }}>
              Background
            </div>

            {/* Light */}
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[11px] font-semibold" style={{ color: "var(--muted)" }}>
                  Light background
                </div>

                <input
                  type="color"
                  value={colorInputValue(bgLight, "#f6f7f9")}
                  onChange={(e) => {
                    setBgLight(e.target.value);
                    setBgLightInput(e.target.value);
                  }}
                  className="h-8 w-10 rounded-xl ring-1"
                  style={{ borderColor: "var(--glass-border)", background: "transparent" }}
                  aria-label="Pick light background color"
                />
              </div>

              <div className="grid grid-cols-[1fr_auto] gap-2">
                <select
                  value={bgLight}
                  onChange={(e) => {
                    setBgLight(e.target.value);
                    setBgLightInput(e.target.value);
                  }}
                  className="glass glass-focus rounded-2xl px-4 py-3 text-sm font-semibold ring-1 outline-none w-full"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    color: "var(--fg)",
                    borderColor: "var(--glass-border)",
                  }}
                >
                  {BG_PRESETS_LIGHT.map((p) => (
                    <option key={p.id} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>

                <div className="glass rounded-2xl px-3 py-3 ring-1 flex items-center gap-2" style={{ borderColor: "var(--glass-border)" }}>
                  <span className="h-5 w-5 rounded-xl ring-1" style={{ background: colorInputValue(bgLight, "#f6f7f9"), borderColor: "var(--glass-border)" as any }} />
                  <input
                    value={bgLightInput}
                    onChange={(e) => setBgLightInput(e.target.value)}
                    onBlur={() => commitLight(bgLightInput)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") commitLight(bgLightInput);
                    }}
                    placeholder="#f6f7f9"
                    className="w-24 bg-transparent outline-none text-xs font-semibold"
                    style={{ color: "var(--fg)" }}
                    aria-label="Light background hex"
                  />
                </div>
              </div>
            </div>

            {/* Dark */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[11px] font-semibold" style={{ color: "var(--muted)" }}>
                  Dark background
                </div>

                <input
                  type="color"
                  value={colorInputValue(bgDark, "#000000")}
                  onChange={(e) => {
                    setBgDark(e.target.value);
                    setBgDarkInput(e.target.value);
                  }}
                  className="h-8 w-10 rounded-xl ring-1"
                  style={{ borderColor: "var(--glass-border)", background: "transparent" }}
                  aria-label="Pick dark background color"
                />
              </div>

              <div className="grid grid-cols-[1fr_auto] gap-2">
                <select
                  value={bgDark}
                  onChange={(e) => {
                    setBgDark(e.target.value);
                    setBgDarkInput(e.target.value);
                  }}
                  className="glass glass-focus rounded-2xl px-4 py-3 text-sm font-semibold ring-1 outline-none w-full"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    color: "var(--fg)",
                    borderColor: "var(--glass-border)",
                  }}
                >
                  {BG_PRESETS_DARK.map((p) => (
                    <option key={p.id} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>

                <div className="glass rounded-2xl px-3 py-3 ring-1 flex items-center gap-2" style={{ borderColor: "var(--glass-border)" }}>
                  <span className="h-5 w-5 rounded-xl ring-1" style={{ background: colorInputValue(bgDark, "#000000"), borderColor: "var(--glass-border)" as any }} />
                  <input
                    value={bgDarkInput}
                    onChange={(e) => setBgDarkInput(e.target.value)}
                    onBlur={() => commitDark(bgDarkInput)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") commitDark(bgDarkInput);
                    }}
                    placeholder="#000000"
                    className="w-24 bg-transparent outline-none text-xs font-semibold"
                    style={{ color: "var(--fg)" }}
                    aria-label="Dark background hex"
                  />
                </div>
              </div>

              <div className="text-[11px]" style={{ color: "var(--muted)" }}>
                Theme + background + accent are stored locally on this device.
              </div>
            </div>
          </section>
        </div>
      </Card>
    </div>
  );
}