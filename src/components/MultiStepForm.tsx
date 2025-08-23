"use client";

import { useApp } from "@/context/AppContext";
import { FormData } from "@/types";
import TextInput from "./ui/TextInput";
import ShapeAnimation from "./ShapeAnimation";
import { useRouter } from "next/navigation";

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

const MultiStepForm = () => {
  const router = useRouter();
  const { formStep, formData, setFormStep, setFormData } = useApp();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (formStep < FORM_STEPS.length - 1) {
      setFormStep(formStep + 1);
    } else {
      router.push("/results");
    }
  };

  const currentStepData = FORM_STEPS[formStep];
  const fieldName = currentStepData.field;

  return (
    <>
      <section className={`shape-animation __form __slide_${formStep + 1}`}>
        <div className="container">
          <ShapeAnimation type="result" />

          <h2 className="multistep-form__title typography__regular">
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
