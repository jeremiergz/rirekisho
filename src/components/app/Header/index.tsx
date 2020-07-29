import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import useTheme from '../../../hooks/useTheme';
import FlexBox from '../../primitives/FlexBox';
import Text from '../../primitives/Text';
import Language from './Language';

const Header: FunctionComponent = () => {
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
      alignItems="center"
      as="header"
      backgroundColor="primary"
      color="white"
      flexDirection={{ _: 'column', tablet: 'row' }}
      fontFamily={theme.fonts.title}
      height={{ _: 168, tablet: 96 }}
      justifyContent={{ _: 'center', tablet: 'space-between' }}
      paddingX={{ _: 3, tablet: 4, laptopS: 5 }}
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
  );
};

Header.displayName = 'Header';

export default Header;
