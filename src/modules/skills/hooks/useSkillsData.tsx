import { graphql, useStaticQuery } from 'gatsby';
import Skill from '../models/Skill';

type SkillsQueryResponse = {
  skills: {
    nodes: Skill[];
  };
};

function useSkillsData(): Skill[] {
  const rawData = useStaticQuery<SkillsQueryResponse>(graphql`
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

export type { SkillsQueryResponse };
export default useSkillsData;
