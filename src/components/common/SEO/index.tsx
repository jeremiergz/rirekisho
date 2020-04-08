import * as Gatsby from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: FunctionComponent<SEOProps> = ({
  description = '',
  keywords = [],
  lang = 'en',
  path = '/',
  title = 'CV',
}) => {
  const {
    banner,
    site: {
      siteMetadata: {
        description: siteDescription,
        keywords: siteKeywords,
        siteUrl,
        title: siteTitle,
        twitterUsername,
      },
    },
  } = Gatsby.useStaticQuery<GraphQL.SEOData>(Gatsby.graphql`
    query SEOData {
      banner: file(relativePath: { eq: "cover.png" }) {
        childImageSharp {
          fixed(height: 630, width: 1200, pngQuality: 100) {
            src
          }
        }
      }
      site {
        siteMetadata {
          description
          keywords
          siteUrl
          title
          twitterUsername
        }
      }
    }
  `);
  const metaDescription = description || siteDescription;
  const metaImageURL = `${siteUrl}${banner.childImageSharp.fixed.src}`;
  const metaKeywords = keywords || siteKeywords;
  const metaURL = `${siteUrl}${path}`;
  const fullTitle = `${title} | ${siteTitle}`;
  return (
    <Helmet htmlAttributes={{ lang }} title={title} titleTemplate={`%s | ${siteTitle}`}>
      <link rel="canonical" href={metaURL} />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImageURL} />
      <meta name="keywords" content={metaKeywords.join(', ')} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImageURL} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImageURL} />
      <meta name="twitter:title" content={fullTitle} />
    </Helmet>
  );
};

SEO.displayName = 'SEO';

export type SEOProps = {
  description?: string;
  keywords?: string[];
  lang?: string;
  path?: string;
  title: string;
};
export default SEO;
