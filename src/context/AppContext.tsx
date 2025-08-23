"use client";

import { createContext, useContext, useState } from "react";
import { FormData, ValidationErrors } from "@/types";

interface AppContextType {
  // Navigation state
  currentSlide?: number;
  setCurrentSlide?: (slide: number) => void;
  
  // Form state
  formStep: number;
  formData: FormData;
  formErrors: ValidationErrors;
  setFormStep: (step: number) => void;
  setFormData: (data: FormData) => void;
  setFormErrors: (errors: ValidationErrors) => void;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // Navigation state
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  // Form state
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState<ValidationErrors>({});

  return (
    <AppContext.Provider 
      value={{
        currentSlide,
        setCurrentSlide,
        formStep,
        formData,
        formErrors,
        setFormStep,
        setFormData,
        setFormErrors,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
