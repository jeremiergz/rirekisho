import Box from '@primitives/Box';
import FlexBox from '@primitives/FlexBox';
import Text from '@primitives/Text';
import React from 'react';

const Detail: React.FC<DetailProps> = ({ details, emphasize, information, label }) => {
  return (
    <FlexBox marginBottom={1}>
      <Text color="body1" fontWeight="bold" minWidth={72}>
        {label}:
      </Text>
      <Box fontWeight="bolder">
        {information && <Text color="body1">{information} | </Text>}
        <Text color={emphasize ? 'secondary' : 'body1'} fontStyle="italic">
          {details}
        </Text>
      </Box>
    </FlexBox>
  );
};

Detail.displayName = 'Detail';

export type DetailProps = {
  details: string;
  emphasize?: boolean;
  information?: string;
  label: string;
};
export default Detail;
