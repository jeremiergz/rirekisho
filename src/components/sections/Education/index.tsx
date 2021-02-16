import Layout from '@common/Layout';
import FlexBox from '@primitives/FlexBox';
import Text from '@primitives/Text';
import { useData } from '@providers/DataProvider';
import React, { forwardRef } from 'react';
import Degree from './Degree';
import TimelineDot from './TimelineDot';
import TimelineLine from './TimelineLine';

const Education = forwardRef<HTMLDivElement>((_, ref) => {
  const { educationData } = useData();
  return (
    <Layout.Section ref={ref} title="education">
      <Layout.Content columnDirection="column-reverse">
        {educationData
          .sort((a, b) => a.issueDate.localeCompare(b.issueDate))
          .map((degree, index) => (
            <FlexBox
              alignItems="center"
              flex={1}
              flexDirection="column"
              key={degree.name}
              marginBottom={{ _: 4, tablet: 0 }}
              position="relative"
            >
              <Text color="secondary" fontSize={{ _: 20, tablet: 16 }} fontWeight="bold">
                {degree.issueDate.substring(0, 4)}
              </Text>
              <TimelineDot />
              {index !== 0 && (
                <TimelineLine>
                  <line x1="0%" x2="50%" y1="27%" y2="27%" />
                </TimelineLine>
              )}
              {index !== educationData.length - 1 && (
                <TimelineLine>
                  <line x1="50%" x2="100%" y1="27%" y2="27%" />
                </TimelineLine>
              )}
              <Degree city={degree.city} countryCode={degree.countryCode} name={degree.name} school={degree.school} />
            </FlexBox>
          ))}
      </Layout.Content>
    </Layout.Section>
  );
});

Education.displayName = 'Education';

export default Education;
