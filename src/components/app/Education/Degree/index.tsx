import React, { FunctionComponent } from 'react';
import Text from '../../../primitives/Text';

const Degree: FunctionComponent<DegreeProps> = ({ city, countryCode, name, school }) => {
  return (
    <>
      <Text
        color="primary"
        fontSize={14}
        fontWeight="bold"
        marginY={1}
        maxWidth={{ _: 'unset', tablet: '75%' }}
        textAlign="center"
        textTransform="uppercase"
      >
        {name}
      </Text>
      <Text color="text" fontSize={12} fontWeight="bold" maxWidth="80%" textAlign="center">
        {school}
      </Text>
      <Text color="text" fontSize={10} fontWeight="bold" maxWidth="80%" textAlign="center">
        {city.toUpperCase()} - {countryCode}
      </Text>
    </>
  );
};

Degree.displayName = 'Degree';

export type DegreeProps = {
  city: string;
  countryCode: string;
  name: string;
  school: string;
};
export default Degree;
