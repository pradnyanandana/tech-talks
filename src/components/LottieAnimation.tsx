"use client";

import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

/**
 * Props for Lottie animation components
 * @interface LottieAnimationProps
 */
interface LottieAnimationProps {
  /** Animation data object from Lottie JSON */
  animationData: object;
  /** Optional className for container */
  className?: string;
  /** Whether animation should play automatically */
  autoplay?: boolean;
  /** Whether animation should loop */
  loop?: boolean;
  /** Callback fired when animation completes */
  onComplete?: () => void;
  /** Optional background image URL */
  backgroundImage?: string;
}

/**
 * Internal wrapper component for Lottie player
 * Handles direct interaction with lottie-react
 */
const LottieWrapper = ({
  lottieRef,
  ...props
}: {
  lottieRef: React.RefObject<LottieRefCurrentProps | null>;
} & Omit<LottieAnimationProps, "className">) => (
  <Lottie
    lottieRef={lottieRef}
    animationData={props.animationData}
    autoplay={props.autoplay}
    loop={props.loop}
    onComplete={props.onComplete ?? null}
    className="lottie-animation__player"
  />
);

/**
 * Main Lottie animation component
 * Provides a wrapper for lottie-react with simplified props
 * and consistent styling
 */
const LottieAnimation = ({
  animationData,
  className = "",
  autoplay = true,
  loop = true,
  onComplete,
  backgroundImage,
}: LottieAnimationProps) => {
  // Reference to control Lottie animation instance
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div className={`lottie-animation ${className}`.trim()}>
      <LottieWrapper
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={autoplay}
        loop={loop}
        onComplete={onComplete}
        backgroundImage={backgroundImage}
      />
    </div>
  );
};

export default LottieAnimation;
