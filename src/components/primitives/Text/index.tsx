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
      textDecoration: true,
      textTransform: true,
      whiteSpace: true,
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
      textDecoration?: CSSProperties['textDecoration'];
      textTransform?: CSSProperties['textTransform'];
      whiteSpace?: CSSProperties['whiteSpace'];
    }
>;
export default Text;
