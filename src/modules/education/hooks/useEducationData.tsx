import { graphql, useStaticQuery } from 'gatsby';
import Degree from '../models/Degree';

type EducationQueryResponse = {
  education: {
    nodes: Degree[];
  };
};

function useEducationData(): Degree[] {
  const rawData = useStaticQuery<EducationQueryResponse>(graphql`
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

export type { EducationQueryResponse };
export default useEducationData;
