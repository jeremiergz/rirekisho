import React, { FunctionComponent } from 'react';
import Box, { BoxProps } from '../../../../primitives/Box';

const Bubble: FunctionComponent<BubbleProps> = ({ empty, ...rest }) => {
  return (
    <Box
      as="span"
      backgroundColor={empty ? 'lightgrey' : 'primary'}
      borderRadius="50%"
      height={16}
      width={16}
      {...rest}
    />
  );
};

export type BubbleProps = BoxProps & {
  empty?: boolean;
};
export default Bubble;
