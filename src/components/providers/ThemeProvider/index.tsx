import { useReadiness } from 'components/providers/ReadinessProvider';
import { graphql, useStaticQuery } from 'gatsby';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme as StyledTheme } from 'styled-system';

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
  }
  body {
    color: ${({ theme }) => theme['colors'].text};
  }
`;

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

const defaultMode = 'light';
const isBrowser = typeof window !== 'undefined';
const localStorageKey = 'theme:mode';

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({ theme: null, toggle: () => null });

const ThemeProvider: React.FC = ({ children }) => {
  const { themeJson } = useStaticQuery<GraphQL.ThemeDataQuery>(graphql`
    query ThemeData {
      themeJson {
        colors {
          dark {
            ...ThemeColors
          }
          light {
            ...ThemeColors
          }
        }
        fontWeights {
          bolder
          bold
          regular
        }
        fonts {
          main
          title
        }
      }
    }
  `);
  const { setReady } = useReadiness();
  const DarkTheme = useMemo(
    () => ({
      ...themeJson,
      breakpoints,
      colors: { ...themeJson.colors.dark },
      type: 'dark' as const,
    }),
    [themeJson],
  );
  const LightTheme = useMemo(
    () => ({
      ...themeJson,
      breakpoints,
      colors: { ...themeJson.colors.light },
      type: 'light' as const,
    }),
    [themeJson],
  );
  const [isInitialized, setIsInitialized] = useState(false);
  const [mode, setMode] = useState<Theme['type']>(defaultMode);
  const toggle = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  };
  const theme = mode === 'light' ? LightTheme : DarkTheme;
  useEffect(() => {
    if (isBrowser && isInitialized) localStorage.setItem(localStorageKey, mode);
  }, [mode]);
  useEffect(() => {
    const storedMode = (isBrowser && (localStorage.getItem(localStorageKey) as Theme['type'])) || defaultMode;
    setMode(storedMode);
    setIsInitialized(true);
    setReady('Theme');
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
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
  colors?: GraphQL.ThemeColors;
  fonts?: GraphQL.ThemeJson['fonts'];
  fontWeights?: GraphQL.ThemeJson['fontWeights'];
  type: 'dark' | 'light';
};
export type ThemeProps = {
  colors?: keyof Theme['colors'] | 'inherit';
  fontWeight?: keyof Theme['fontWeights'];
  type?: Theme['type'];
};

export default ThemeProvider;
