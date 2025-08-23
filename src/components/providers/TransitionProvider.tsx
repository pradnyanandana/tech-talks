"use client";

import { useTransitionRouter } from "@/hooks/useTransitionRouter";
import { useEffect } from "react";

/**
 * Provider component that handles route transitions and animations
 * Intercepts link clicks to add transition animations between routes
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap
 */
const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const { navigate } = useTransitionRouter();

  useEffect(() => {
    /**
     * Handle link click events
     * Intercepts navigation and applies transitions
     */
    const handleClick = (e: MouseEvent) => {
      // Find closest anchor tag to clicked element
      const link = (e.target as HTMLElement).closest("a");

      // Only handle internal links (same origin)
      if (link?.href && link.href.startsWith(window.location.origin)) {
        e.preventDefault();
        // Extract path from full URL
        const path = link.href.replace(window.location.origin, "");
        navigate(path);
      }
    };

    // Attach and cleanup event listener
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return <>{children}</>;
};

export default TransitionProvider;
