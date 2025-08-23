"use client";

import { useApp } from "@/hooks/useAppContext";
import ShapeAnimation from "@/components/features/ShapeAnimation";
import { useEffect, useRef } from "react";
import AppNavigation from "@/components/layout/AppNavigation";
import { useTransitionRouter } from "@/hooks/useTransitionRouter";

/**
 * Results message component
 * Features:
 * - Form data validation
 * - Redirect to form if no data
 * - Shape animation integration
 * - Navigation controls
 */
const ResultMessage = () => {
  const { navigate } = useTransitionRouter();
  const { formData } = useApp();
  const textRef = useRef<HTMLDivElement>(null);

  /**
   * Validate form data on mount
   * Redirects to form if firstName is missing
   */
  useEffect(() => {
    if (!formData.firstName) {
      navigate("/form");
    }
  }, [formData]);

  return (
    <>
      <section className={`shape-animation __result`}>
        <div className="container">
          <ShapeAnimation type="result" />

          <h2
            className="multistep-form__title typography__regular"
            ref={textRef}
          >
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
