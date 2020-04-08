import { graphql, useStaticQuery } from 'gatsby';
import React, { forwardRef } from 'react';
import Layout from '../../common/Layout';
import ExperienceBlock from './ExperienceBlock';
import Grid from '../../primitives/Grid';

const Experience = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    experienceNodes: { nodes: experiences },
  } = useStaticQuery<GraphQL.ExperienceData>(graphql`
    query ExperienceData {
      experienceNodes: allExperiencesJson {
        nodes {
          company
          companySector
          endDate
          img
          projects {
            client
            clientSector
            description
            name
            tasks
            technologies
          }
          startDate
        }
      }
    }
  `);
  return (
    <Layout.Section ref={ref} title="experience">
      <Layout.Content columnDirection="column-reverse">
        <Grid gridColumnGap={{ _: 32, tablet: 64 }} gridTemplateColumns="auto auto" variant="container">
          {experiences
            .sort((a, b) => b.startDate.localeCompare(a.startDate))
            .map(item => (
              <ExperienceBlock key={item.startDate} gridColumn={{ _: 'span 2', laptopS: 'span 1' }} item={item} />
            ))}
        </Grid>
      </Layout.Content>
    </Layout.Section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
