import type { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
  return (
    <div
      className="relative rounded-3xl p-5 glass glass-strong"
      style={{
        borderColor: "var(--glass-border)",
        boxShadow: `
          inset 0 1px 0 var(--glass-highlight),
          inset 0 -1px 0 var(--glass-inner),
          0 12px 30px rgba(2,6,23,0.06)
        `,
      }}
    >
      {/* subtle liquid edge highlight (NOT a glossy band) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-6 rounded-t-3xl"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.18), transparent)",
          opacity: 0.45,
        }}
      />

      {/* content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}