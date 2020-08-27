import Box, { BoxProps } from 'components/primitives/Box';
import React from 'react';

const Bubble: React.FC<BubbleProps> = ({ empty, ...rest }) => {
  return (
    <Box
      as="span"
      backgroundColor={empty ? 'subtitle' : 'primary'}
      borderRadius="50%"
      height={16}
      transition="background-color 500ms ease"
      width={16}
      willChange="background-color"
      {...rest}
    />
  );
};

export type BubbleProps = BoxProps & {
  empty?: boolean;
};
export default Bubble;
