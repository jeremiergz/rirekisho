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

type FlexBoxKnownProps = BorderProps &
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
    contentVisibility?: ResponsiveValue<'auto' | 'hidden' | 'visible'>;
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
  };

const FlexBox = styled.div<FlexBoxKnownProps>`
  display: flex;
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
      contentVisibility: true,
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

FlexBox.displayName = 'FlexBox';

export type FlexBoxProps = React.ComponentProps<typeof FlexBox>;
export default FlexBox;
