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
      cursor: true,
      boxSizing: true,
      pointerEvents: true,
      transform: true,
      transformOrigin: true,
      transition: true,
      writingMode: true,
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
      cursor?: CSSProperties['cursor'];
      boxSizing?: CSSProperties['boxSizing'];
      pointerEvents?: CSSProperties['pointerEvents'];
      transform?: CSSProperties['transform'];
      transformOrigin?: CSSProperties['transformOrigin'];
      transition?: CSSProperties['transition'];
      writingMode?: CSSProperties['writingMode'];
    }
>;
export default Box;
