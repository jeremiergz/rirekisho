import useSiteMetadata from '@/common/hooks/useSiteMetadata';
import { getSrc } from 'gatsby-plugin-image';

function SEO(): JSX.Element {
  const { authorName, authorTwitterUsername, banner, description, keywords, siteUrl, version } = useSiteMetadata();

  const imageUrl = getSrc(banner);
  const appTitle = `${authorName} | CV`;
  const appVersion = `v${version}`;

  return (
    <>
      <title>{appTitle}</title>
      <link rel="canonical" href={siteUrl} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="version" content={appVersion} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={authorTwitterUsername} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:title" content={appTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:title" content={appTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
    </>
  );
}

export default SEO;
