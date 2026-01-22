import { useTheme } from "../theme/ThemeProvider";

const modes = [
  { id: "system", label: "System" },
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
] as const;

export function ThemeToggle() {
  const { mode, setMode } = useTheme();

  return (
    <div className="inline-flex items-center gap-1 rounded-2xl bg-[var(--card)] p-1 ring-1 ring-[var(--border)] shadow-sm">
      {modes.map((m) => {
        const active = mode === m.id;
        return (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={[
              "px-2.5 py-1 text-xs font-semibold rounded-xl transition",
              active
                ? "bg-[var(--btn)] text-[var(--btn-fg)]"
                : "text-[var(--muted)] hover:bg-[color:rgba(255,255,255,0.06)]",
            ].join(" ")}
            aria-pressed={active}
          >
            {m.label}
          </button>
        );
      })}
    </div>
  );
}