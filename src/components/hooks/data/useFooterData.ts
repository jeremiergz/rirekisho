import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type FooterQueryData = {
  gatsbyjs: { childImageSharp: IGatsbyImageData };
  gatsbyjsDark: { childImageSharp: IGatsbyImageData };
  site: {
    siteMetadata: {
      name: string;
      repositoryURL: string;
      version: string;
    };
  };
  tailwindcss: { childImageSharp: IGatsbyImageData };
  tailwindcssDark: { childImageSharp: IGatsbyImageData };
};

function useFooterData(): Pick<FooterQueryData, 'gatsbyjs' | 'gatsbyjsDark' | 'tailwindcss' | 'tailwindcssDark'> &
  FooterQueryData['site'] {
  const rawData = useStaticQuery<FooterQueryData>(graphql`
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
      site {
        siteMetadata {
          name
          repositoryURL
          version
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
    siteMetadata: rawData.site.siteMetadata,
    tailwindcss: rawData.tailwindcss,
    tailwindcssDark: rawData.tailwindcssDark,
  };
}

export type { FooterQueryData };
export default useFooterData;
