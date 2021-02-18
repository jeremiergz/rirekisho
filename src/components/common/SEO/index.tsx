import Head from 'next/head';
import React from 'react';

const SEO: React.FC<SEOProps> = ({ description = '', keywords = [], path = '/', title = 'CV' }) => {
  const metaDescription = description || process.env.APP_DESCRIPTION;
  const metaImageURL = `${process.env.APP_SITE_URL}/images/cover.png`;
  const metaKeywords = keywords || process.env.APP_KEYWORDS.split(',');
  const metaURL = `${process.env.APP_SITE_URL}${path}`;
  const fullTitle = `${title} | ${process.env.APP_TITLE}`;
  return (
    <Head>
      <title key="title">
        {title} | {process.env.APP_TITLE}
      </title>
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
      <meta name="twitter:creator" content={process.env.APP_TWITTER_USERNAME} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImageURL} />
      <meta name="twitter:title" content={fullTitle} />
    </Head>
  );
};

SEO.displayName = 'SEO';

export type SEOProps = {
  description?: string;
  keywords?: string[];
  lang?: string;
  path?: string;
  title?: string;
};
export default SEO;
