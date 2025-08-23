"use client";

import { useApp } from "@/hooks/useAppContext";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Homepage title component with transition animations
 * Features:
 * - Fade and slide animations
 * - Transition state handling
 * - Highlighted technology text
 */
const HomeTitle = () => {
  const { isTransitioning } = useApp();
  // Refs for animating title and highlighted text
  const titleRef = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  /**
   * Handle entrance/exit animations
   * - Exit: Fade out and slide up
   * - Enter: Fade in from transparent
   */
  useEffect(() => {
    if (isTransitioning) {
      gsap.to([titleRef.current], {
        opacity: 0,
        duration: 0.6,
        transform: "translateY(calc(-1.6667rem + 128px))",
        ease: "none",
      });

      setTimeout(() => {
        titleRef.current?.classList.add("hide");
      }, 600);
    } else {
      gsap.fromTo(
        [titleRef.current],
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
    <h1 className="typography__h2" ref={titleRef}>
      Compare your thoughts on <span ref={spanRef}>technology</span> with
      current industry opinions.
    </h1>
  );
};

export default HomeTitle;
