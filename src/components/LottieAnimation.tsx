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

const LottieAnimation = ({
  animationData,
  className = "",
  autoplay = true,
  loop = true,
  onComplete,
  backgroundImage,
}: LottieAnimationProps) => {
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
