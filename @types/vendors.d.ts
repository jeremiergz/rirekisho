import { Theme } from '@providers/ThemeProvider';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
