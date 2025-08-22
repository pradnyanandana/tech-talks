"use client";

import Image from "next/image";
import { FC } from "react";
import LottieAnimation from "./LottieAnimation";
import { hexagonalShape } from "@/lib/lottie";

interface LayoutProps {
  type?: string;
}

const ShapeAnimation: FC<LayoutProps> = ({ type = "homepage" }) => {
  return (
    <section className={`shape-animation __${type}`}>
      <div className="container">
        {type === "result" ? (
          <LottieAnimation animationData={hexagonalShape} />
        ) : (
          <Image
            src="/images/shape-static.png"
            width={type === "homepage" ? 274 : 146}
            height={type === "homepage" ? 290 : 155}
            alt="Hexagonal Shape"
            unoptimized
            loader={({ src }) => src}
          />
        )}

        {type === "homepage" && (
          <>
            <p className="shape-animation-text">
              WA businesses feel confident about future growth
            </p>
            <p className="shape-animation-text">AI cant replace creativity</p>
            <p className="shape-animation-text">Sales measure true success</p>
            <p className="shape-animation-text">
              Human connection drives WA business
            </p>
            <p className="shape-animation-text">
              The primary barrier to digital transformation is financial
              investment
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default ShapeAnimation;
