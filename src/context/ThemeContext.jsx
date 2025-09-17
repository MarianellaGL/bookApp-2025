/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const STATE = {
  LIGHT: "light",
  DARK: "dark",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(STATE.DARK);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
