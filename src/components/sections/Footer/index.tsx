import FlexBox from 'components/primitives/FlexBox';
import Text from 'components/primitives/Text';
import HeartIcon from 'components/svg/Heart';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Anchor from 'components/Anchor';

const Footer = () => {
  const {
    gatsbyImg,
    site: {
      siteMetadata: { appName, repository, version },
    },
    styledComponentsImg,
  } = useStaticQuery<GraphQL.FooterData>(graphql`
    query FooterData {
      gatsbyImg: imageSharp(fluid: { originalName: { eq: "tech_gatsby.png" } }) {
        fluid {
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
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `);
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
      <FlexBox alignItems="center" color="grey" flexDirection="column" justifyContent="center" marginTop={3}>
        <Text>{applicationInfo}</Text>
        <Text borderBottom="1px dotted grey" color="grey" fontSize={12}>
          <Anchor external href={sourceCodeURL}>
            source code
          </Anchor>
        </Text>
      </FlexBox>
    </FlexBox>
  );
};

Footer.displayName = 'Footer';

export default Footer;
