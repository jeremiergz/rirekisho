import React, { createContext, useContext, useEffect, useState } from 'react';

let initialThemeMode: ThemeMode = 'light';
const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    initialThemeMode = 'dark';
  }
}

const ThemeContext = createContext<{
  mode: ThemeMode;
  toggle(): void;
}>({
  mode: 'light',
  toggle: () => {},
});

function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [mode, setMode] = useState<ThemeMode>(initialThemeMode);

  const toggle = () => setMode(mode === 'light' ? 'dark' : 'light');

  useEffect(() => {
    if (isBrowser) {
      localStorage.theme = mode;
      if (mode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [mode]);

  return <ThemeContext.Provider value={{ mode, toggle }}>{children}</ThemeContext.Provider>;
}

ThemeProvider.displayName = 'ThemeProvider';

/**
 * Returns the theming context that allows retrieval of theme mode & toggling theme mode.
 */
function useTheme() {
  return useContext(ThemeContext);
}

export type ThemeMode = 'dark' | 'light';
export type ThemeProviderProps = {
  children: React.ReactNode;
};
export { useTheme };
export default ThemeProvider;
