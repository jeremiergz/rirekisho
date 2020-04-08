import React, { FunctionComponent } from 'react';
import Box from '../../../../../primitives/Box';
import FlexBox from '../../../../../primitives/FlexBox';
import Text from '../../../../../primitives/Text';

const Detail: FunctionComponent<DetailProps> = ({ details, emphasize, information, label }) => {
  return (
    <FlexBox marginBottom={1}>
      <Text fontWeight="bold" minWidth={72}>
        {label}:
      </Text>
      <Box fontWeight="bolder">
        {information && <Text>{information} | </Text>}
        <Text color={emphasize ? 'secondary' : 'normal'} fontStyle="italic">
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
