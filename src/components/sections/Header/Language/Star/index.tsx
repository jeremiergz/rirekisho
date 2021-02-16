import Box, { BoxProps } from '@primitives/Box';
import React, { CSSProperties } from 'react';

const Star: React.FC<StarProps> = ({ emptyColor = 'grey', fillColor = 'white', type, ...rest }) => {
  const starsMapper = {
    empty: (
      <path
        d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
        fill={emptyColor}
      />
    ),
    full: (
      <path
        d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
        fill={fillColor}
      />
    ),
    half: (
      <g>
        <path
          d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
          fill={emptyColor}
        />
        <path d="M9.5,14.25L3.9160000000000004,17.186L4.982,10.968L0.465,6.564L6.708,5.657L9.5,0" fill={fillColor} />
      </g>
    ),
  };
  return (
    <Box height={16} {...rest}>
      <Box as="svg" height="100%" viewBox="0 0 18 18">
        {starsMapper[type]}
      </Box>
    </Box>
  );
};

Star.displayName = 'Star';

export type StarProps = BoxProps & {
  emptyColor?: CSSProperties['color'];
  fillColor?: CSSProperties['color'];
  type: 'empty' | 'full' | 'half';
};
export default Star;
