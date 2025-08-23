export interface TextInputProps {
  id: string;
  label: string;
  type?: string;
  defaultValue: string;
  onSubmit: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}
