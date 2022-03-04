import { graphql, useStaticQuery } from 'gatsby';
import Interest from '../models/Interest';

type InterestsQueryResponse = {
  interests: {
    nodes: Interest[];
  };
};

function useInterestsData(): Interest[] {
  const rawData = useStaticQuery<InterestsQueryResponse>(graphql`
    query InterestsQuery {
      interests: allInterestsJson(sort: { fields: sortOrder, order: ASC }) {
        nodes {
          name
          sortOrder
        }
      }
    }
  `);
  const interests = rawData.interests.nodes.map(data => new Interest(data));

  return interests;
}

export type { InterestsQueryResponse };
export default useInterestsData;
