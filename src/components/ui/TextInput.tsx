import { TextInputProps } from "@/types/components";

const InputLabel = ({
  id,
  label,
  required,
}: {
  id: string;
  label: string;
  required: boolean;
}) => (
  <label htmlFor={id} className="text-input__label">
    {label}
    {required && (
      <span className="text-input__required" aria-label="required">
        *
      </span>
    )}
  </label>
);

const ErrorMessage = ({ id, error }: { id: string; error: string }) => (
  <div id={`${id}-error`} className="text-input__error" role="alert">
    {error}
  </div>
);

const generateInputClasses = (error?: string, className = "") => {
  return [
    "text-input__field",
    error && "text-input__field--error",
    className,
  ]
    .filter(Boolean)
    .join(" ");
};

const TextInput = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  required = false,
  disabled = false,
  className = "",
}: TextInputProps) => {
  const inputClasses = generateInputClasses(error, className);

  return (
    <div className="text-input">
      <InputLabel id={id} label={label} required={required} />

      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={inputClasses}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />

      {error && <ErrorMessage id={id} error={error} />}
    </div>
  );
};

export default TextInput;
