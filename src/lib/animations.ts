import { gsap } from "gsap";

export const fadeInUp = (element: HTMLElement, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, delay, ease: "power2.out" }
  );
};

export const fadeIn = (element: HTMLElement, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0 },
    { opacity: 1, duration: 0.6, delay, ease: "power2.out" }
  );
};

export const scaleIn = (element: HTMLElement, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 1, delay, ease: "back.out(1.7)" }
  );
};

export const slideInFromLeft = (element: HTMLElement, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 0.8, delay, ease: "power2.out" }
  );
};

export const slideInFromRight = (element: HTMLElement, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 0.8, delay, ease: "power2.out" }
  );
};

export const staggerAnimation = (
  elements: HTMLElement[],
  animation: string = "fadeInUp"
) => {
  const animationMap = {
    fadeInUp,
    fadeIn,
    scaleIn,
    slideInFromLeft,
    slideInFromRight,
  };

  const animationFunction =
    animationMap[animation as keyof typeof animationMap] || fadeInUp;

  elements.forEach((element, index) => {
    animationFunction(element, index * 0.1);
  });
};
