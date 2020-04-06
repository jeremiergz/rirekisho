import React, { FunctionComponent } from 'react';
import Text, { TextProps } from '../../primitives/Text';

const Label: FunctionComponent<LabelProps> = ({ title }) => {
  return (
    <Text as="label" color="secondary" fontSize={14} fontWeight="bold" marginBottom={2} textTransform="uppercase">
      {title}
    </Text>
  );
};

Label.displayName = 'Label';

export type LabelProps = TextProps & {
  title: string;
};
export default Label;
