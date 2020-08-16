import Button from 'components/Button';
import Box, { BoxProps } from 'components/primitives/Box';
import MenuIcon from 'components/svg/Menu';
import React, { useRef, useState } from 'react';

const baseSpacing = '16px';
const positionMapping = {
  'bottom-left': {
    bottom: baseSpacing,
    left: baseSpacing,
  },
  'bottom-right': {
    bottom: baseSpacing,
    right: baseSpacing,
  },
  'top-left': {
    top: baseSpacing,
    left: baseSpacing,
  },
  'top-right': {
    top: baseSpacing,
    right: baseSpacing,
  },
};

const Fab: React.FC<FabProps> = ({ onClick, position, ...rest }) => {
  const buttonRef = useRef();
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleClick = (e: React.MouseEvent) => {
    if (typeof onClick === 'function') onClick(e);
  };
  const positioning = positionMapping[position];
  return (
    <Box height={64} position="fixed" print={false} width={64} zIndex={1} {...positioning} {...rest}>
      <Button
        animation={hovered ? 'none' : 'pulse 1.5s infinite'}
        backgroundColor="secondary"
        borderRadius="50%"
        height="100%"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={buttonRef}
        variant="cursor-only"
        width="100%"
      >
        <MenuIcon fill="white" height={24} width={24} />
      </Button>
    </Box>
  );
};

Fab.displayName = 'Fab';

export type FabProps = Omit<BoxProps, 'position'> & {
  onClick?: (event: React.MouseEvent) => void;
  position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
};
export default Fab;
