import Degree from '@/models/Degree';
import { graphql, useStaticQuery } from 'gatsby';

type EducationQueryData = {
  education: {
    nodes: Degree[];
  };
};

function useEducationData(): Degree[] {
  const rawData = useStaticQuery<EducationQueryData>(graphql`
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
  const degrees = rawData.education.nodes.map(data => new Degree(data));

  return degrees;
}

export type { EducationQueryData };
export default useEducationData;
