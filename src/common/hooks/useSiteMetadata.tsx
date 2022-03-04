import { graphql, useStaticQuery } from 'gatsby';

type SiteMetadataQueryResponse = {
  site: {
    siteMetadata: {
      authorName: string;
      color: string;
      description: string;
      keywords: string[];
      license: string;
      name: string;
      repositoryURL: string;
      siteUrl: string;
      twitterUsername: string;
      version: string;
    };
  };
};

function useSiteMetadata(): SiteMetadataQueryResponse['site']['siteMetadata'] {
  const rawData = useStaticQuery<SiteMetadataQueryResponse>(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          authorName
          color
          description
          keywords
          license
          name
          repositoryURL
          siteUrl
          twitterUsername
          version
        }
      }
    }
  `);

  return rawData.site.siteMetadata;
}

export type { SiteMetadataQueryResponse };
export default useSiteMetadata;
