"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

/**
 * Provider component for GSAP animations
 * Initializes GSAP and registers plugins globally
 *
 * @param props.children - Components that will use GSAP animations
 */
const GSAPProvider = ({ children }: { children: React.ReactNode }) => {
  /**
   * Initialize GSAP on mount
   * Ensures plugins are registered before any animations
   */
  useEffect(() => {
    gsap.registerPlugin();
  }, []);

  return <>{children}</>;
};

export default GSAPProvider;
