import { graphql, useStaticQuery } from 'gatsby';

type SkillsQueryData = {
  skills: {
    nodes: Models.Skill[];
  };
};

function useSkillsData(): SkillsQueryData {
  return useStaticQuery<SkillsQueryData>(graphql`
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
}

export type { SkillsQueryData };
export default useSkillsData;
