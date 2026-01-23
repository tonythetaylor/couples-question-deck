// src/pages/DeckPage/components/ActionRow.tsx
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  RefreshCw,
  Share2,
} from "lucide-react";
import { Button } from "../../../ui/Button";

export function ActionRow({
  canPrev,
  canSwap,
  isSaved,
  sharing,
  onPrev,
  onSave,
  onSwap,
  onShare,
}: {
  canPrev: boolean;
  canSwap: boolean;
  isSaved: boolean;
  sharing: boolean;
  onPrev: () => void;
  onSave: () => void;
  onSwap: () => void;
  onShare: () => void;
}) {
  return (
    <div className="grid grid-cols-4 items-center gap-2">
      <Button
        variant="ghost"
        onClick={onPrev}
        disabled={!canPrev}
        className="justify-start px-2"
      >
        <span className="inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </span>
      </Button>

      <Button
        onClick={onSave}
        className="mx-auto w-full justify-center inline-flex items-center gap-2"
        style={{ boxShadow: isSaved ? "0 0 0 4px var(--accent-ring)" : undefined }}
      >
        {isSaved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
        {isSaved ? "Saved" : "Save"}
      </Button>

      <Button
        variant="ghost"
        onClick={onSwap}
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
        onClick={onShare}
        disabled={sharing}
        className={`inline-flex items-center justify-center gap-2 ${
          sharing ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        <Share2 className="h-4 w-4" />
        {sharing ? "Sharing…" : "Share"}
      </Button>
    </div>
  );
}