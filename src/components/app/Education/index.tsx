import { graphql, useStaticQuery } from 'gatsby';
import React, { forwardRef } from 'react';
import Layout from '../../common/Layout';
import FlexBox from '../../primitives/FlexBox';
import Text from '../../primitives/Text';
import Degree from './Degree';
import TimelineDot from './TimelineDot';
import TimelineLine from './TimelineLine';

const Education = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    degreeNodes: { nodes: education },
  } = useStaticQuery<GraphQL.EducationData>(graphql`
    query EducationData {
      degreeNodes: allEducationJson {
        nodes {
          city
          countryCode
          issueDate
          name
          school
        }
      }
    }
  `);
  return (
    <Layout.Section ref={ref} title="education">
      <Layout.Content columnDirection="column-reverse">
        {education
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
              <Text color="secondary" fontSize={16} fontWeight="bold">
                {degree.issueDate.substring(0, 4)}
              </Text>
              <TimelineDot />
              {index !== 0 && (
                <TimelineLine>
                  <line x1="0%" x2="50%" y1="27%" y2="27%" />
                </TimelineLine>
              )}
              {index !== education.length - 1 && (
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
