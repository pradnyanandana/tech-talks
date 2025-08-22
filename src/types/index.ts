export interface FormData {
  firstName: string;
  email: string;
}

export interface WalkthroughSlide {
  id: string;
  title: string;
  description: string;
  animation?: string;
}

export interface ValidationErrors {
  [key: string]: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export interface TextInputProps {
  id: string;
  label: string;
  type?: "text" | "email" | "password" | "tel";
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}
