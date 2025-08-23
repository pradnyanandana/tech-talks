"use client";

import { useApp } from "@/context/AppContext";
import ShapeAnimation from "./ShapeAnimation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AppNavigation from "./AppNavigation";

const ResultMessage = () => {
  const router = useRouter();
  const { formData } = useApp();

  useEffect(() => {
    if (!formData.firstName) {
      router.push("/form");
    }
  }, [formData]);

  return (
    <>
      <section className={`shape-animation __result`}>
        <div className="container">
          <ShapeAnimation type="result" />

          <h2 className="multistep-form__title typography__regular">
            Thanks, {formData.firstName}! Now, it’s time to get a reality check.
            <br></br>
            <br></br> This will take 2-3 minutes. 
          </h2>
        </div>
      </section>

      <AppNavigation title="Continue" onClick={() => {}} variant="secondary" />
    </>
  );
};

export default ResultMessage;
