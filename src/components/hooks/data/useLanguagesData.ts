import Language from '@/models/Language';
import { graphql, useStaticQuery } from 'gatsby';

type LanguagesQueryData = {
  languages: {
    nodes: Language[];
  };
};

function useLanguagesData(): Language[] {
  const rawData = useStaticQuery<LanguagesQueryData>(graphql`
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
  const languages = rawData.languages.nodes.map(data => new Language(data));

  return languages;
}

export type { LanguagesQueryData };
export default useLanguagesData;
