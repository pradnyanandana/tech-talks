import { TextInputProps } from "@/types";

export default function TextInput({
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
}: TextInputProps) {
  const inputClasses = [
    "text-input__field",
    error ? "text-input__field--error" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="text-input">
      <label htmlFor={id} className="text-input__label">
        {label}
        {required && (
          <span className="text-input__required" aria-label="required">
            *
          </span>
        )}
      </label>

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

      {error && (
        <div id={`${id}-error`} className="text-input__error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
