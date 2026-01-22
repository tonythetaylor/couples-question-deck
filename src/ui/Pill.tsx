import type { PropsWithChildren } from "react";

export function Pill({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
      {children}
    </span>
  );
}