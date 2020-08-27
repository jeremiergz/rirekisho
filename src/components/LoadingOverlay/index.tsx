import Box from 'components/primitives/Box';
import FlexBox from 'components/primitives/FlexBox';
import Text, { TextProps } from 'components/primitives/Text';
import React, { useEffect, useState } from 'react';

const transitionDelay = 1000;
const transitionDuration = 250;

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ loading }) => {
  const [isDisplayed, setIsDisplayed] = useState(true);
  useEffect(() => {
    let timeout: number;
    if (!loading) {
      timeout = setTimeout(() => setIsDisplayed(false), transitionDelay + transitionDuration);
    }
    return () => clearTimeout(timeout);
  }, [loading]);
  return (
    <FlexBox
      backdropFilter="blur(8px)"
      bottom={0}
      justifyContent="center"
      opacity={loading ? 1 : 0}
      position="absolute"
      top={0}
      transition={`opacity ${transitionDuration}ms ease ${transitionDelay}ms`}
      width="100%"
      willChange="opacity"
      zIndex={isDisplayed ? 1000 : -1000}
    >
      <FlexBox alignItems="center" color="text" height="100vh" justifyContent="center" width="100%">
        <Box
          animation="spin 1s infinite"
          borderColor="text"
          borderTop="4px solid"
          borderRadius="50%"
          margin={128}
          height={128}
          position="absolute"
          transition={`color ${transitionDuration / 2}ms ease`}
          width={128}
          willChange="color"
        />
        <Text fontSize={20} fontWeight="bold" textTransform="uppercase">
          Loading
        </Text>
      </FlexBox>
    </FlexBox>
  );
};

LoadingOverlay.displayName = 'LoadingOverlay';

export type LoadingOverlayProps = TextProps & {
  loading: boolean;
};
export default LoadingOverlay;
