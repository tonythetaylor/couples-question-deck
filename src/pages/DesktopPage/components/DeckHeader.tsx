// src/pages/DeckPage/components/DeckHeader.tsx
import { Home } from "lucide-react";
import { Button } from "../../../ui/Button";

export function DeckHeader({
  index,
  total,
  onExit,
}: {
  index: number;
  total: number;
  onExit: () => void;
}) {
  const isLast = index === total - 1;
  const progress = Math.round(((index + 1) / Math.max(total, 1)) * 100);

  return (
    <header className="pt-safe space-y-3">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onExit} className="inline-flex items-center gap-2">
          <Home className="h-4 w-4" />
          Home
        </Button>

        <div className="text-sm font-semibold tabular-nums" style={{ color: "var(--muted)" }}>
          {index + 1} / {total}
        </div>
      </div>

      <div
        className="h-2 w-full rounded-full overflow-hidden"
        style={{
          background: "color-mix(in srgb, var(--fg) 10%, transparent)",
          border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
        }}
      >
         {/* Progress bar */}
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              isLast ? "bg-emerald-600 dark:bg-emerald-400" : "bg-slate-900 dark:bg-slate-50"
            }`}
            style={{ width: `${progress}%` }}
          />
      </div>
    </header>
  );
}