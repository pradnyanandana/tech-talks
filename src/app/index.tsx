import type { AppProps } from "next/app";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize GSAP
    gsap.registerPlugin();
  }, []);

  return <Component {...pageProps} />;
}
