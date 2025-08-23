import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Pagination } from "swiper/modules";
import { WalkthroughSlide, WalkthroughSliderProps, SlideContentProps, AnimatedTitleProps } from "@/types/components";
import Button from "./ui/Button";
// import LottieAnimation from "./LottieAnimation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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

const AnimatedTitle = ({ title }: { title: string }) => {
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
				opacity: 0,
				y: 20,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.02,
				ease: "back.out(1.7)",
			}
		);
	}, [title]);

	return (
		<h2 ref={titleRef} className="walkthrough__title">
			{title}
		</h2>
	);
};

const SlideContent = ({
	slide,
	isLastSlide,
	onNext,
	onGetStarted,
}: {
	slide: WalkthroughSlide;
	isLastSlide: boolean;
	onNext: () => void;
	onGetStarted: () => void;
}) => (
	<div className="walkthrough__content">
		<AnimatedTitle title={slide.title} />
		{isLastSlide ? (
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
				onClick={onNext}
				variant="secondary"
				size="lg"
				fullWidth
				className="walkthrough__continue"
			>
				Continue
			</Button>
		)}
	</div>
);

const WalkthroughSlider = ({ onGetStarted }: { onGetStarted: () => void }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const swiperRef = useRef<SwiperClass | null>(null);

	return (
		<div className="walkthrough">
			<div className="walkthrough__animation">
				{/* <LottieAnimation className="walkthrough__orb" /> */}
			</div>

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
				onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
				className="walkthrough__swiper"
			>
				{WALKTHROUGH_SLIDES.map((slide, index) => (
					<SwiperSlide key={slide.id} className="walkthrough__slide">
						<SlideContent
							slide={slide}
							isLastSlide={index === WALKTHROUGH_SLIDES.length - 1}
							onNext={() => swiperRef.current?.slideNext()}
							onGetStarted={onGetStarted}
						/>
					</SwiperSlide>
				))}
			</Swiper>

			<p className="walkthrough__step-indicator">
				Step {currentSlide + 1} of {WALKTHROUGH_SLIDES.length}
			</p>
		</div>
	);
};

export default WalkthroughSlider;
