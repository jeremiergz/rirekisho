import Certification from '@/models/Certification';

type CertificationsQueryData = {
  certifications: {
    nodes: Certification[];
  };
};

function useCertificationsData(): Certification[] {
  // const rawData = useStaticQuery<CertificationsQueryData>(graphql`
  //   query CertificationsQuery {
  //     certifications: allCertificationsJson(sort: { fields: sortOrder, order: ASC }) {
  //       nodes {
  //         img {
  //           src {
  //             childImageSharp {
  //               gatsbyImageData(placeholder: BLURRED, quality: 100, width: 80)
  //             }
  //           }
  //         }
  //         name
  //         provider
  //         sortOrder
  //         website
  //       }
  //     }
  //   }
  // `);
  // const certifications = rawData.certifications.nodes.map(data => new Certification(data));
  const certifications = [];

  return certifications;
}

export type { CertificationsQueryData };
export default useCertificationsData;
