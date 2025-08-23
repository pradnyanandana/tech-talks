"use client";

import { usePathname, useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { IconArrowLeft, IconLogo, IconReset } from "@/lib/icons";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const PATH_MAPPING = {
  "/walkthrough": "/",
  "/form": "/walkthrough",
  "/results": "/form",
} as const;

const AppHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const headerRef = useRef<HTMLElement>(null);
  const wasScrolled = useRef(false);
  const { currentSlide, setCurrentSlide, formStep, setFormStep, setFormData } =
    useApp();

  useLayoutEffect(() => {
    const updateHeader = () => {
      if (!headerRef.current) return;

      const isScrolled = window.scrollY > 0;
      if (wasScrolled.current !== isScrolled) {
        wasScrolled.current = isScrolled;
        gsap.to(headerRef.current, {
          backgroundColor: isScrolled
            ? "var(--color-background)"
            : "transparent",
          boxShadow: isScrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", updateHeader);
    updateHeader();

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const handleBack = () => {
    if (pathname === "/walkthrough") {
      if (currentSlide && currentSlide > 0 && setCurrentSlide) {
        setCurrentSlide(currentSlide - 1);
      } else {
        router.push("/");
      }
      return;
    }

    if (pathname === "/form") {
      if (formStep > 0) {
        setFormStep(formStep - 1);
      } else {
        setCurrentSlide?.(2);
        router.push("/walkthrough");
      }
      return;
    }

    const previousPath = PATH_MAPPING[pathname as keyof typeof PATH_MAPPING];
    router.push(previousPath || "/");
  };

  const handleReset = () => {
    router.push("/");

    // Execute state updates after navigation
    setTimeout(() => {
      setCurrentSlide?.(0);
      setFormStep(0);
      setFormData?.({ firstName: "", email: "" });
    }, 100);
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