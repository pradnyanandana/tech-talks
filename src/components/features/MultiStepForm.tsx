"use client";

import { useApp } from "@/hooks/useAppContext";
import { FormData } from "@/types";
import TextInput from "@/components/ui/TextInput";
import ShapeAnimation from "@/components/features/ShapeAnimation";
import { useTransitionRouter } from "@/hooks/useTransitionRouter";
import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Form steps configuration
 * Each step defines:
 * - Unique ID
 * - Display title
 * - Form field name
 * - Input placeholder
 * - Input type
 */
const FORM_STEPS = [
  {
    id: "name",
    title: "Let's start with the basics! Type in your first name.",
    field: "firstName",
    placeholder: "First name",
    type: "text" as const,
  },
  {
    id: "email",
    title: "How should we contact you? Type in your email address.",
    field: "email",
    placeholder: "Email address",
    type: "email" as const,
  },
] as const;

/**
 * Multi-step form component
 * Features:
 * - Progressive form completion
 * - Input validation
 * - Animated transitions
 * - Form state persistence
 */
const MultiStepForm = () => {
  // Navigation and form state
  const { navigate } = useTransitionRouter();
  const {
    formStep,
    formData,
    setFormStep,
    setFormData,
    isTransitioning,
    direction,
  } = useApp();

  // Ref for title animations
  const textRef = useRef<HTMLDivElement>(null);

  /**
   * Handle form input submission
   * Updates form data and advances to next step
   */
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (formStep < FORM_STEPS.length - 1) {
      setFormStep(formStep + 1);
    } else {
      navigate("/results");
    }
  };

  // Get current step configuration
  const currentStepData = FORM_STEPS[formStep];
  const fieldName = currentStepData.field;

  /**
   * Handle transition animations
   * Fades title based on navigation direction
   */
  useEffect(() => {
    if (isTransitioning) {
      if (direction === "back") {
        gsap.to([textRef.current], {
          opacity: 0,
          duration: 0.6,
          ease: "none",
        });
      }
    } else {
      gsap.to([textRef.current], {
        opacity: 1,
        duration: 0.6,
        ease: "none",
      });
    }
  }, [isTransitioning, direction]);

  return (
    <>
      <section className={`shape-animation __form __slide_${formStep + 1}`}>
        <div className="container">
          <ShapeAnimation type="form" />

          <h2
            className="multistep-form__title typography__regular"
            ref={textRef}
          >
            {currentStepData.title}
          </h2>
        </div>
      </section>

      <section className="navigation">
        <div className="container">
          <div className="multistep-form">
            <div className="multistep-form__step">
              <div className="multistep-form__field">
                <TextInput
                  label=""
                  id={fieldName}
                  type={currentStepData.type}
                  defaultValue={formData[fieldName] || ""}
                  onSubmit={(value: string) =>
                    handleInputChange(fieldName, value)
                  }
                  placeholder={currentStepData.placeholder}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MultiStepForm;
