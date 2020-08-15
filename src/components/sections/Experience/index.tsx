import Layout from 'components/Layout';
import Grid from 'components/primitives/Grid';
import { graphql, useStaticQuery } from 'gatsby';
import React, { forwardRef } from 'react';
import ExperienceBlock from './ExperienceBlock';

const Experience = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    companyImgNodes: { nodes: companyImgs },
    experienceNodes: { nodes: experiences },
  } = useStaticQuery<GraphQL.ExperienceData>(graphql`
    query ExperienceData {
      companyImgNodes: allImageSharp(filter: { original: { src: { regex: "/company/" } } }) {
        nodes {
          fixed(height: 28) {
            originalName
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
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
  const companyImgsIndex = companyImgs.reduce((acc, img) => {
    if (img.fixed.originalName.includes('company_')) acc[img.fixed.originalName] = img.fixed;
    return acc;
  }, {});
  return (
    <Layout.Section ref={ref} title="experience">
      <Layout.Content columnDirection="column-reverse">
        <Grid gridColumnGap={{ _: 32, tablet: 64 }} gridTemplateColumns="auto auto" variant="container">
          {experiences
            .sort((a, b) => b.startDate.localeCompare(a.startDate))
            .map(item => {
              const img = companyImgsIndex[item.img];
              return (
                <ExperienceBlock
                  companyImg={img}
                  key={item.startDate}
                  gridColumn={{ _: 'span 2', laptopS: 'span 1' }}
                  item={item}
                />
              );
            })}
        </Grid>
      </Layout.Content>
    </Layout.Section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
