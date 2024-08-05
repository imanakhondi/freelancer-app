import { createContext, useEffect } from "react";
import UseLocalStorageState from "../hooks/UseLocalStorageState";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = UseLocalStorageState(
    "darkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches 
  );

  const toggleDarkMod = () => setIsDarkMode((prevDark) => !prevDark);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMod }}>
      {children}
    </DarkModeContext.Provider>
  );
}
