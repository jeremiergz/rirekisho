import { graphql, useStaticQuery } from 'gatsby';

type ExperiencesQueryData = {
  experiences: {
    nodes: Models.Experience[];
  };
};

function useExperiencesData(): ExperiencesQueryData {
  return useStaticQuery<ExperiencesQueryData>(graphql`
    query ExperiencesQuery {
      experiences: allExperiencesJson(sort: { fields: timeline___startDate, order: DESC }) {
        nodes {
          company {
            img {
              src {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, height: 24, quality: 100)
                }
              }
            }
            name
            sector
            website
          }
          projects {
            client {
              name
              sector
            }
            description
            name
            tasks
            technologies
          }
          timeline {
            endDate
            startDate
          }
        }
      }
    }
  `);
}

export type { ExperiencesQueryData };
export default useExperiencesData;
