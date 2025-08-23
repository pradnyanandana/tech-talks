import { ButtonProps } from "@/types";

const generateButtonClasses = ({
  variant,
  size,
  fullWidth,
  disabled,
  className,
}: Pick<ButtonProps, 'variant' | 'size' | 'fullWidth' | 'disabled' | 'className'>) => {
  return [
    'button',
    `button--${variant}`,
    `button--${size}`,
    fullWidth && 'button--full-width',
    disabled && 'button--disabled',
    className,
  ].filter(Boolean).join(' ');
};

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  className = "",
}: ButtonProps) => {
  const classes = generateButtonClasses({
    variant,
    size,
    fullWidth,
    disabled,
    className,
  });

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
};

export default Button;
