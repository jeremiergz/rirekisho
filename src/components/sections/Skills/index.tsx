import Layout from 'components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import React, { forwardRef } from 'react';
import SkillBlock from './SkillBlock';

const Skills = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    skillNodes: { nodes: skills },
  } = useStaticQuery<GraphQL.SkillsData>(graphql`
    query SkillsData {
      skillNodes: allSkillsJson {
        nodes {
          items {
            name
            proficiencyLevel
            section
            sortOrder
          }
          name
          sortOrder
        }
      }
    }
  `);
  return (
    <Layout.Section ref={ref} title="skills">
      <Layout.Content
        justifyContent={{ _: 'space-around', laptopL: 'space-between' }}
        marginX={{ _: 0, tablet: -3 }}
        width={{ _: 'auto', tablet: 'calc(100% + 32px)' }}
      >
        {skills
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map(item => (
            <SkillBlock key={item.name} items={item.items} marginX={3} title={item.name} />
          ))}
      </Layout.Content>
    </Layout.Section>
  );
});

Skills.displayName = 'Skills';

export default Skills;
