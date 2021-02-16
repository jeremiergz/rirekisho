import Text, { TextProps } from '@primitives/Text';
import React from 'react';

const Label: React.FC<LabelProps> = ({ title }) => {
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
