import Box, { BoxProps } from 'components/primitives/Box';
import React from 'react';

const animation = 'flow 1.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)';

const Dot: React.FC<DotProps> = ({ delayInMS = 0, ...rest }) => {
  return (
    <Box
      animation={`${animation} ${delayInMS}ms infinite both`}
      backgroundColor="text"
      borderRadius="50%"
      height={20}
      width={20}
      willChange="background-color"
      {...rest}
    />
  );
};

export type DotProps = BoxProps & {
  delayInMS?: number;
};
export default Dot;
