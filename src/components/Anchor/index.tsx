import Box, { BoxProps } from 'components/primitives/Box';
import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

const A = styled(Box)`
  color: inherit;
  text-decoration: none;
  transition: color 100ms ease-in-out;
  .gatsby-image-wrapper {
    transition: filter 100ms ease-in-out;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    .gatsby-image-wrapper {
      filter: brightness(0.75);
    }
  }
  ${variant({
    variants: {
      underlined: {
        textDecoration: 'underline',
      },
    },
  })}
`;

const Anchor: React.FC<AnchorProps> = ({ children, external, variant, ...rest }) => {
  const target = external ? '_blank' : '_self';
  return (
    <A as="a" fontWeight="semi-bold" rel="noopener noreferrer" target={target} {...rest}>
      {children}
    </A>
  );
};

Anchor.displayName = 'Anchor';

export type AnchorProps = BoxProps & {
  download?: boolean;
  external?: boolean;
  href?: string;
  target?: string;
  variant?: 'underlined';
};
export default Anchor;
