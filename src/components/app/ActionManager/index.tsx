import React, { FunctionComponent, MouseEvent, useCallback, useRef, useState } from 'react';
import Button from '../../common/Button';
import Box from '../../primitives/Box';
import MenuIcon from '../../svg/Menu';
import Actions from './Actions';

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

const ActionManager: FunctionComponent<ActionManagerProps> = ({ sections, position }) => {
  const actionsRef = useRef<HTMLDivElement>();
  const buttonRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [opened, setOpened] = useState(false);
  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);
  const handleMouseLeave = useCallback((e: MouseEvent<HTMLElement>) => {
    if (e.relatedTarget !== actionsRef.current && e.relatedTarget !== buttonRef.current) {
      setHovered(false);
    }
  }, []);
  const handleOpen = useCallback(() => {
    setOpened(!opened);
  }, [opened]);
  const handleCloseMenu = () => setOpened(false);
  const positioning = positionMapping[position];
  return (
    <Box height={64} position="fixed" print={false} width={64} zIndex={1} {...positioning}>
      <Actions
        sections={sections}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onOrientationChange={handleCloseMenu}
        opened={opened}
      />
      <Button
        animation={hovered || opened ? 'none' : 'pulse 1.5s infinite'}
        backgroundColor="secondary"
        borderRadius="50%"
        height="100%"
        onClick={handleOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={buttonRef}
        variant="cursor-only"
        width="100%"
      >
        <MenuIcon />
      </Button>
    </Box>
  );
};

ActionManager.displayName = 'ActionManager';

type ActionManagerProps = {
  position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  sections: Models.Section[];
};
export default ActionManager;
