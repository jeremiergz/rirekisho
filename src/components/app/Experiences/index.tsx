import { graphql, useStaticQuery } from 'gatsby';
import React, { forwardRef } from 'react';
import Layout from '../../common/Layout';
import ExperienceBlock from './ExperienceBlock';
import Grid from '../../primitives/Grid';

const Experiences = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    xpNodes: { nodes: experiences },
  } = useStaticQuery<GraphQL.ExperiencesData>(graphql`
    query ExperiencesData {
      xpNodes: allExperiencesJson {
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
    <Layout.Section ref={ref} title="education">
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

Experiences.displayName = 'Experiences';

export default Experiences;
