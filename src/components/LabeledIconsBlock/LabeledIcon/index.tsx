import Anchor from 'components/Anchor';
import Box from 'components/primitives/Box';
import FlexBox, { FlexBoxProps } from 'components/primitives/FlexBox';
import Text from 'components/primitives/Text';
import React from 'react';

const LabeledIcon: React.FC<LabeledIconProps> = ({ children, link, name, ...rest }) => {
  return (
    <FlexBox alignItems="center" flexDirection="column" justifyContent="center" {...rest}>
      {link ? (
        <Anchor aria-label={`Go to ${link}`} external height={48} href={link}>
          <Box width={48}>{children}</Box>
        </Anchor>
      ) : (
        <Box height={48} width={48}>
          {children}
        </Box>
      )}
      <Text color="text" fontSize={12} fontWeight="bold">
        {name}
      </Text>
    </FlexBox>
  );
};

LabeledIcon.displayName = 'LabeledIcon';

export type LabeledIconProps = FlexBoxProps & Omit<Models.LabeledItem, 'img' | 'sortOrder'>;
export default LabeledIcon;
