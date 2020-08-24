import Anchor from 'components/Anchor';
import FlexBox from 'components/primitives/FlexBox';
import Text from 'components/primitives/Text';
import HeartIcon from 'components/svgs/icons/Heart';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { useTheme } from 'components/providers/ThemeProvider';

const Footer = () => {
  const {
    gatsbyImg,
    site: {
      siteMetadata: { appName, repository, version },
    },
    styledComponentsImg,
  } = useStaticQuery<GraphQL.FooterDataQuery>(graphql`
    query FooterData {
      gatsbyImg: imageSharp(fluid: { originalName: { eq: "tech_gatsby.png" } }) {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      site {
        siteMetadata {
          appName
          repository {
            url
          }
          version
        }
      }
      styledComponentsImg: imageSharp(fluid: { originalName: { eq: "tech_styled_components.png" } }) {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `);
  const { theme } = useTheme();
  const applicationInfo = `${appName.toLowerCase()} v${version}`;
  const repositoryURL = repository.url.replace(/git\+|\.git/g, '');
  const sourceCodeURL = `${repositoryURL}/tree/${version}`;
  const techs = [
    { img: gatsbyImg.fluid, url: 'https://www.gatsbyjs.org' },
    { img: styledComponentsImg.fluid, url: 'https://styled-components.com' },
  ];
  return (
    <FlexBox
      alignItems="center"
      as="footer"
      backgroundColor="primary"
      color="white"
      flexDirection="column"
      height={{ _: 204, tablet: 168 }}
      justifyContent="center"
      marginTop={5}
      position="relative"
      print={false}
    >
      <FlexBox
        alignItems="center"
        flexDirection={{ _: 'column', tablet: 'row' }}
        justifyContent="center"
        marginBottom={{ _: 3, tablet: 2 }}
      >
        <FlexBox alignItems="center" marginBottom={{ _: 2, tablet: 0 }} marginX={{ _: 0, tablet: 3 }}>
          <Text marginRight={1}>Made with</Text>
          <HeartIcon height={16} />
          <Text marginLeft={1}>using</Text>
        </FlexBox>
        <FlexBox>
          {techs.map(tech => (
            <Anchor external height={64} href={tech.url} key={tech.url} marginX={3} width={64}>
              <Img fluid={tech.img} />
            </Anchor>
          ))}
        </FlexBox>
      </FlexBox>
      <FlexBox alignItems="center" color="caption" flexDirection="column" justifyContent="center" marginTop={3}>
        <Text>{applicationInfo}</Text>
        <Anchor external href={sourceCodeURL}>
          <Text borderBottom={`1px dotted ${theme.colors.caption}`} fontSize={12}>
            source code
          </Text>
        </Anchor>
      </FlexBox>
    </FlexBox>
  );
};

Footer.displayName = 'Footer';

export default Footer;
