import React, { FunctionComponent, MouseEvent, useEffect } from 'react';
import useScreenOrientation from '../../../../hooks/useScreenOrientation';
import FlexBox from '../../../primitives/FlexBox';
import ActionButton from './ActionButton';

const Actions: FunctionComponent<ActionsProps> = ({
  actions,
  onMouseEnter,
  onMouseLeave,
  onOrientationChange,
  opened,
}) => {
  const orientation = useScreenOrientation();
  let delayStart = opened ? actions.length * 25 + 25 : 0;
  const isPortrait = orientation === 'portrait' || (typeof screen !== 'undefined' && screen.height >= 616);
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
      position="absolute"
      right={isPortrait ? 0 : 64}
      width={isPortrait ? '100%' : 'auto'}
    >
      {actions.map(action => (
        <ActionButton
          Icon={action.Icon}
          key={action.title}
          label={action.title}
          marginBottom={isPortrait ? 1 : 0}
          marginRight={isPortrait ? 0 : 1}
          opened={opened}
          openingDelayInMs={opened ? (delayStart -= 25) : (delayStart += 25)}
          to={action.ref}
        />
      ))}
    </FlexBox>
  );
};

Actions.displayName = 'Actions';

export type ActionsProps = {
  actions: Models.Action[];
  onMouseEnter: (e: MouseEvent<HTMLElement>) => void;
  onMouseLeave: (e: MouseEvent<HTMLElement>) => void;
  onOrientationChange: () => void;
  opened: boolean;
};
export default Actions;
