import type { PropsWithChildren } from "react";

type PillVariant = "default" | "strong";

export function Pill({
  children,
  variant = "default",
}: PropsWithChildren<{ variant?: PillVariant }>) {
  return (
    <span
      className={[
        "pill",
        variant === "strong" ? "pill-strong" : "",
      ].join(" ")}
    >
      {children}
    </span>
  );
}