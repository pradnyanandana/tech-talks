"use client";

import Image from "next/image";
import { FC } from "react";
import LottieAnimation from "@/components/LottieAnimation";
import { hexagonalShape } from "@/lib/lottie";

type AnimationType = "homepage" | "result" | "walkthrough";

interface ShapeAnimationProps {
  type?: AnimationType;
}

const ShapeImage = ({ type }: { type: AnimationType }) => (
  <Image
    src="/images/shape-static.png"
    width={type === "homepage" ? 274 : 146}
    height={type === "homepage" ? 290 : 155}
    alt="Hexagonal Shape"
    unoptimized
    loader={({ src }) => src}
  />
);

const ShapeAnimation: FC<ShapeAnimationProps> = ({ type = "homepage" }) => {
  if (type === "result") {
    return <LottieAnimation animationData={hexagonalShape} />;
  }

  return <ShapeImage type={type} />;
};

export default ShapeAnimation;
