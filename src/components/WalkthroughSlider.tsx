"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Pagination } from "swiper/modules";
import { WalkthroughSlide } from "@/types/components";
import AppNavigation from "./AppNavigation";
import { useApp } from "@/context/AppContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import ShapeAnimation from "./ShapeAnimation";

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

const BACKGROUND_POSITIONS = [
  "51.9% 51.9% at 50% 48.1%",
  "94.55% 94.55% at 50% 5.45%",
  "94.55% 94.55% at 50% 5.45%",
];

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

const WalkthroughSlider = () => {
  const { currentSlide: contextSlide, setCurrentSlide } = useApp();
  const router = useRouter();
  const [currentSlide, setCurrentSlideState] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const isLastSlide = currentSlide === WALKTHROUGH_SLIDES.length - 1;

  // Add effect to listen to navigation context changes
  useEffect(() => {
    if (
      contextSlide !== undefined &&
      contextSlide !== currentSlide &&
      swiperRef.current
    ) {
      swiperRef.current.slideTo(contextSlide);
    }
  }, [contextSlide, currentSlide]);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleGetStarted = () => {
    setCurrentSlide?.(0); // Reset slide position when leaving
    router.push("/form");
  };

  useEffect(() => {
    const section = document.querySelector(".shape-animation.__walkthrough");
    if (!section) return;

    gsap.to(section, {
      backgroundImage: `radial-gradient(${BACKGROUND_POSITIONS[currentSlide]}, #222737 0%, #0c0d10 100%)`,
      duration: 0.8,
      ease: "power2.inOut",
    });
  }, [currentSlide]);

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

        <div className="walkthrough">
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
