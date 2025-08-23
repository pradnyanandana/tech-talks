import { ButtonProps } from "@/types/components";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useApp } from "@/hooks/useAppContext";

/**
 * Generates className string for button element
 * Combines variants, sizes, states and custom classes
 * @param props - Button properties for class generation
 */
const generateButtonClasses = ({
  variant,
  size,
  fullWidth,
  disabled,
  className,
}: Pick<
  ButtonProps,
  "variant" | "size" | "fullWidth" | "disabled" | "className"
>) => {
  return [
    "button",
    `button--${variant}`,
    `button--${size}`,
    fullWidth && "button--full-width",
    disabled && "button--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");
};

/**
 * Animated button component with transition effects
 * Features:
 * - Multiple variants (primary, secondary, outlined)
 * - Size variations
 * - Full width option
 * - Disabled state
 * - Content slide animations
 *
 * @example
 * <Button variant="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 */
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
  // Access global transition state
  const { isTransitioning } = useApp();
  // Ref for animating button content
  const contentRef = useRef<HTMLDivElement>(null);
  const classes = generateButtonClasses({
    variant,
    size,
    fullWidth,
    disabled,
    className,
  });

  // Handle entrance and exit animations
  useEffect(() => {
    if (isTransitioning) {
      // Exit animation - slide left and fade out
      gsap.to(contentRef.current, {
        x: -20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.in",
      });
    } else {
      // Entrance animation - slide from right and fade in
      gsap.fromTo(
        contentRef.current,
        { x: 20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, [children, isTransitioning]);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-disabled={disabled}
    >
      <div ref={contentRef} style={{ width: "100%" }}>
        {children}
      </div>
    </button>
  );
};

export default Button;
