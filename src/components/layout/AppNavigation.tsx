"use client";

import { FC } from "react";
import Button from "@/components/ui/Button";
import { useTransitionRouter } from "@/hooks/useTransitionRouter";

/**
 * Props for the navigation component
 * @interface AppNavigationProps
 */
interface AppNavigationProps {
  /** Target path for navigation */
  path?: string;
  /** Button text content */
  title?: string;
  /** Optional click handler for custom navigation */
  onClick?: () => void;
  /** Visual style variant for the button */
  variant?: "primary" | "secondary" | "ghost" | "outlined";
}

/**
 * Fixed bottom navigation component
 * Provides consistent navigation with transitions
 *
 * @example
 * // Basic usage with path
 * <AppNavigation path="/next-page" />
 *
 * // Custom handler
 * <AppNavigation onClick={handleCustomAction} />
 */
const AppNavigation: FC<AppNavigationProps> = ({
  path = "/",
  title = "Get a reality check",
  onClick,
  variant = "primary",
}) => {
  const { navigate } = useTransitionRouter();

  /**
   * Handles button click
   * Uses custom handler if provided, otherwise navigates to path
   */
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(path);
    }
  };

  return (
    <section className="navigation">
      <div className="container">
        <Button fullWidth onClick={handleClick} variant={variant}>
          {title}
        </Button>
      </div>
    </section>
  );
};

export default AppNavigation;
