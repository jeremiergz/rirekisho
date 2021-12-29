import Experience from '@/models/Experience';
import { graphql, useStaticQuery } from 'gatsby';

type ExperiencesQueryData = {
  experiences: {
    nodes: Experience[];
  };
};

function useExperiencesData(): Experience[] {
  const rawData = useStaticQuery<ExperiencesQueryData>(graphql`
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

export type { ExperiencesQueryData };
export default useExperiencesData;
