"use client";

import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import LottieAnimation from "@/components/LottieAnimation";
import { hexagonalShape } from "@/lib/lottie";
import { useApp } from "@/hooks/useAppContext";
import { gsap } from "gsap";

/** Possible targets for GSAP animations */
type AnimationTarget = HTMLElement | GSAPTarget | null;
type GSAPTarget = string | Element | Element[];

/** Supported animation types matching routes */
type AnimationType = "homepage" | "result" | "walkthrough" | "form";
/** Navigation direction for transitions */
type Direction = "forward" | "back";

/** Props for ShapeAnimation component */
interface ShapeAnimationProps {
  type?: AnimationType;
}

/** Image animation properties */
interface AnimationProps {
  width: number;
  height: number;
  opacity: number;
}

/** Section animation properties */
interface SectionProps {
  paddingTop: string;
  backgroundImage: string;
}

/** Combined animation configuration */
interface AnimationConfig {
  image: AnimationProps;
  section: SectionProps;
}

/** Type mapping for animations by route and direction */
interface AnimationsType {
  homepage: {
    forward: AnimationConfig;
  };
  walkthrough: {
    forward: AnimationConfig;
    back: AnimationConfig;
  };
  result: {
    back: AnimationConfig;
  };
}

/** Default section styles */
const INITIAL_SECTION = {
  paddingTop: "9.5rem",
  backgroundImage:
    "radial-gradient(94.55% 94.55% at 50% 5.45%, #222737 0%, #0c0d10 100%)",
};

/** Animation configurations for each route and direction */
const ANIMATIONS: AnimationsType = {
  homepage: {
    forward: {
      image: { width: 146, height: 155, opacity: 1 },
      section: {
        paddingTop: "11.1667rem",
        backgroundImage:
          "radial-gradient(51.9% 51.9% at 50% 48.1%, rgb(34, 39, 55) 0%, rgb(12, 13, 16) 100%)",
      },
    },
  },
  walkthrough: {
    forward: {
      image: { width: 29, height: 30.79, opacity: 0.5 },
      section: {
        paddingTop: "9.16667rem",
        backgroundImage:
          "radial-gradient(94.55% 94.55% at 50% 5.45%, #222737 0%, #0c0d10 100%)",
      },
    },
    back: {
      image: { width: 274, height: 290, opacity: 1 },
      section: INITIAL_SECTION,
    },
  },
  result: {
    back: {
      image: { width: 146, height: 155, opacity: 0.5 },
      section: INITIAL_SECTION,
    },
  },
} as const;

/**
 * Animate target using GSAP with consistent timing
 * @param target Element or selector to animate
 * @param props Animation properties
 */
const animateShape = <T extends AnimationProps | SectionProps>(
  target: AnimationTarget,
  props: T
) => {
  gsap.to(target, {
    ...props,
    duration: 0.6,
    ease: "none",
  });
};

/**
 * Get animation configuration for current route and direction
 * @param type Current route type
 * @param direction Navigation direction
 * @returns Animation configuration if valid combination
 */
const getAnimation = (
  type: AnimationType,
  direction: Direction
): AnimationConfig | undefined => {
  const config = ANIMATIONS[type as keyof typeof ANIMATIONS];
  if (!config) return undefined;

  const isValidDirection = (
    config: typeof ANIMATIONS[keyof typeof ANIMATIONS],
    dir: Direction
  ): boolean => {
    return dir in config;
  };

  return isValidDirection(config, direction)
    ? (config as Record<Direction, AnimationConfig>)[direction]
    : undefined;
};

/**
 * Static image component with animation
 * Handles transitions between routes
 */
const ShapeImage = ({ type }: { type: AnimationType }) => {
  const { isTransitioning, direction } = useApp();
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!isTransitioning) return;

    const animation = getAnimation(type, direction);
    if (animation) {
      animateShape(imageRef.current, animation.image);
      animateShape(".shape-animation", animation.section);
    }
  }, [isTransitioning, direction, type]);

  return (
    <Image
      ref={imageRef}
      src="/images/shape-static.png"
      width={type === "homepage" ? 274 : 146}
      height={type === "homepage" ? 290 : 155}
      alt="Hexagonal Shape"
      unoptimized
      loader={({ src }) => src}
    />
  );
};

/**
 * Shape animation component
 * Features:
 * - Static/animated shape transitions
 * - Route-based animations
 * - Lottie animations for result/form
 */
const ShapeAnimation: FC<ShapeAnimationProps> = ({ type = "homepage" }) => {
  const { isTransitioning, direction } = useApp();

  useEffect(() => {
    if (isTransitioning && direction === "back" && type === "form") {
      animateShape(".lottie-animation__player", {
        width: 146,
        height: 155,
        opacity: 0.5,
      });
      animateShape(".shape-animation", ANIMATIONS.walkthrough.back.section);
    }
  }, [isTransitioning, direction, type]);

  if (type === "result" || type === "form") {
    return <LottieAnimation animationData={hexagonalShape} />;
  }

  return <ShapeImage type={type} />;
};

export default ShapeAnimation;
