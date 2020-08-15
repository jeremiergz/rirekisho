import FlexBox from 'components/primitives/FlexBox';
import Text from 'components/primitives/Text';
import { graphql, useStaticQuery } from 'gatsby';
import useTheme from 'hooks/useTheme';
import React from 'react';
import Language from './Language';

const Header: React.FC = () => {
  const {
    flagImgNodes: { nodes: flagImgs },
    languageNodes: { nodes: languages },
  } = useStaticQuery<GraphQL.HeaderData>(graphql`
    query HeaderData {
      flagImgNodes: allImageSharp {
        nodes {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
      languageNodes: allLanguagesJson {
        nodes {
          img
          name
          proficiencyLevel
          sortOrder
        }
      }
    }
  `);
  const theme = useTheme();
  const flagsIndex = flagImgs.reduce((acc, flag) => {
    if (flag.fluid.originalName.includes('flag_')) acc[flag.fluid.originalName] = flag.fluid;
    return acc;
  }, {});
  return (
    <FlexBox
      as="header"
      backgroundColor="primary"
      color="white"
      fontFamily={theme.fonts.title}
      height={{ _: 168, tablet: 96 }}
      justifyContent="center"
      paddingX={{ _: 3, tablet: 4, laptopS: 5 }}
    >
      <FlexBox
        alignItems="center"
        flexDirection={{ _: 'column', tablet: 'row' }}
        justifyContent={{ _: 'center', tablet: 'space-between' }}
        maxWidth={theme.breakpoints['laptopM']}
        width="100%"
      >
        <FlexBox alignItems="center" justifyContent={{ _: 'center', tablet: 'flex-start' }} paddingTop={2}>
          <Text
            fontSize={32}
            letterSpacing={{ _: -2, laptopL: 0 }}
            lineHeight="32px"
            textAlign="center"
            textTransform="uppercase"
            whiteSpace="nowrap"
          >
            Jeremie Rodriguez
          </Text>
        </FlexBox>
        <FlexBox marginBottom={{ _: 24, tablet: 0 }} marginTop={{ _: 2, tablet: 0 }}>
          {languages
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((item, index) => (
              <Language
                dense={index === 0 || index === languages.length - 1}
                key={item.name}
                img={flagsIndex[item.img]}
                item={item}
              />
            ))}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

Header.displayName = 'Header';

export default Header;
