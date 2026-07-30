import React, { useState } from "react";
import { FontToggleContext } from "@/context/fontToggleContext";

export const FontToggleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontToggle, setFontToggle] = useState(false);
  return (
    <FontToggleContext.Provider value={{ fontToggle, setFontToggle }}>
      {children}
    </FontToggleContext.Provider>
  );
};
