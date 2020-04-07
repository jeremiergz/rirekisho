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
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
  zIndex,
  ZIndexProps,
} from 'styled-system';

const Text = styled.span<TextProps>`
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

export type TextProps = StyledSystemProps<
  'span',
  BorderProps &
    ColorProps &
    DisplayProps &
    LayoutProps &
    SpaceProps &
    TimeHTMLAttributes<unknown> &
    TypographyProps &
    ZIndexProps & {
      cursor?: CSSProperties['cursor'];
      pointerEvents?: CSSProperties['pointerEvents'];
      textDecoration?: CSSProperties['textDecoration'];
      textTransform?: CSSProperties['textTransform'];
      transform?: CSSProperties['transform'];
      transformOrigin?: CSSProperties['transformOrigin'];
      whiteSpace?: CSSProperties['whiteSpace'];
      writingMode?: CSSProperties['writingMode'];
    }
>;
export default Text;
