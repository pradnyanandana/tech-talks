export interface LottieAnimationProps {
  animationData: object;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  onComplete?: () => void;
  backgroundImage?: string;
}
