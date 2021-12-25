import Skill from '@/models/Skill';
import { graphql, useStaticQuery } from 'gatsby';

type SkillsQueryData = {
  skills: {
    nodes: Skill[];
  };
};

function useSkillsData(): Skill[] {
  const rawData = useStaticQuery<SkillsQueryData>(graphql`
    query SkillsQuery {
      skills: allSkillsJson(sort: { fields: sortOrder, order: ASC }) {
        nodes {
          items {
            name
            proficiencyLevel
            sortOrder
          }
          name
          sortOrder
        }
      }
    }
  `);
  const skills = rawData.skills.nodes.map(data => new Skill(data));

  return skills;
}

export type { SkillsQueryData };
export default useSkillsData;
