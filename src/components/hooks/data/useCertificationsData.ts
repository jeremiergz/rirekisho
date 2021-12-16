import { graphql, useStaticQuery } from 'gatsby';

type CertificationsQueryData = {
  certifications: {
    nodes: Models.Certification[];
  };
};

function useCertificationsData(): CertificationsQueryData {
  return useStaticQuery<CertificationsQueryData>(graphql`
    query CertificationsQuery {
      certifications: allCertificationsJson(sort: { fields: sortOrder, order: ASC }) {
        nodes {
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
}

export type { CertificationsQueryData };
export default useCertificationsData;
