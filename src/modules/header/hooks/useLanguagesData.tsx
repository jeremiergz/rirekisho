import { graphql, useStaticQuery } from 'gatsby';
import Language from '../models/Language';

type LanguagesQueryResponse = {
  languages: {
    nodes: Language[];
  };
};

function useLanguagesData(): Language[] {
  const rawData = useStaticQuery<LanguagesQueryResponse>(graphql`
    query LanguagesQuery {
      languages: allLanguagesJson(sort: { sortOrder: ASC }) {
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
  const languages = rawData.languages.nodes.map(data => new Language(data));

  return languages;
}

export type { LanguagesQueryResponse };
export default useLanguagesData;
