import type { ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" }) {
  const { variant = "primary", className = "", ...rest } = props;
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition active:scale-[0.99]";
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : "bg-transparent text-slate-700 hover:bg-slate-100";
  return <button className={`${base} ${styles} ${className}`} {...rest} />;
}