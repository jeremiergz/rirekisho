import FlexBox from 'components/primitives/FlexBox';
import useScreenOrientation from 'hooks/useScreenOrientation';
import React, { MouseEvent, useEffect } from 'react';
import ActionButton from './ActionButton';

const Actions: React.FC<ActionsProps> = ({ onMouseEnter, onMouseLeave, onOrientationChange, opened, sections }) => {
  const orientation = useScreenOrientation();
  const isPortrait = orientation === 'portrait' || (typeof screen !== 'undefined' && screen.height >= 616);
  let delayStart = opened ? sections.length * 25 + 25 : 0;
  useEffect(() => {
    window.addEventListener('orientationchange', onOrientationChange);
    return () => {
      window.removeEventListener('orientationchange', onOrientationChange);
    };
  }, []);
  return (
    <FlexBox
      alignItems="center"
      bottom={isPortrait ? 64 : 0}
      flexDirection={isPortrait ? 'column' : 'row'}
      height={isPortrait ? 'auto' : '100%'}
      justifyContent="center"
      left={isPortrait ? 0 : 'unset'}
      marginBottom={isPortrait ? 2 : 0}
      marginRight={isPortrait ? 0 : 2}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      pointerEvents={opened ? 'all' : 'none'}
      position="absolute"
      right={isPortrait ? 0 : 64}
      width={isPortrait ? '100%' : 'auto'}
    >
      {sections.map(section => (
        <ActionButton
          Icon={section.Icon}
          key={section.title}
          label={section.title}
          marginBottom={isPortrait ? 1 : 0}
          marginRight={isPortrait ? 0 : 1}
          opened={opened}
          openingDelayInMs={opened ? (delayStart -= 25) : (delayStart += 25)}
          to={section.ref}
        />
      ))}
    </FlexBox>
  );
};

Actions.displayName = 'Actions';

export type ActionsProps = {
  onMouseEnter: (e: MouseEvent<HTMLElement>) => void;
  onMouseLeave: (e: MouseEvent<HTMLElement>) => void;
  onOrientationChange: () => void;
  opened: boolean;
  sections: Models.Section[];
};
export default Actions;
