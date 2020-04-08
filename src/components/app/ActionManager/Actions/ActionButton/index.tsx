import React, { ComponentType, FunctionComponent, MouseEvent, RefObject, useRef, useState } from 'react';
import useScreenOrientation from '../../../../../hooks/useScreenOrientation';
import Button from '../../../../common/Button';
import Box, { BoxProps } from '../../../../primitives/Box';
import Tooltip from './Tooltip';

const ActionButton: FunctionComponent<ActionButtonProps> = ({ Icon, label, opened, openingDelayInMs, to, ...rest }) => {
  const orientation = useScreenOrientation();
  const isPortrait = orientation === 'portrait' || (typeof screen !== 'undefined' && screen.height >= 616);
  const handleActionClick = () => {
    const screenHeights = {
      top: 0,
      bottom: document.body.scrollHeight,
    };
    if (typeof to === 'string') {
      window.scrollTo({ behavior: 'smooth', top: screenHeights[to] });
    } else {
      to.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  const buttonRef = useRef<HTMLButtonElement>();
  const tooltipRef = useRef<HTMLDivElement>();
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
    const target = e.relatedTarget;
    const isOutsideTooltip = target !== buttonRef.current && !tooltipRef.current.contains(target as Node);
    if (isOutsideTooltip) setHovered(false);
  };
  return (
    <Box
      height="48px"
      minHeight="48px"
      minWidth="48px"
      opacity={opened ? 1 : 0}
      position="relative"
      transform={opened ? 'scale3d(1, 1, 1)' : 'scale3d(0, 0, 0)'}
      transition={[
        `opacity 100ms linear ${openingDelayInMs}ms`,
        `transform 200ms linear ${openingDelayInMs}ms`,
        'filter 250ms ease',
      ].join(', ')}
      width="48px"
      {...rest}
    >
      <Button
        backgroundColor="secondary"
        borderBottomLeftRadius={hovered ? (isPortrait ? 0 : '50%') : '50%'}
        borderBottomRightRadius="50%"
        borderTopLeftRadius={hovered ? 0 : '50%'}
        borderTopRightRadius={hovered ? (isPortrait ? '50%' : 0) : '50%'}
        height="100%"
        onClick={handleActionClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={buttonRef}
        transition={hovered ? 'border-radius 250ms ease 500ms' : 'border-radius 250ms ease'}
        variant="cursor-only"
        width="100%"
      >
        <Icon />
      </Button>
      <Tooltip
        label={label}
        hovered={hovered}
        onClick={handleActionClick}
        onMouseLeave={handleMouseLeave}
        ref={tooltipRef}
      />
    </Box>
  );
};

ActionButton.displayName = 'ActionButton';

export type ActionButtonProps = BoxProps & {
  Icon: ComponentType;
  label: string;
  opened: boolean;
  openingDelayInMs: number;
  to: RefObject<HTMLElement> | 'top' | 'bottom';
};

export default ActionButton;
