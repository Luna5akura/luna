import React, { createContext, useContext, useState } from "react";

interface FontToggleContextType {
  fontToggle: boolean;
  setFontToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const FontToggleContext = createContext<FontToggleContextType | undefined>(undefined);

export const FontToggleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontToggle, setFontToggle] = useState(false);
  return (
    <FontToggleContext.Provider value={{ fontToggle, setFontToggle }}>
      {children}
    </FontToggleContext.Provider>
  );
};

export const useFontToggle = (): FontToggleContextType => {
  const context = useContext(FontToggleContext);
  if (!context) {
    throw new Error("useFontToggle must be used within a FontToggleProvider");
  }
  return context;
};
