import { Theme } from 'components/providers/ThemeProvider';
import { CSSProperties, TimeHTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  display,
  DisplayProps,
  layout,
  LayoutProps,
  ResponsiveValue,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
  zIndex,
  ZIndexProps,
} from 'styled-system';

type TextKnownProps = BorderProps &
  ColorProps &
  DisplayProps &
  LayoutProps &
  SpaceProps &
  TimeHTMLAttributes<unknown> &
  TypographyProps &
  ZIndexProps & {
    cursor?: ResponsiveValue<CSSProperties['cursor']>;
    pointerEvents?: ResponsiveValue<CSSProperties['pointerEvents']>;
    textDecoration?: ResponsiveValue<CSSProperties['textDecoration']>;
    textTransform?: ResponsiveValue<CSSProperties['textTransform']>;
    transform?: ResponsiveValue<CSSProperties['transform']>;
    transformOrigin?: ResponsiveValue<CSSProperties['transformOrigin']>;
    whiteSpace?: ResponsiveValue<CSSProperties['whiteSpace']>;
    writingMode?: ResponsiveValue<CSSProperties['writingMode']>;
  };

const Text = styled.span<TextKnownProps>`
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.main};
  ${compose(
    border,
    color,
    display,
    layout,
    space,
    typography,
    zIndex,
    system({
      cursor: true,
      pointerEvents: true,
      textDecoration: true,
      textTransform: true,
      transform: true,
      transformOrigin: true,
      whiteSpace: true,
      writingMode: true,
    }),
  )}
`;

Text.displayName = 'Text';

export type TextProps = React.ComponentProps<typeof Text>;
export default Text;
