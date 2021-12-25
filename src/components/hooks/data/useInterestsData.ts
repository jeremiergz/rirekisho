import Interest from '@/models/Interest';
import { graphql, useStaticQuery } from 'gatsby';

type InterestsQueryData = {
  interests: {
    nodes: Interest[];
  };
};

function useInterestsData(): Interest[] {
  const rawData = useStaticQuery<InterestsQueryData>(graphql`
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

export type { InterestsQueryData };
export default useInterestsData;
