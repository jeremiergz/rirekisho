import Box from 'components/primitives/Box';
import FlexBox from 'components/primitives/FlexBox';
import { TextProps } from 'components/primitives/Text';
import React, { useEffect, useState } from 'react';
import Dot from './Dot';

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
    isDisplayed && (
      <>
        <FlexBox
          color="text"
          justifyContent="center"
          left={0}
          opacity={loading ? 1 : 0}
          position="fixed"
          right={0}
          top="50%"
          transition={`opacity ${transitionDuration}ms ease ${transitionDelay}ms`}
          willChange="opacity"
          zIndex={1100}
        >
          <Dot />
          <Dot delayInMS={150} marginLeft={1} />
          <Dot delayInMS={300} marginLeft={1} />
        </FlexBox>
        <Box
          backdropFilter="blur(8px)"
          bottom={0}
          left={0}
          opacity={loading ? 1 : 0}
          position="absolute"
          right={0}
          top={0}
          transition={`opacity ${transitionDuration}ms ease ${transitionDelay}ms`}
          willChange="opacity"
          zIndex={1000}
        />
      </>
    )
  );
};

LoadingOverlay.displayName = 'LoadingOverlay';

export type LoadingOverlayProps = TextProps & {
  loading: boolean;
};
export default LoadingOverlay;
