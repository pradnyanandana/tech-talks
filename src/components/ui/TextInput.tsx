import { IconArrowUp } from "@/lib/icons";
import { TextInputProps } from "@/types/components";
import { useState, useEffect } from "react";

/** Supported input validation types */
type ValidationType = "text" | "email";

/**
 * Validates input value based on type
 * @param value - The input value to validate
 * @param type - Type of validation to perform
 * @returns Error message if validation fails, undefined if passes
 */
const validateInput = (
  value: string,
  type: ValidationType
): string | undefined => {
  if (!value.trim()) {
    return "This field is required";
  }
  if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Please enter a valid email address";
  }
  return undefined;
};

/**
 * Generates className string for input element
 * Combines base styles, error state, and custom classes
 */
const generateInputClasses = (error?: string, className = "") => {
  return ["text-input__field", error && "text-input__field--error", className]
    .filter(Boolean)
    .join(" ");
};

/**
 * Enhanced text input component with built-in validation and submit button
 * Features:
 * - Input validation based on type
 * - Error display
 * - Submit button with active state
 * - Accessibility support
 */
const TextInput = ({
  id,
  type = "text" as ValidationType,
  onSubmit,
  placeholder,
  required = false,
  disabled = false,
  className = "",
  defaultValue
}: TextInputProps & { type?: ValidationType }) => {
  // State for internal value management and validation
  const [value, setValue] = useState(defaultValue || "");
  const [error, setError] = useState<string>();
  const inputClasses = generateInputClasses(error, className);

  /**
   * Validates current input value
   * @returns boolean indicating if validation passed
   */
  const validate = () => {
    const errorMessage = validateInput(value, type);
    setError(errorMessage);
    return !errorMessage;
  };

  /**
   * Handles submit button click
   * Validates input and calls onSubmit if valid
   */
  const handleSubmit = () => {
    if (validate()) {
      onSubmit(value);
      setValue("");
    }
  };

  // Sync internal value with defaultValue prop
  useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);

  return (
    <>
      {error && <div className="text-input__error">{error}</div>}
      <div className="text-input">
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) validate();
          }}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={inputClasses}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        <button
          className={`submit-button svg-button ${
            !error && value.trim() ? "active" : ""
          }`}
          aria-label="Submit"
          onClick={handleSubmit}
          type="button"
        >
          <IconArrowUp />
        </button>
      </div>
    </>
  );
};

export default TextInput;
