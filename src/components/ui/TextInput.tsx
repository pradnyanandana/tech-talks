import { IconArrowUp } from "@/lib/icons";
import { TextInputProps } from "@/types/components";
import { useState, useEffect } from "react";

type ValidationType = "text" | "email";

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

const generateInputClasses = (error?: string, className = "") => {
  return ["text-input__field", error && "text-input__field--error", className]
    .filter(Boolean)
    .join(" ");
};

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
  const [value, setValue] = useState(defaultValue || "");
  const [error, setError] = useState<string>();
  const inputClasses = generateInputClasses(error, className);

  const validate = () => {
    const errorMessage = validateInput(value, type);
    setError(errorMessage);
    return !errorMessage;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(value);
      setValue("");
    }
  };

  // Add effect to update value when defaultValue changes
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
