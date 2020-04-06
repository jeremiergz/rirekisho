import React, { FunctionComponent } from 'react';
import useTheme from '../../../../hooks/useTheme';
import Box from '../../../primitives/Box';

const TimelineLine: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      as="svg"
      display={({ _: 'none', tablet: 'block' } as unknown) as string}
      left={0}
      position="absolute"
      stroke={theme.colors.primary}
      strokeWidth={7}
      top={-9}
      width="100%"
      zIndex={-1}
    >
      {children}
    </Box>
  );
};

TimelineLine.displayName = 'TimelineLine';

export default TimelineLine;
