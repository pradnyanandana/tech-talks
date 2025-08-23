"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Pagination } from "swiper/modules";
import { WalkthroughSlide } from "@/types/components";
import AppNavigation from "@/components/layout/AppNavigation";
import { useApp } from "@/hooks/useAppContext";
import ShapeAnimation from "@/components/features/ShapeAnimation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useTransitionRouter } from "@/hooks/useTransitionRouter";

/**
 * Slide content data with transitions between sections
 */
const WALKTHROUGH_SLIDES: WalkthroughSlide[] = [
  {
    id: "1",
    title:
      "Professionals around the world shared how they feel about technology and I've listened. Now it's your turn.",
  },
  {
    id: "2",
    title:
      "I'll ask you a handful of meaningful questions to understand your responses with people in your industry.",
  },
  {
    id: "3",
    title:
      "You'll get insights into current industry sentiments and a quick check about technology in a few minutes. Deal? Great!",
  },
];

/**
 * Background gradient positions for each slide
 * Maps to slide index for transition animations
 */
const BACKGROUND_POSITIONS = [
  "51.9% 51.9% at 50% 48.1%",
  "94.55% 94.55% at 50% 5.45%",
  "94.55% 94.55% at 50% 5.45%",
];

/**
 * Character-by-character animated title component
 */
const AnimatedTitle = ({
  title,
  currentSlide,
}: {
  title: string;
  currentSlide: number;
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const chars = titleRef.current.innerText.split("");
    titleRef.current.innerHTML = chars
      .map((char) => `<span class="char">${char}</span>`)
      .join("");

    gsap.fromTo(
      titleRef.current.querySelectorAll(".char"),
      {
        opacity: 0.5,
      },
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.02,
      }
    );
  }, [title, currentSlide]);

  return (
    <h2 ref={titleRef} className="walkthrough__title typography__h4">
      {title}
    </h2>
  );
};

/**
 * Progress indicator with dots for current slide position
 */
const NavigationDots = ({
  total,
  active,
}: {
  total: number;
  active: number;
}) => (
  <div className="walkthrough__navigation-dots">
    {Array.from({ length: total }).map((_, index) => (
      <span
        key={index}
        className={`walkthrough__dot ${index === active ? "active" : ""}`}
      />
    ))}
  </div>
);

/**
 * Individual slide content wrapper with container
 */
const SlideContent = ({
  slide,
  slideIndex,
  currentSlide,
}: {
  slide: WalkthroughSlide;
  slideIndex: number;
  currentSlide: number;
}) => (
  <div className="container">
    <div className="walkthrough__content">
      <AnimatedTitle
        key={slideIndex}
        title={slide.title}
        currentSlide={currentSlide}
      />
    </div>
  </div>
);

/**
 * Main walkthrough slider component
 * Features:
 * - Swiper-based slide navigation
 * - Animated transitions between slides
 * - Background gradient animations
 * - Progress indicators
 * - Navigation controls
 */
const WalkthroughSlider = () => {
  // Navigation and state management
  const { navigate } = useTransitionRouter();
  const {
    currentSlide: contextSlide,
    setCurrentSlide,
    isTransitioning,
    direction,
  } = useApp();
  
  // Local state and refs
  const [currentSlide, setCurrentSlideState] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const wrapperRef = useRef<HTMLHeadingElement>(null);
  const isLastSlide = currentSlide === WALKTHROUGH_SLIDES.length - 1;

  /**
   * Sync with navigation context changes
   * Updates swiper position when navigation occurs
   */
  useEffect(() => {
    if (
      contextSlide !== undefined &&
      contextSlide !== currentSlide &&
      swiperRef.current
    ) {
      swiperRef.current.slideTo(contextSlide);
    }
  }, [contextSlide, currentSlide]);

  /**
   * Handle slide background transitions
   * Updates gradient position based on current slide
   */
  useEffect(() => {
    const section = document.querySelector(".shape-animation.__walkthrough");
    if (!section) return;

    gsap.to(section, {
      backgroundImage: `radial-gradient(${BACKGROUND_POSITIONS[currentSlide]}, #222737 0%, #0c0d10 100%)`,
      duration: 0.8,
      ease: "power2.inOut",
    });
  }, [currentSlide]);

  /**
   * Handle entrance/exit animations
   * Different animations based on navigation direction
   */
  useEffect(() => {
    if (isTransitioning) {
      if (direction === "forward") {
        gsap.to([wrapperRef.current], {
          opacity: 0,
          duration: 0.6,
          transform: "translateY(calc(2.00003rem + 124.21px))",
          ease: "none",
        });
      } else {
        gsap.to([wrapperRef.current], {
          opacity: 0,
          duration: 0.6,
          ease: "none",
        });
      }

      setTimeout(() => {
        wrapperRef.current?.classList.add("hide");
      }, 600);
    } else {
      gsap.fromTo(
        [wrapperRef.current],
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "none",
        }
      );
    }
  }, [isTransitioning, direction]);

  // Navigation handlers
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleGetStarted = () => {
    navigate("/form");
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setCurrentSlide?.(swiper.activeIndex);
    setCurrentSlideState(swiper.activeIndex);
  };

  return (
    <>
      <section
        className={`shape-animation __walkthrough __slide_${currentSlide + 1}`}
      >
        <div className="container">
          <ShapeAnimation type="walkthrough" />
        </div>

        <div className="walkthrough" ref={wrapperRef}>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: "walkthrough__pagination-bullet",
              bulletActiveClass: "walkthrough__pagination-bullet--active",
            }}
            onSlideChange={handleSlideChange}
            className="walkthrough__swiper"
          >
            {WALKTHROUGH_SLIDES.map((slide, index) => (
              <SwiperSlide key={slide.id} className="walkthrough__slide">
                <SlideContent
                  slide={slide}
                  slideIndex={index}
                  currentSlide={currentSlide}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="walkthrough__navigation">
        <div className="container">
          <NavigationDots
            total={WALKTHROUGH_SLIDES.length}
            active={currentSlide}
          />
        </div>
      </section>

      <AppNavigation
        title={isLastSlide ? "Get started" : "Continue"}
        onClick={isLastSlide ? handleGetStarted : handleNext}
        variant={isLastSlide ? "secondary" : "outlined"}
      />
    </>
  );
};

export default WalkthroughSlider;
