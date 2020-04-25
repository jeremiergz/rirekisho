import React, { FunctionComponent, useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import useTheme from '../../../hooks/useTheme';
import Footer from '../../app/Footer';
import Header from '../../app/Header';
import Grid, { GridProps } from '../../primitives/Grid';
import SEO, { SEOProps } from '../SEO';
import Content from './Content';
import Section from './Section';

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme['colors'].background};
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    color: ${({ theme }) => theme['colors'].text};
    font-family: ${({ theme }) => theme['fonts'].main};
    font-weight: 400;
  }
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(49, 133, 154, 0.5);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(49, 133, 154, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(49, 133, 154, 0);
    }
  }
  @page {
    size: A4 portrait;
    margin: 0mm;
  }
  @media print {
    body {
      /* Force displaying of background elements on print */
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
    }
  }
`;

const Layout: FunctionComponent<LayoutProps> & { Content: typeof Content; Section: typeof Section } = ({
  children,
  description,
  keywords,
  lang,
  path,
  title,
  ...rest
}) => {
  const theme = useTheme();
  const [originalDocTitle, setOriginalDocTitle] = useState<string>();
  useEffect(() => {
    window.onbeforeprint = () => {
      setOriginalDocTitle(document.title);
      document.title = 'Jeremie Rodriguez - Resume (EN)';
    };
    window.onafterprint = () => (document.title = originalDocTitle);
    return () => {
      window.onbeforeprint = null;
      window.onafterprint = null;
    };
  }, [originalDocTitle]);
  return (
    <>
      <GlobalStyle />
      <SEO description={description} keywords={keywords} lang={lang} path={path} title={title} />
      <Header />
      <Grid
        as="main"
        gridColumnGap={{ _: 32, tablet: 64 }}
        gridTemplateColumns="auto auto"
        margin="auto"
        maxWidth={theme.breakpoints['laptopM']}
        paddingX={{ _: 3, tablet: 4, laptopS: 48 }}
        variant="container"
        {...rest}
      >
        {children}
      </Grid>
      <Footer />
    </>
  );
};

Layout.Content = Content;
Layout.Section = Section;
Layout.displayName = 'Layout';

export type LayoutProps = Omit<GridProps, 'variant'> & SEOProps;
export default Layout;
