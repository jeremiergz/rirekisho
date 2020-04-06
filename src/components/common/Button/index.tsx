import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import Box, { BoxProps } from '../../primitives/Box';

const BaseButton = styled(Box)<ButtonProps>`
  ${variant({
    variants: {
      'cursor-only': {
        alignItems: 'center',
        border: 0,
        cursor: 'pointer',
        display: 'flex',
        fontFamily: 'inherit',
        fontSize: '100%',
        fontWeight: 'inherit',
        justifyContent: 'center',
        outline: 'none',
        padding: 0,
        textDecoration: 'none',
      },
    },
  })}
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ backgroundColor, ...rest }, ref) => {
  return <BaseButton as="button" backgroundColor={backgroundColor || 'inherit'} ref={ref} {...rest} />;
});

Button.displayName = 'Button';

export type ButtonProps = BoxProps & {
  variant: 'cursor-only';
};
export default Button;
