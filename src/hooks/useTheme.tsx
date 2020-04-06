import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Theme } from '../theme';

/**
 * Returns theme retrieved from context.
 */
function useTheme() {
  const theme = useContext<Theme>(ThemeContext);
  return theme;
}

export default useTheme;
