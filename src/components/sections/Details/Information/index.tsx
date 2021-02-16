import Label from '@common/Label';
import FlexBox from '@primitives/FlexBox';
import Text from '@primitives/Text';
import React, { CSSProperties } from 'react';
import { ResponsiveValue } from 'styled-system';

const Information: React.FC<InformationProps> = ({ items, order }) => {
  return (
    <FlexBox
      flex={1}
      flexDirection="column"
      height="100%"
      justifyContent="center"
      marginY={3}
      minWidth={224}
      order={order}
      textAlign={{ _: 'center', tablet: 'left' }}
    >
      {items
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((item, index) => (
          <FlexBox key={item.label} flexDirection="column" marginBottom={index !== items.length - 1 && 24}>
            <Label fontSize={16} title={item.label} />
            <Text color="primary" fontSize={22} fontWeight="bold" lineHeight="16px" textTransform="uppercase">
              {item.value}
            </Text>
          </FlexBox>
        ))}
    </FlexBox>
  );
};

Information.displayName = 'Information';

export type InformationProps = {
  items: Models.PersonalInformation[];
  order?: ResponsiveValue<CSSProperties['order']>;
};
export default Information;
