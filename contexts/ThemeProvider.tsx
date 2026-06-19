import { createContext, useEffect, useState } from "react";

export type ThemeState = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const defaultState: ThemeState = {
  isDarkMode: true,
  toggleTheme: () => {},
};

const THEME_STORAGE_KEY = "anshuman-portfolio-theme";

export const ThemeContext = createContext<ThemeState>(defaultState);

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return defaultState.isDarkMode;

    return window.localStorage.getItem(THEME_STORAGE_KEY) !== "light";
  });

  const toggleTheme = () => setDarkMode((_isDarkMode) => !_isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }

    window.localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
