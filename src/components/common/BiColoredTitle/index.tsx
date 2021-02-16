import Box, { BoxProps } from '@primitives/Box';
import Text from '@primitives/Text';
import React, { forwardRef } from 'react';

const BiColoredTitle = forwardRef<HTMLDivElement, BiColoredTitleProps>(
  ({ onClick, primaryColor = 'secondary', secondaryColor = 'primary', title, variant, ...rest }, ref) => {
    const firstThreeChars = title.substring(0, 3);
    const remainingChars = title.substring(3, title.length);
    return (
      <Box
        borderBottom={variant === 'no-border' ? 0 : '2px solid'}
        borderBottomColor="primary"
        fontSize={28}
        fontWeight="bold"
        marginBottom={variant === 'no-border' ? 0 : 24}
        onClick={onClick}
        ref={ref}
        textAlign={{ _: 'center', tablet: 'left' }}
        {...rest}
      >
        <Text color={primaryColor}>{firstThreeChars}</Text>
        <Text color={secondaryColor}>{remainingChars}</Text>
      </Box>
    );
  },
);

BiColoredTitle.displayName = 'BiColoredTitle';

export type BiColoredTitleProps = BoxProps & {
  primaryColor?: string;
  secondaryColor?: string;
  title: string;
  variant?: 'no-border';
};
export default BiColoredTitle;
