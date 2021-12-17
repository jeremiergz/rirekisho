import React, { createContext, useContext, useEffect, useState } from 'react';
import tailwindColors from 'tailwindcss/colors';

type ThemeType = 'dark' | 'light';

const colors = {
  ...tailwindColors,
  primary: '#17365c',
  primaryDark: '#007ac1',
  secondary: '#31859a',
  secondaryDark: '#67daff',
};

let initialThemeType: ThemeType = 'light';
const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    initialThemeType = 'dark';
  }
}

const ThemeContext = createContext<{
  colors: typeof colors & { primary: string; secondary: string };
  toggle(): void;
  type: ThemeType;
}>({
  colors,
  toggle: () => {},
  type: 'light',
});

function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [type, setType] = useState<ThemeType>(initialThemeType);

  const toggle = () => setType(type === 'light' ? 'dark' : 'light');

  useEffect(() => {
    if (isBrowser) {
      localStorage.theme = type;
      if (type === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [type]);

  return <ThemeContext.Provider value={{ colors, toggle, type }}>{children}</ThemeContext.Provider>;
}

ThemeProvider.displayName = 'ThemeProvider';

/**
 * Returns the theming context that allows retrieval of theme & toggling theme mode.
 */
function useTheme() {
  return useContext(ThemeContext);
}

export type ThemeProviderProps = {
  children: React.ReactNode;
};
export { useTheme };
export default ThemeProvider;
