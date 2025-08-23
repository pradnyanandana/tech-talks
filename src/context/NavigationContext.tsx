"use client";

import { createContext, useContext, useState } from "react";

interface NavigationContextType {
  currentSlide?: number;
  setCurrentSlide?: (slide: number) => void;
}

const NavigationContext = createContext<NavigationContextType>({});

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <NavigationContext.Provider value={{ currentSlide, setCurrentSlide }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
