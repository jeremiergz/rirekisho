import React, { forwardRef } from 'react';
import Box, { BoxProps } from '../../primitives/Box';
import Text from '../../primitives/Text';

const BiColoredTitle = forwardRef<HTMLDivElement, BiColoredTitleProps>(({ onClick, title, variant, ...rest }, ref) => {
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
      <Text color="secondary">{firstThreeChars}</Text>
      <Text color="primary">{remainingChars}</Text>
    </Box>
  );
});

BiColoredTitle.displayName = 'BiColoredTitle';

export type BiColoredTitleProps = BoxProps & {
  title: string;
  variant?: 'no-border';
};
export default BiColoredTitle;
