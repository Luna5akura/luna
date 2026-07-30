import { useContext } from "react";
import { FontToggleContext, type FontToggleContextType } from "@/context/fontToggleContext";

export const useFontToggle = (): FontToggleContextType => {
  const context = useContext(FontToggleContext);
  if (!context) {
    throw new Error("useFontToggle must be used within a FontToggleProvider");
  }
  return context;
};
