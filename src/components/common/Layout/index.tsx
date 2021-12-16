import ErrorBoundary from '@/components/common/ErrorBoundary';
import useLayoutData from '@/components/hooks/data/useLayoutData';
import ThemeProvider from '@/components/providers/ThemeProvider';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Content from './Content';
import Section from './Section';

function Layout({ children }: LayoutProps): JSX.Element {
  const {
    site: {
      siteMetadata: { authorName, color, description, keywords, siteUrl, version },
    },
  } = useLayoutData();

  const appTitle = `${authorName} | Resume`;
  const appVersion = `v${version}`;

  return (
    <HelmetProvider>
      <Helmet
        bodyAttributes={{ class: 'bg-white dark:bg-gray-900 transition-colors' }}
        htmlAttributes={{ lang: 'en' }}
        title={appTitle}
      >
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
      </Helmet>
      <ErrorBoundary>
        <ThemeProvider>{children}</ThemeProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

Layout.Content = Content;
Layout.Section = Section;

export type LayoutProps = {
  children: React.ReactNode;
};
export default Layout;
