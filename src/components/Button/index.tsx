import Box, { BoxProps } from 'components/primitives/Box';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

const BaseButton = styled(Box)<ButtonProps>`
  border: none;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  transition: filter ease 125ms;
  padding: ${({ padding }) => (padding && padding.toString()) || 0};
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
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ backgroundColor, ...rest }, ref) => {
  return <BaseButton as="button" backgroundColor={backgroundColor || 'inherit'} ref={ref} {...rest} />;
});

Button.displayName = 'Button';

export type ButtonProps = BoxProps & {
  variant: 'cursor-only' | 'outlined';
};
export default Button;
