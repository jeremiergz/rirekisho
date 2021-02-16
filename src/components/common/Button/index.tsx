import { CSSProperties } from 'react';
import styled from 'styled-components';
import {
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
  variant,
} from 'styled-system';

const Button = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  outline: none;
  padding: ${({ padding }) => (padding && padding.toString()) || 0};
  text-decoration: none;
  transition: filter ease 125ms;
  :hover {
    filter: brightness(0.75);
  }
  ${variant({
    variants: {
      'cursor-only': {
        alignItems: 'center',
        display: 'flex',
        fontFamily: 'inherit',
        fontSize: '100%',
        fontWeight: 'inherit',
        justifyContent: 'center',
        '&:hover': {
          filter: 'brightness(0.75)',
        },
      },
      outlined: {
        alignItems: 'center',
        border: '1px solid grey',
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        paddingX: 2,
        paddingY: 1,
      },
    },
  })}
  ${compose(
    color,
    flexbox,
    layout,
    position,
    space,
    system({
      cursor: true,
      pointerEvents: true,
      transform: true,
      transformOrigin: true,
      transition: true,
      willChange: true,
    }),
  )}
`;

Button.displayName = 'Button';
Button.defaultProps = {
  as: 'button',
  backgroundColor: 'inherit',
};

export type ButtonProps = ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    cursor?: ResponsiveValue<CSSProperties['cursor']>;
    pointerEvents?: ResponsiveValue<CSSProperties['pointerEvents']>;
    transform?: ResponsiveValue<CSSProperties['transform']>;
    transformOrigin?: ResponsiveValue<CSSProperties['transformOrigin']>;
    transition?: ResponsiveValue<CSSProperties['transition']>;
    willChange?: ResponsiveValue<CSSProperties['willChange']>;
  } & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    variant: 'cursor-only' | 'outlined';
  };
export default Button;
