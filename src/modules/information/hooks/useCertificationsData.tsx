import { graphql, useStaticQuery } from 'gatsby';
import Certification from '../models/Certification';

type CertificationsQueryResponse = {
  certifications: {
    nodes: Certification[];
  };
};

function useCertificationsData(): Certification[] {
  const rawData = useStaticQuery<CertificationsQueryResponse>(graphql`
    query CertificationsQuery {
      certifications: allCertificationsJson(sort: { fields: sortOrder, order: ASC }) {
        nodes {
          display
          img {
            src {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 100, width: 80)
              }
            }
          }
          name
          provider
          sortOrder
          website
        }
      }
    }
  `);
  const certifications = rawData.certifications.nodes.map(data => new Certification(data));

  return certifications;
}

export type { CertificationsQueryResponse };
export default useCertificationsData;
