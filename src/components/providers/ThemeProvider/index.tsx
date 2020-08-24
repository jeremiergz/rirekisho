import { graphql, useStaticQuery } from 'gatsby';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme as StyledTheme } from 'styled-system';

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  body {
    color: ${({ theme }) => theme['colors'].text};
    font-family: ${({ theme }) => theme['fonts'].main};
    font-weight: 400;
  }
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(49, 133, 154, 0.5);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(49, 133, 154, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(49, 133, 154, 0);
    }
  }
  @page {
    size: A4 portrait;
    margin: 0mm;
  }
  @media print {
    body {
      /* Force displaying of background elements on print */
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
    }
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
        dark {
          ...Theme
        }
        light {
          ...Theme
        }
      }
    }
  `);
  const DarkTheme = useMemo(
    () => ({
      ...themeJson.dark,
      breakpoints,
      type: 'dark' as const,
    }),
    [themeJson],
  );
  const LightTheme = useMemo(
    () => ({
      ...themeJson.light,
      breakpoints,
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
  colors?: GraphQL.Theme['colors'];
  fonts?: GraphQL.Theme['fonts'];
  fontWeights?: GraphQL.Theme['fontWeights'];
  type: 'dark' | 'light';
};
export type ThemeProps = {
  colors?: keyof Theme['colors'] | 'inherit';
  fontWeight?: keyof Theme['fontWeights'];
  type?: Theme['type'];
};

export default ThemeProvider;
