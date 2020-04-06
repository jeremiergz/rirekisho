import Img, { FixedObject } from 'gatsby-image';
import React, { FunctionComponent } from 'react';
import Box from '../../primitives/Box';
import FlexBox, { FlexBoxProps } from '../../primitives/FlexBox';
import Text from '../../primitives/Text';
import Anchor from '../Anchor';

const LabeledIcon: FunctionComponent<LabeledIconProps> = ({ img, link, name, ...rest }) => {
  return (
    <FlexBox alignItems="center" flexDirection="column" justifyContent="center" {...rest}>
      <Anchor external height={48} href={link}>
        <Box width={48}>
          <Img fixed={img} />
        </Box>
      </Anchor>
      <Text color="text" fontSize={12} fontWeight="bold">
        {name}
      </Text>
    </FlexBox>
  );
};

LabeledIcon.displayName = 'LabeledIcon';

export type LabeledIconProps = FlexBoxProps &
  Omit<Models.LabeledItem, 'img' | 'sortOrder'> & {
    img: FixedObject;
  };
export default LabeledIcon;
