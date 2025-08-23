"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Provider component for smooth scrolling functionality
 * Integrates Lenis smooth scroll with GSAP ScrollTrigger
 *
 * @param props.children - Child components to enable smooth scroll
 */
const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Initialize Lenis with custom easing
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom ease out expo
      smoothWheel: true,
    });

    /**
     * Request animation frame loop for Lenis
     */
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start animation loop
    requestAnimationFrame(raf);

    // GSAP ScrollTrigger integration
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return <>{children}</>;
};

export default ScrollProvider;
