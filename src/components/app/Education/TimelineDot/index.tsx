import React, { FunctionComponent } from 'react';
import Box from '../../../primitives/Box';

const TimelineDot: FunctionComponent = () => {
  return (
    <Box
      backgroundColor="white"
      border="4px solid"
      borderColor="secondary"
      borderRadius="50%"
      boxSizing="border-box"
      display={{ _: 'none', tablet: 'block' }}
      height={19}
      width={19}
    />
  );
};

TimelineDot.displayName = 'TimelineDot';

export default TimelineDot;
