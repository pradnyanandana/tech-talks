import { ButtonProps } from "@/types";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  className = "",
}: ButtonProps) {
  const baseClasses = "button";
  const variantClass = `button--${variant}`;
  const sizeClass = `button--${size}`;
  const fullWidthClass = fullWidth ? "button--full-width" : "";
  const disabledClass = disabled ? "button--disabled" : "";

  const classes = [
    baseClasses,
    variantClass,
    sizeClass,
    fullWidthClass,
    disabledClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}
