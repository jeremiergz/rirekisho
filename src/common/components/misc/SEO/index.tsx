import useSiteMetadata from '@/common/hooks/useSiteMetadata';

function SEO(): JSX.Element {
  const { authorName, color, description, keywords, siteUrl, version } = useSiteMetadata();

  const appTitle = `${authorName} | CV`;
  const appVersion = `v${version}`;

  return (
    <>
      <title>{appTitle}</title>
      <link rel="canonical" href={siteUrl} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="msapplication-TileColor" content={color} />
      <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
      <meta name="version" content={appVersion} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={appTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={appTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
    </>
  );
}

export default SEO;
