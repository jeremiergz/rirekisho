import React, { FunctionComponent } from 'react';
import Box, { BoxProps } from '../Box';

const FlexBox: FunctionComponent<FlexBoxProps> = ({ children, ...rest }) => {
  return (
    <Box display="flex" {...rest}>
      {children}
    </Box>
  );
};

FlexBox.displayName = 'FlexBox';

export type FlexBoxProps = BoxProps;
export default FlexBox;
