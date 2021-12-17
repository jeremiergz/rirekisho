import { graphql, useStaticQuery } from 'gatsby';

type FooterQueryData = {
  gatsbyjs: Models.ChildImage;
  gatsbyjsDark: Models.ChildImage;
  site: {
    siteMetadata: {
      name: string;
      repositoryURL: string;
      version: string;
    };
  };
  tailwindcss: Models.ChildImage;
  tailwindcssDark: Models.ChildImage;
};

function useFooterData(): FooterQueryData {
  return useStaticQuery<FooterQueryData>(graphql`
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
}

export type { FooterQueryData };
export default useFooterData;
