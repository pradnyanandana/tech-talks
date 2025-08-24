"use client";

import { usePathname } from "next/navigation";
import { useApp } from "@/hooks/useAppContext";
import { IconArrowLeft, IconLogo, IconReset } from "@/lib/icons";
import { useRef } from "react";
import { useTransitionRouter } from "@/hooks/useTransitionRouter";

/**
 * Mapping of routes for back navigation
 * Defines the previous path for each route
 */
const PATH_MAPPING = {
  "/walkthrough": "/",
  "/form": "/walkthrough",
  "/results": "/form",
} as const;

/**
 * Application header component
 * Features:
 * - Dynamic background on scroll
 * - Back navigation with state management
 * - Logo display
 * - Reset functionality
 *
 * Navigation logic:
 * 1. Walkthrough: Previous slide or home
 * 2. Form: Previous step or walkthrough
 * 3. Results: Back to form
 */
const AppHeader = () => {
  const { navigate } = useTransitionRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const headerRef = useRef<HTMLElement>(null);
  const { currentSlide, setCurrentSlide, formStep, setFormStep, setFormData } =
    useApp();

  /**
   * Navigate back based on current route:
   * - In walkthrough: Go to previous slide or home
   * - In form: Go to previous step or walkthrough
   * - Otherwise: Use PATH_MAPPING
   */
  const handleBack = () => {
    if (pathname === "/walkthrough") {
      if (currentSlide && currentSlide > 0 && setCurrentSlide) {
        setCurrentSlide(currentSlide - 1);
      } else {
        navigate("/");
      }
      return;
    }

    if (pathname === "/form") {
      if (formStep > 0) {
        setFormStep(formStep - 1);
      } else {
        setCurrentSlide?.(2);
        navigate("/walkthrough");
      }
      return;
    }

    const previousPath = PATH_MAPPING[pathname as keyof typeof PATH_MAPPING];
    navigate(previousPath || "/");
  };

  /**
   * Reset application state and navigate home
   * Includes delay to allow for exit animations
   * Only active when not on homepage
   */
  const handleReset = () => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        setCurrentSlide?.(0);
        setFormStep(0);
        setFormData?.({ firstName: "", email: "" });
      }, 700);
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="header-content">
          {!isHomePage ? (
            <button
              className="back-button svg-button"
              aria-label="Back"
              onClick={handleBack}
            >
              <IconArrowLeft />
            </button>
          ) : (
            <div className="empty-svg-button"></div>
          )}

          <div className="logo">
            <IconLogo />
          </div>

          <button
            className="reset-button svg-button"
            aria-label="Reset"
            onClick={handleReset}
          >
            <IconReset />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
