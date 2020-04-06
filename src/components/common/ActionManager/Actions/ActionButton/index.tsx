import React, { ComponentType, HTMLAttributes, MouseEvent, RefObject, useRef, useState } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import useScreenOrientation from '../../../../../hooks/useScreenOrientation';
import theme from '../../../../../theme';
import Box, { BoxProps } from '../../../../primitives/Box';
import BiColoredTitle from '../../../BiColoredTitle';

type Props = HTMLAttributes<HTMLButtonElement> &
  BoxProps & {
    Icon: ComponentType;
    label: string;
    opened: boolean;
    openingDelayInMs: number;
    to: RefObject<HTMLElement> | 'top' | 'bottom';
  };

type State = {
  hovered: boolean;
  orientation: 'portrait' | 'landscape';
};

const ActionButton = styled(Box)<Partial<Props>>`
  position: relative;
  height: 48px;
  min-height: 48px;
  width: 48px;
  min-width: 48px;
  transition: opacity 100ms linear ${({ openingDelayInMs }) => openingDelayInMs}ms,
    transform 200ms linear ${({ openingDelayInMs }) => openingDelayInMs}ms, filter 250ms ease;
  ${({ opened }) => {
    let scale: FlattenSimpleInterpolation;
    if (opened) {
      scale = css`
        opacity: 1;
        transform: scale3d(1, 1, 1);
      `;
    } else {
      scale = css`
        opacity: 0;
        transform: scale3d(0, 0, 0);
      `;
    }
    return scale;
  }}
`;

const Button = styled.button<Partial<State>>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secondary};
  cursor: pointer;
  outline: none;
  border: none;
  transition: ${({ hovered }) => (hovered ? 'border-radius 250ms ease 500ms' : 'border-radius 250ms ease')};
  ${({ hovered, orientation }) =>
    hovered
      ? css`
          ${orientation === 'portrait' || (typeof screen !== 'undefined' && screen.height >= 616)
            ? css`
                border-top-right-radius: 50%;
                border-top-left-radius: 0;
                border-bottom-right-radius: 50%;
                border-bottom-left-radius: 0;
              `
            : css`
                border-top-right-radius: 0;
                border-top-left-radius: 0;
                border-bottom-right-radius: 50%;
                border-bottom-left-radius: 50%;
              `}
          filter: brightness(0.75);
        `
      : css`
          border-radius: 50%;
        `};
`;

const Tooltip = styled.div<Partial<State>>`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: -1;
  margin: auto;
  overflow: hidden;
  background-color: white;
  cursor: pointer;
  border: 1px solid ${theme.colors.secondary};
  ${({ hovered, orientation }) =>
    orientation === 'portrait' || (typeof screen !== 'undefined' && screen.height >= 616)
      ? css`
          top: 0;
          right: 24px;
          bottom: 0;
          width: ${hovered ? '104px' : '0'};
          border-top-left-radius: 24px;
          border-bottom-left-radius: 24px;
          padding: ${hovered ? '0 32px 0 16px' : '0'};
          transition: ${hovered
            ? 'padding 250ms ease 500ms, width 250ms ease 500ms'
            : 'padding 250ms ease, width 250ms ease'};
        `
      : css`
          writing-mode: vertical-lr;
          right: 0;
          height: ${hovered ? '104px' : '0'};
          width: 46px;
          bottom: 24px;
          border-top-right-radius: 24px;
          border-top-left-radius: 24px;
          padding: ${hovered ? '16px 0 32px 0' : '0'};
          transition: ${hovered
            ? 'padding 250ms ease 500ms, height 250ms ease 500ms'
            : 'padding 250ms ease, height 250ms ease'};
        `}
`;

// const TooltipLabel = styled(BiColoredTitle)<Partial<State>>`
//   ${({ orientation }) =>
//     orientation === 'portrait' || screen.height >= 616
//       ? css`
//           margin-bottom: 2px;
//         `
//       : css`
//           margin-bottom: 0;
//           margin-right: 2px; /* Hack to center align vertical text in div */
//           transform: rotate3d(0, 0, 1, 180deg);
//         `}
// `;

const ActionButtonComponent = (props: Props) => {
  const { Icon, label, opened, openingDelayInMs, to, ...rest } = props;
  const orientation = useScreenOrientation();
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
    if (target !== buttonRef.current && target !== tooltipRef.current) {
      setHovered(false);
    }
  };
  return (
    <ActionButton opened={opened} openingDelayInMs={openingDelayInMs} {...rest}>
      <Button
        hovered={hovered}
        onClick={handleActionClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        orientation={orientation}
        ref={buttonRef}
      >
        <Icon />
      </Button>
      <Tooltip
        hovered={hovered}
        onClick={handleActionClick}
        onMouseLeave={handleMouseLeave}
        orientation={orientation}
        ref={tooltipRef}
      >
        <BiColoredTitle fontSize={18} title={label} variant="no-border" />
      </Tooltip>
    </ActionButton>
  );
};

ActionButtonComponent.displayName = 'ActionButton';

export default ActionButtonComponent;
