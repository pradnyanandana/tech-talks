"use client";

import { createContext, useState } from "react";
import { FormData, ValidationErrors } from "@/types";

/**
 * Application context interface defining all available state and actions
 * @interface AppContextType
 */
interface AppContextType {
  /** Navigation state - Manages walkthrough slides */
  currentSlide?: number;
  setCurrentSlide?: (slide: number) => void;

  /** Form state - Manages multi-step form */
  formStep: number;
  formData: FormData;
  formErrors: ValidationErrors;
  setFormStep: (step: number) => void;
  setFormData: (data: FormData) => void;
  setFormErrors: (errors: ValidationErrors) => void;

  /** Animation states */
  isTransitioning: boolean;
  setIsTransitioning: (value: boolean) => void;
  direction: 'forward' | 'back';
  setDirection: (direction: 'forward' | 'back') => void;
}

// Create context with type assertion for initial empty state
export const AppContext = createContext<AppContextType>({} as AppContextType);

/**
 * Global application state provider
 * Manages navigation, form state, and transitions
 */
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // Walkthrough navigation state
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Form management state
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState<ValidationErrors>({});

  // Animation and transition states
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');

  // Provide all state and actions to children
  return (
    <AppContext.Provider
      value={{
        // Navigation
        currentSlide,
        setCurrentSlide,
        // Form state
        formStep,
        formData,
        formErrors,
        setFormStep,
        setFormData,
        setFormErrors,
        // Transitions
        isTransitioning,
        setIsTransitioning,
        direction,
        setDirection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
