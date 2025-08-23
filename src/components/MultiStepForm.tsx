import { useState } from "react";
import { FormData, ValidationErrors } from "@/types";
import Button from "./ui/Button";
import TextInput from "./ui/TextInput";

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

const FormProgress = ({ progress }: { progress: number }) => (
  <div className="multistep-form__progress">
    <div
      className="multistep-form__progress-bar"
      style={{ width: `${progress}%` }}
    />
  </div>
);

const StepIndicator = ({
  current,
  total,
}: {
  current: number;
  total: number;
}) => (
  <div className="multistep-form__step-indicator">
    Step {current + 1} of {total}
  </div>
);

const MultiStepForm = ({ onSubmit }: { onSubmit: (data: FormData) => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateStep = (step: number): boolean => {
    const newErrors: ValidationErrors = {};
    const currentField = FORM_STEPS[step].field;
    const value = formData[currentField];

    if (!value.trim()) {
      newErrors[currentField] = "This field is required";
    } else if (
      currentField === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      newErrors[currentField] = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < FORM_STEPS.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        onSubmit(formData);
      }
    }
  };

  const currentStepData = FORM_STEPS[currentStep];
  const fieldName = currentStepData.field;
  const progress = ((currentStep + 1) / FORM_STEPS.length) * 100;

  return (
    <div className="multistep-form">
      <FormProgress progress={progress} />

      <div className="multistep-form__step">
        <h2 className="multistep-form__title">{currentStepData.title}</h2>

        <div className="multistep-form__field">
          <TextInput
            id={fieldName}
            label=""
            type={currentStepData.type}
            value={formData[fieldName]}
            onChange={(value: string) => handleInputChange(fieldName, value)}
            placeholder={currentStepData.placeholder}
            error={errors[fieldName]}
            required
          />
        </div>

        <div className="multistep-form__actions">
          {currentStep > 0 && (
            <Button
              onClick={() => setCurrentStep((prev) => prev - 1)}
              variant="ghost"
              size="lg"
              className="multistep-form__back"
            >
              Back
            </Button>
          )}

          <Button
            onClick={handleNext}
            variant="primary"
            size="lg"
            fullWidth={currentStep === 0}
            className="multistep-form__continue"
          >
            {currentStep === FORM_STEPS.length - 1 ? "Submit" : "Continue"}
          </Button>
        </div>
      </div>

      <StepIndicator current={currentStep} total={FORM_STEPS.length} />
    </div>
  );
};

export default MultiStepForm;
