"use client";

import { useApp } from "@/hooks/useAppContext";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Static content for homepage animation
 * Each text appears with staggered animation
 */
const HOMEPAGE_TEXTS = [
  "WA businesses feel confident about future growth",
  "AI cant replace creativity",
  "Sales measure true success",
  "Human connection drives WA business",
  "The primary barrier to digital transformation is financial investment",
] as const;

/**
 * Animated home content component
 * Features:
 * - Multiple text blocks with refs
 * - Transition animations on route change
 * - Fade and slide effects
 */
const HomeContent = () => {
  const { isTransitioning } = useApp();
  // Array of refs for animating multiple text blocks
  const textRefs = useRef<HTMLParagraphElement[]>([]);

  /**
   * Handle transition animations
   * Exit: Fade out and slide up
   * Enter: Fade in from transparent
   */
  useEffect(() => {
    if (isTransitioning) {
      gsap.to(textRefs.current, {
        opacity: 0,
        duration: 0.6,
        transform: "translateY(-1.6667rem)",
        ease: "none",
      });

      setTimeout(() => {
        textRefs.current.forEach((ref) => ref?.classList.add("hide"));
      }, 600);
    } else {
      gsap.fromTo(
        textRefs.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "none",
        }
      );
    }
  }, [isTransitioning]);

  return (
    <>
      {HOMEPAGE_TEXTS.map((text, index) => (
        <p
          key={index}
          className="shape-animation-text"
          ref={(el) => {
            if (el) textRefs.current[index] = el;
          }}
        >
          {text}
        </p>
      ))}
    </>
  );
};

export default HomeContent;
