import React, { forwardRef } from 'react';
import useScreenOrientation from '../../../../../../hooks/useScreenOrientation';
import FlexBox, { FlexBoxProps } from '../../../../../primitives/FlexBox';
import BiColoredTitle from '../../../../BiColoredTitle';

type StyleMapping = {
  landscape: (hovered: boolean) => Record<string, number | string>;
  portrait: (hovered: boolean) => Record<string, number | string>;
};

const stylesMapping: StyleMapping = {
  landscape: (hovered: boolean) => ({
    borderTopLeftRadius: '24px',
    borderTopRightRadius: '24px',
    bottom: '24px',
    height: hovered ? '104px' : '0',
    padding: hovered ? '16px 0 32px 0' : '0',
    right: 0,
    transition: hovered ? 'padding 250ms ease 500ms, height 250ms ease 500ms' : 'padding 250ms ease, height 250ms ease',
    width: '46px',
    writingMode: 'vertical-rl',
  }),
  portrait: (hovered: boolean) => ({
    borderBottomLeftRadius: '24px',
    borderTopLeftRadius: '24px',
    bottom: 0,
    padding: hovered ? '0 32px 0 16px' : '0',
    right: '24px',
    top: 0,
    transition: hovered ? 'padding 250ms ease 500ms, width 250ms ease 500ms' : 'padding 250ms ease, width 250ms ease',
    width: hovered ? '104px' : '0',
  }),
};

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(({ hovered, label, ...rest }, ref) => {
  const orientation = useScreenOrientation();
  const isPortrait = orientation === 'portrait' || (typeof screen !== 'undefined' && screen.height >= 616);
  const style = stylesMapping[isPortrait ? 'portrait' : 'landscape'](hovered);
  return (
    <FlexBox
      alignItems="center"
      backgroundColor="white"
      border="1px solid"
      borderColor="secondary"
      cursor="pointer"
      overflow="hidden"
      position="absolute"
      ref={ref}
      zIndex={-1}
      {...style}
      {...rest}
    >
      <BiColoredTitle
        fontSize={18}
        marginRight="2px" // Hack for a better vertical center align
        title={label}
        transform={isPortrait ? 'none' : 'rotate3d(0, 0, 1, -180deg)'}
        variant="no-border"
      />
    </FlexBox>
  );
});

Tooltip.displayName = 'Tooltip';

export type TooltipProps = FlexBoxProps & {
  hovered: boolean;
  label: string;
};
export default Tooltip;
