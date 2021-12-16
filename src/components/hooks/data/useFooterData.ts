import { graphql, useStaticQuery } from 'gatsby';

type FooterQueryData = {
  site: {
    siteMetadata: {
      name: string;
      repositoryURL: string;
      version: string;
    };
  };
};

function useFooterData(): FooterQueryData {
  return useStaticQuery<FooterQueryData>(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          name
          repositoryURL
          version
        }
      }
    }
  `);
}

export type { FooterQueryData };
export default useFooterData;
