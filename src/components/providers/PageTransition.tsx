"use client";

import { useApp } from "@/hooks/useAppContext";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const { isTransitioning } = useApp();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    
    if (isTransitioning) {
      gsap.to(contentRef.current, {
        opacity: 0.25,
        duration: 0.4,
        ease: "power2.in",
      });
    } else {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0.25 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, [isTransitioning]);

  return (
    <div ref={contentRef} style={{ opacity: 0, minHeight: "100dvh" }}>
      {children}
    </div>
  );
};

export default PageTransition;
