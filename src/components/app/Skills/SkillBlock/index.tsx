import React, { FunctionComponent } from 'react';
import Label from '../../../common/Label';
import Box, { BoxProps } from '../../../primitives/Box';
import FlexBox from '../../../primitives/FlexBox';
import Text from '../../../primitives/Text';
import Bubble from './Bubble';

const gradeBasis = 10;
const maxBubblesNumber = 7;

const SkillBlock: FunctionComponent<SkillBlockProps> = ({ items, title, ...rest }) => {
  const factor = gradeBasis / maxBubblesNumber;
  return (
    <Box marginBottom={4} maxWidth={{ _: 393, tablet: 356 }} width="100%" {...rest}>
      <Label title={title} />
      {items
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map(item => {
          const grade = Math.ceil(item.proficiencyLevel * factor);
          const fullBubblesNumber = [...Array(item.proficiencyLevel).keys()];
          const emptyBubblesNumber = [...Array(maxBubblesNumber - item.proficiencyLevel).keys()];
          return (
            <FlexBox alignItems="center" justifyContent="space-between" key={item.name} marginBottom={3}>
              <Text fontSize={18} fontWeight="bold">
                {item.name}
              </Text>
              <Text
                color="secondary"
                display={{ _: 'block', mobileL: 'none' }}
                fontSize={22}
                fontWeight="bold"
                lineHeight="16px"
              >
                {grade}/{gradeBasis}
              </Text>
              <FlexBox alignItems="center" display={{ _: 'none', mobileL: 'flex' }}>
                {fullBubblesNumber.map((bubble, index) => (
                  <Bubble key={bubble} marginRight={index !== maxBubblesNumber - 1 && 2} />
                ))}
                {emptyBubblesNumber.map((bubble, index) => (
                  <Bubble empty key={bubble} marginRight={index !== emptyBubblesNumber.length - 1 && 2} />
                ))}
              </FlexBox>
            </FlexBox>
          );
        })}
    </Box>
  );
};

SkillBlock.displayName = 'SkillBlock';

export type SkillBlockProps = BoxProps & {
  items: Models.Skill[];
  title: string;
};
export default SkillBlock;
