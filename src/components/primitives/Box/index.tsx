import { CSSProperties, TimeHTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
  zIndex,
  ZIndexProps,
} from 'styled-system';

const Box = styled.div<BoxProps>`
  ${compose(
    border,
    color,
    flexbox,
    layout,
    position,
    space,
    typography,
    zIndex,
    system({
      animation: true,
      boxSizing: true,
      transition: true,
    }),
  )}
`;

Box.displayName = 'Box';

export type BoxProps = StyledSystemProps<
  'div',
  BorderProps &
    ColorProps &
    FlexboxProps &
    LayoutProps &
    PositionProps &
    SpaceProps &
    TimeHTMLAttributes<unknown> &
    TypographyProps &
    ZIndexProps & {
      animation?: CSSProperties['animation'];
      boxSizing?: CSSProperties['boxSizing'];
      transition?: CSSProperties['transition'];
    }
>;
export default Box;
