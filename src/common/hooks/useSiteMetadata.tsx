import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type SiteMetadataQueryResponse = {
  banner: IGatsbyImageData;
  site: {
    siteMetadata: {
      authorName: string;
      authorTwitterUsername: string;
      color: string;
      description: string;
      keywords: string[];
      license: string;
      name: string;
      repositoryURL: string;
      siteUrl: string;
      version: string;
    };
  };
};

function useSiteMetadata(): {
  banner: SiteMetadataQueryResponse['banner'];
} & SiteMetadataQueryResponse['site']['siteMetadata'] {
  const rawData = useStaticQuery<SiteMetadataQueryResponse>(graphql`
    query SiteMetadataQuery {
      banner: file(relativePath: { eq: "cover.png" }) {
        childImageSharp {
          gatsbyImageData(formats: [AUTO, WEBP, AVIF], height: 630, placeholder: BLURRED, quality: 100, width: 1200)
        }
      }
      site {
        siteMetadata {
          authorName
          authorTwitterUsername
          color
          description
          keywords
          license
          name
          repositoryURL
          siteUrl
          version
        }
      }
    }
  `);

  return { banner: rawData.banner, ...rawData.site.siteMetadata };
}

export type { SiteMetadataQueryResponse };
export default useSiteMetadata;
