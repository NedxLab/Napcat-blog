import type { ThemeContext, Theme, ThemeProviderProps } from "types/theme";
import { createContext, useContext, useState } from "react";
import { LightTheme, DarkTheme } from "./Themes";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Mode } from "types/theme";

const initialValue = {
  changeMode: () => {},
  mode: Mode.Light,
};

const AppThemeContext = createContext<ThemeContext>(initialValue);

export const AppThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(LightTheme);
  const [mode, setMode] = useState<Mode>(Mode.Light);

  const changeMode = (mode: Mode) => {
    setTheme(mode === Mode.Light ? LightTheme : DarkTheme);
    setMode(mode);
  };

  return (
    <AppThemeContext.Provider value={{ mode, changeMode }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(AppThemeContext);

export default AppThemeProvider;
