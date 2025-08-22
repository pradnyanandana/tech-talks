import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Pagination } from "swiper/modules";
import { WalkthroughSlide } from "@/types";
import Button from "./ui/Button";
import LottieAnimation from "./LottieAnimation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface WalkthroughSliderProps {
  onGetStarted: () => void;
}

export default function WalkthroughSlider({
  onGetStarted,
}: WalkthroughSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const swiperRef = useRef<SwiperClass | null>(null);

  const slides: WalkthroughSlide[] = [
    {
      id: "1",
      title: "Professionals around the world shared how they feel about",
      description: "technology and I've listened. Now it's your turn.",
    },
    {
      id: "2",
      title: "I'll ask you a handful of meaningful questions to",
      description: "understand your responses with people in your industry.",
    },
    {
      id: "3",
      title: "You'll get insights into current industry sentiments and",
      description:
        "a quick check about technology in a few minutes. Deal? Great!",
    },
  ];

  const handleSlideChange = (swiper: SwiperClass) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="walkthrough">
      <div className="walkthrough__animation">
        <LottieAnimation className="walkthrough__orb" />
      </div>

      <Swiper
        onSwiper={(swiperInstance) => {
          swiperRef.current = swiperInstance;
        }}
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
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="walkthrough__slide">
            <div className="walkthrough__content">
              <h2 className="walkthrough__title">
                {slide.title.split(" ").map((word, i) => {
                  // Highlight key words
                  const highlightWords = [
                    "technology",
                    "meaningful",
                    "insights",
                    "industry",
                  ];
                  const isHighlighted = highlightWords.includes(
                    word.toLowerCase().replace(/[.,!?]/g, "")
                  );

                  return (
                    <span
                      key={i}
                      className={
                        isHighlighted ? "walkthrough__title--highlight" : ""
                      }
                    >
                      {word}{" "}
                    </span>
                  );
                })}
              </h2>
              <p className="walkthrough__description">{slide.description}</p>
            </div>

            {index === slides.length - 1 ? (
              <Button
                onClick={onGetStarted}
                variant="primary"
                size="lg"
                fullWidth
                className="walkthrough__cta"
              >
                Get started
              </Button>
            ) : (
              <Button
                onClick={() => swiperRef.current?.slideNext()}
                variant="secondary"
                size="lg"
                fullWidth
                className="walkthrough__continue"
              >
                Continue
              </Button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="walkthrough__step-indicator">
        Step {currentSlide + 1} of {slides.length}
      </p>
    </div>
  );
}
