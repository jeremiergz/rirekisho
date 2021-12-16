import { graphql, useStaticQuery } from 'gatsby';

type LayoutQueryData = {
  site: {
    siteMetadata: {
      authorName: string;
      color: string;
      description: string;
      keywords: string[];
      siteUrl: string;
      version: string;
    };
  };
};

function useLayoutData(): LayoutQueryData {
  return useStaticQuery<LayoutQueryData>(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          authorName
          color
          description
          keywords
          siteUrl
          version
        }
      }
    }
  `);
}

export type { LayoutQueryData };
export default useLayoutData;
