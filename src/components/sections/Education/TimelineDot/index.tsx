import Box from 'components/primitives/Box';
import React from 'react';

const TimelineDot: React.FC = () => {
  return (
    <Box
      backgroundColor="background"
      border="4px solid"
      borderColor="secondary"
      borderRadius="50%"
      boxSizing="border-box"
      display={{ _: 'none', tablet: 'block' }}
      height={19}
      transition="background-color 500ms ease"
      width={19}
      willChange="background-color"
    />
  );
};

TimelineDot.displayName = 'TimelineDot';

export default TimelineDot;
