import { CSSProperties, TimeHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
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
  ResponsiveValue,
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
      backdropFilter: true,
      cursor: true,
      boxShadow: true,
      boxSizing: true,
      pointerEvents: true,
      transform: true,
      transformOrigin: true,
      transition: true,
      willChange: true,
      writingMode: true,
    }),
  )}
  @media print {
    ${({ print = true }) =>
      print
        ? null
        : css`
            display: none;
          `}
  }
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
      animation?: ResponsiveValue<CSSProperties['animation']>;
      backdropFilter?: ResponsiveValue<CSSProperties['backdropFilter']>;
      cursor?: ResponsiveValue<CSSProperties['cursor']>;
      boxShadow?: ResponsiveValue<CSSProperties['boxShadow']>;
      boxSizing?: ResponsiveValue<CSSProperties['boxSizing']>;
      pointerEvents?: ResponsiveValue<CSSProperties['pointerEvents']>;
      print?: boolean;
      transform?: ResponsiveValue<CSSProperties['transform']>;
      transformOrigin?: ResponsiveValue<CSSProperties['transformOrigin']>;
      transition?: ResponsiveValue<CSSProperties['transition']>;
      willChange?: ResponsiveValue<CSSProperties['willChange']>;
      writingMode?: ResponsiveValue<CSSProperties['writingMode']>;
    }
>;
export default Box;
