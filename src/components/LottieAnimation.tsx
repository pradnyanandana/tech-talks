"use client";

import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface LottieAnimationProps {
  animationData: object;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  onComplete?: () => void;
  backgroundImage?: string;
}

export default function LottieAnimation({
  animationData,
  className = "",
  autoplay = true,
  loop = true,
  onComplete,
}: LottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div className={`lottie-animation ${className}`}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={autoplay}
        loop={loop}
        onComplete={onComplete ? onComplete : null}
        className="lottie-animation__player"
      />
    </div>
  );
}
