import Box from '@primitives/Box';
import FlexBox from '@primitives/FlexBox';
import Text from '@primitives/Text';
import React, { CSSProperties } from 'react';
import { ResponsiveValue } from 'styled-system';

const PortraitAndJobTitle: React.FC<PortraitAndJobTitleProps> = ({ jobTitle, order }) => {
  return (
    <FlexBox
      alignItems="center"
      flex={1}
      flexDirection="column"
      justifyContent="space-between"
      marginTop={-40}
      order={order}
    >
      <Box
        backgroundColor="background"
        borderRadius="50%"
        height={{ _: 184, laptopM: 224 }}
        minHeight={{ _: 184, laptopM: 224 }}
        position="relative"
        transition="background-color 500ms ease"
        width={{ _: 184, laptopM: 224 }}
        willChange="background-color"
      >
        <Box
          height={{ _: 152, laptopM: 192 }}
          left={0}
          margin="auto"
          position="absolute"
          right={0}
          top={16}
          width={{ _: 152, laptopM: 192 }}
        >
          <Box alt="portrait" as="img" height="100%" src="/images/portrait.png" width="100%" />
        </Box>
      </Box>
      <Text
        color="secondary"
        fontSize={40}
        fontWeight="bold"
        margin={{ _: '16px 0 16px 0', tablet: '0 -32px 0 -32px' }}
        textAlign="center"
      >
        {jobTitle}
      </Text>
    </FlexBox>
  );
};

PortraitAndJobTitle.displayName = 'PortraitAndJobTitle';

export type PortraitAndJobTitleProps = {
  jobTitle: string;
  order?: ResponsiveValue<CSSProperties['order']>;
};
export default PortraitAndJobTitle;
