import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type FooterQueryResponse = {
  gatsbyjs: { childImageSharp: IGatsbyImageData };
  gatsbyjsDark: { childImageSharp: IGatsbyImageData };
  tailwindcss: { childImageSharp: IGatsbyImageData };
  tailwindcssDark: { childImageSharp: IGatsbyImageData };
};

function useFooterData(): Pick<FooterQueryResponse, 'gatsbyjs' | 'gatsbyjsDark' | 'tailwindcss' | 'tailwindcssDark'> {
  const rawData = useStaticQuery<FooterQueryResponse>(graphql`
    query FooterQuery {
      gatsbyjs: file(relativePath: { eq: "tech_gatsby.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, quality: 100, width: 56)
        }
      }
      gatsbyjsDark: file(relativePath: { eq: "tech_gatsby_dark.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, quality: 100, width: 56)
        }
      }
      tailwindcss: file(relativePath: { eq: "tech_tailwindcss.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, quality: 100, width: 56)
        }
      }
      tailwindcssDark: file(relativePath: { eq: "tech_tailwindcss_dark.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, quality: 100, width: 56)
        }
      }
    }
  `);

  return {
    gatsbyjs: rawData.gatsbyjs,
    gatsbyjsDark: rawData.gatsbyjsDark,
    tailwindcss: rawData.tailwindcss,
    tailwindcssDark: rawData.tailwindcssDark,
  };
}

export type { FooterQueryResponse };
export default useFooterData;
