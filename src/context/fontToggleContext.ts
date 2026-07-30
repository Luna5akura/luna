import { createContext, type Dispatch, type SetStateAction } from "react";

export interface FontToggleContextType {
  fontToggle: boolean;
  setFontToggle: Dispatch<SetStateAction<boolean>>;
}

export const FontToggleContext = createContext<FontToggleContextType | undefined>(undefined);
