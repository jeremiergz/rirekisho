import { graphql, useStaticQuery } from 'gatsby';

type InterestsQueryData = {
  interests: {
    nodes: Models.Interest[];
  };
};

function useInterestsData(): InterestsQueryData {
  return useStaticQuery<InterestsQueryData>(graphql`
    query InterestsQuery {
      interests: allInterestsJson(sort: { fields: sortOrder, order: ASC }) {
        nodes {
          name
          sortOrder
        }
      }
    }
  `);
}

export type { InterestsQueryData };
export default useInterestsData;
