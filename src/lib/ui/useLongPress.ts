// src/lib/ui/useLongPress.ts
import { useCallback, useRef } from "react";

type LongPressOpts = {
  ms?: number;
  moveThresholdPx?: number;
};

export function useLongPress(
  onLongPress: () => void,
  opts: LongPressOpts = {},
) {
  const { ms = 420, moveThresholdPx = 10 } = opts;

  const timerRef = useRef<number | null>(null);
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const firedRef = useRef(false);

  const clear = useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = null;
    startRef.current = null;
    firedRef.current = false;
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      // Only primary touch/pen/mouse
      if (e.button !== 0 && e.pointerType === "mouse") return;

      firedRef.current = false;
      startRef.current = { x: e.clientX, y: e.clientY };

      timerRef.current = window.setTimeout(() => {
        firedRef.current = true;

        // prevents context menu on mobile Safari sometimes
        try {
          (e.target as HTMLElement)?.blur?.();
        } catch {}

        onLongPress();
      }, ms);
    },
    [ms, onLongPress],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!startRef.current || !timerRef.current) return;

      const dx = Math.abs(e.clientX - startRef.current.x);
      const dy = Math.abs(e.clientY - startRef.current.y);

      if (dx > moveThresholdPx || dy > moveThresholdPx) {
        clear();
      }
    },
    [clear, moveThresholdPx],
  );

  const onPointerUp = useCallback(() => {
    // If it fired, swallow click behavior if you want (optional)
    clear();
  }, [clear]);

  const onPointerCancel = useCallback(() => {
    clear();
  }, [clear]);

  return {
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
    // Optional: disable iOS callout
    onContextMenu: (e: React.SyntheticEvent) => {
      if (firedRef.current) e.preventDefault();
    },
  };
}