import type { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
  return (
    <div className="rounded-3xl bg-white/95 ring-1 ring-slate-200 shadow-sm p-5">
      {children}
    </div>
  );
}