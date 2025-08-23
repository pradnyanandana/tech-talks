"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

const GSAPProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    gsap.registerPlugin();
  }, []);

  return <>{children}</>;
};

export default GSAPProvider;
