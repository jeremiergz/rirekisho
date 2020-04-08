import React, { FunctionComponent } from 'react';
import { createGlobalStyle } from 'styled-components';
import useTheme from '../../../../hooks/useTheme';
import Footer from '../../../app/Footer';
import Header from '../../../app/Header';
import Grid, { GridProps } from '../../../primitives/Grid';
import SEO, { SEOProps } from '../../SEO';

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme['colors'].background};
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    transition: background-color 250ms ease;
  }
  body {
    color: ${({ theme }) => theme['colors'].text};
    font-family: ${({ theme }) => theme['fonts'].main};
    font-weight: 400;
  }
  #___gatsby {
    height: 100%;
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
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Base: FunctionComponent<BaseProps> = ({ children, description, keywords, lang, path, title, ...rest }) => {
  const theme = useTheme();
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

Base.displayName = 'Base';

export type BaseProps = Omit<GridProps, 'variant'> & SEOProps;
export default Base;
