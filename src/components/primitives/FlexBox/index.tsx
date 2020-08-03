import Box, { BoxProps } from 'components/primitives/Box';
import React, { forwardRef } from 'react';

const FlexBox = forwardRef<HTMLDivElement, FlexBoxProps>(({ children, ...rest }, ref) => {
  return (
    <Box display="flex" ref={ref} {...rest}>
      {children}
    </Box>
  );
});

FlexBox.displayName = 'FlexBox';

export type FlexBoxProps = BoxProps;
export default FlexBox;
