import { graphql, useStaticQuery } from 'gatsby';
import Experience from '../models/Experience';

type ExperiencesQueryResponse = {
  experiences: {
    nodes: Experience[];
  };
};

function useExperiencesData(): Experience[] {
  const rawData = useStaticQuery<ExperiencesQueryResponse>(graphql`
    query ExperiencesQuery {
      experiences: allExperiencesJson(sort: { timeline: { startDate: DESC } }) {
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
              website
            }
            description
            employer {
              name
              sector
              website
            }
            name
            sortOrder
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
  const experiences = rawData.experiences.nodes.map(data => new Experience(data));

  return experiences;
}

export type { ExperiencesQueryResponse };
export default useExperiencesData;
