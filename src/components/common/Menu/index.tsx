import BiColoredTitle from '@common/BiColoredTitle';
import Button from '@common/Button';
import useScrollThreshold from '@hooks/useScrollThreshold';
import { BoxProps } from '@primitives/Box';
import FlexBox from '@primitives/FlexBox';
import GoToIcon from '@svgs/icons/GoTo';
import React from 'react';

const Menu: React.FC<MenuProps> = ({ sections, ...rest }) => {
  const isAbove96px = useScrollThreshold(96);
  const isAbove168px = useScrollThreshold(168);

  const opacityStyle = { _: isAbove168px ? 100 : 0, tablet: isAbove96px ? 100 : 0 };
  const pointerEventsStyle = { _: isAbove168px ? 'auto' : 'none', tablet: isAbove96px ? 'auto' : 'none' };

  const handleScrollTo = (position: 'bottom' | 'top') => () => {
    window.scrollTo({ behavior: 'smooth', top: position === 'top' ? 0 : document.body.clientHeight });
  };
  return (
    <FlexBox
      alignItem="center"
      backgroundColor="primary"
      justifyContent="center"
      opacity={opacityStyle}
      pointerEvents={pointerEventsStyle}
      position="fixed"
      top={0}
      transition="opacity 125ms ease"
      width="100%"
      willChange="opacity"
      zIndex={100}
      {...rest}
    >
      <Button
        aria-label="Scroll to top"
        display={{ _: 'none', mobileM: 'flex' }}
        onClick={handleScrollTo('top')}
        padding={{ _: 1, tablet: 2 }}
        transform="rotate3d(1,0,0,180deg)"
        variant="cursor-only"
      >
        <GoToIcon fill="white" height={28} width={28} />
      </Button>
      {sections.map((s, i) => {
        const handleClick = () => {
          if (typeof s.ref !== 'string') {
            window.scrollTo({
              behavior: 'smooth',
              top: s.ref.current.offsetTop - 48,
            });
          }
        };
        return (
          <Button
            aria-label={`Scroll to ${s.title}`}
            key={s.title}
            marginLeft={i === 0 ? 0 : 1}
            marginRight={i === sections.length - 1 ? 0 : 1}
            onClick={handleClick}
            padding={2}
            variant="cursor-only"
          >
            <s.Icon fill="white" />
            <BiColoredTitle
              display={{ _: 'none', tablet: 'block' }}
              fontSize={18}
              marginLeft={1}
              secondaryColor="white"
              title={s.title}
              variant="no-border"
            />
          </Button>
        );
      })}
      <Button
        aria-label="Scroll to bottom"
        display={{ _: 'none', mobileM: 'flex' }}
        onClick={handleScrollTo('bottom')}
        padding={{ _: 1, tablet: 2 }}
        variant="cursor-only"
      >
        <GoToIcon fill="white" height={28} width={28} />
      </Button>
    </FlexBox>
  );
};

Menu.displayName = 'Menu';

export type MenuProps = BoxProps & {
  sections: Models.Section[];
};
export default Menu;
