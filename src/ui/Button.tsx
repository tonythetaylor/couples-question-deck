import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button(props: Props) {
  const {
    variant = "primary",
    className = "",
    disabled,
    type,
    ...rest
  } = props;

  const base = [
    "btn",
    "inline-flex items-center justify-center gap-2",
    "font-extrabold tracking-tight",
    "select-none",
    "transition",
    "disabled:opacity-40 disabled:pointer-events-none",
    className,
  ].join(" ");

  const variantClass =
    variant === "ghost" ? "btn-ghost" : "btn-primary";

  return (
    <button
      {...rest}
      type={type ?? "button"}
      disabled={disabled}
      className={[base, variantClass].join(" ")}
    />
  );
}