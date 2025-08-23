export interface WalkthroughSlide {
  id: string;
  title: string;
}

export interface WalkthroughSliderProps {
  onGetStarted: () => void;
}

export interface SlideContentProps {
  slide: WalkthroughSlide;
  isLastSlide: boolean;
  onNext: () => void;
  onGetStarted: () => void;
}

export interface AnimatedTitleProps {
  title: string;
}
