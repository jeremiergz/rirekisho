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
  grid,
  GridProps as StyledGridProps,
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
  variant,
  zIndex,
  ZIndexProps,
} from 'styled-system';

type GridKnownProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  StyledGridProps &
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
  } & {
    variant: 'container' | 'item';
  };

const Grid = styled.div<GridKnownProps>`
  ${compose(
    border,
    color,
    flexbox,
    grid,
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
  )};
  ${variant({
    variants: {
      container: {
        display: 'grid',
      },
      item: {
        display: 'flex',
      },
    },
  })}
`;

Grid.displayName = 'Grid';

export type GridProps = React.ComponentProps<typeof Grid>;
export default Grid;
