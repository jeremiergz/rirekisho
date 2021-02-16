import { useData } from '@providers/DataProvider';
import React, { createContext, useContext, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme as StyledTheme } from 'styled-system';

const breakpoints = ['320px', '375px', '425px', '768px', '1024px', '1200px', '1440px', '2560px'];
Object.defineProperties(breakpoints, {
  mobileS: { value: breakpoints[0] },
  mobileM: { value: breakpoints[1] },
  mobileL: { value: breakpoints[2] },
  tablet: { value: breakpoints[3] },
  laptopS: { value: breakpoints[4] },
  laptopM: { value: breakpoints[5] },
  laptopL: { value: breakpoints[6] },
  desktop: { value: breakpoints[7] },
});

const ThemeContext = createContext<{ theme: Theme }>({ theme: null });

const ThemeProvider: React.FC = ({ children }) => {
  const { themeData } = useData();
  const theme = useMemo(
    () => ({
      ...themeData,
      breakpoints,
      type: 'light' as const,
    }),
    [themeData],
  );
  return (
    <ThemeContext.Provider value={{ theme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

/**
 * Returns the theming context that allows retrieval of theme & toggling theme mode.
 */
function useTheme() {
  return useContext(ThemeContext);
}

export { useTheme };
export type Theme = Omit<StyledTheme, 'breakpoints' | 'colors' | 'fonts' | 'fontWeights'> & {
  breakpoints: string[];
  colors?: Theme.Colors;
  fonts?: Theme.Fonts;
  fontWeights?: Theme.FontWeights;
  type: Theme.Type;
};
export type ThemeProps = {
  colors?: keyof Theme['colors'] | 'inherit';
  fontWeight?: keyof Theme['fontWeights'];
  type?: Theme['type'];
};
export default ThemeProvider;
