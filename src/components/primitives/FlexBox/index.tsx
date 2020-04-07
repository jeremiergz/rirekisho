import React, { forwardRef } from 'react';
import Box, { BoxProps } from '../Box';

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
