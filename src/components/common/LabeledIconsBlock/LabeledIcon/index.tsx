import Anchor from '@common/Anchor';
import FlexBox, { FlexBoxProps } from '@primitives/FlexBox';
import Text from '@primitives/Text';
import React from 'react';

const LabeledIcon: React.FC<LabeledIconProps> = ({ children, link, name, ...rest }) => {
  return (
    <FlexBox alignItems="center" flexDirection="column" justifyContent="center" {...rest}>
      {link ? (
        <Anchor aria-label={`Go to ${link}`} external height={48} href={link}>
          {children}
        </Anchor>
      ) : (
        children
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
