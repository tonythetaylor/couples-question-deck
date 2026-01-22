// src/pages/DeckPage/components/EndOfDeckCard.tsx
import { Card } from "../../../ui/Card";
import { Button } from "../../../ui/Button";

export function EndOfDeckCard({ onExit }: { onExit: () => void }) {
  return (
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
  );
}