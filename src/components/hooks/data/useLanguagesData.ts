import { graphql, useStaticQuery } from 'gatsby';

type LanguagesQueryData = {
  languages: {
    nodes: Models.Language[];
  };
};

function useLanguagesData(): LanguagesQueryData {
  return useStaticQuery<LanguagesQueryData>(graphql`
    query LanguagesQuery {
      languages: allLanguagesJson(sort: { fields: sortOrder, order: ASC }) {
        nodes {
          img {
            src {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 100, width: 48)
              }
            }
          }
          name
          proficiencyLevel
          sortOrder
        }
      }
    }
  `);
}

export type { LanguagesQueryData };
export default useLanguagesData;
