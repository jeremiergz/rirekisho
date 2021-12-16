import { graphql, useStaticQuery } from 'gatsby';

type EducationQueryData = {
  education: {
    nodes: Models.Degree[];
  };
};

function useEducationData(): EducationQueryData {
  return useStaticQuery<EducationQueryData>(graphql`
    query EducationQuery {
      education: allEducationJson(sort: { fields: issueDate, order: ASC }) {
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
}

export type { EducationQueryData };
export default useEducationData;
