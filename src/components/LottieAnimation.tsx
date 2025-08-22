import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface LottieAnimationProps {
  animationData?: object;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  onComplete?: () => void;
}

export default function LottieAnimation({
  animationData,
  className = "",
  autoplay = true,
  loop = true,
  onComplete,
}: LottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const defaultOrbAnimation: object = {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 400,
    h: 400,
    nm: "Orb Animation",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Orb",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              {
                i: { x: [0.833], y: [0.833] },
                o: { x: [0.167], y: [0.167] },
                t: 0,
                s: [0],
              },
              { t: 179, s: [360] },
            ],
          },
          p: { a: 0, k: [200, 200, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        shapes: [
          {
            ty: "el",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [200, 200] },
            nm: "Ellipse Path 1",
          },
          {
            ty: "gf",
            o: { a: 0, k: 100 },
            r: 1,
            g: {
              p: 3,
              k: [0, 0.24, 0.47, 1, 0.5, 0.55, 0.31, 0.96, 1, 0.93, 0.17, 0.55],
            },
            s: { a: 0, k: [0, 0] },
            e: { a: 0, k: [100, 0] },
            t: 1,
            nm: "Gradient Fill 1",
          },
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0,
      },
    ],
  };

  const animationToUse = animationData || defaultOrbAnimation;

  return (
    <div className={`lottie-animation ${className}`}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationToUse}
        autoplay={autoplay}
        loop={loop}
        onComplete={onComplete ? onComplete : null}
        className="lottie-animation__player"
      />
    </div>
  );
}
