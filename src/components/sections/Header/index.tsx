import Button from 'components/Button';
import FlexBox from 'components/primitives/FlexBox';
import Text from 'components/primitives/Text';
import MenuIcon from 'components/svg/Menu';
import { graphql, useStaticQuery } from 'gatsby';
import useTheme from 'hooks/useTheme';
import React from 'react';
import Language from './Language';
import Fab from 'components/Fab';

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const {
    flagImgNodes: { nodes: flagImgs },
    languageNodes: { nodes: languages },
  } = useStaticQuery<GraphQL.HeaderData>(graphql`
    query HeaderData {
      flagImgNodes: allImageSharp(filter: { original: { src: { regex: "/flag/" } } }) {
        nodes {
          fluid {
            originalName
            ...GatsbyImageSharpFluid_withWebp
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
  const handleMenuClick = (e: React.MouseEvent) => {
    if (typeof onMenuClick === 'function') onMenuClick(e);
  };
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
        <FlexBox alignItems="center" justifyContent={{ _: 'center', tablet: 'flex-start' }}>
          <Button
            // FIXME: experiment other ways to remove !important
            display={{ _: 'none !important', tablet: 'flex !important' }}
            marginRight="24px"
            onClick={handleMenuClick}
            variant="cursor-only"
          >
            <MenuIcon fill="white" height={32} width={32} />
          </Button>
          <Text
            fontSize={32}
            letterSpacing={{ _: -2, laptopL: 0 }}
            lineHeight="32px"
            paddingTop={2}
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
              <Language dense={index === 0} key={item.name} img={flagsIndex[item.img]} item={item} />
            ))}
        </FlexBox>
      </FlexBox>
      <Fab display={{ _: 'block', tablet: 'none' }} onClick={handleMenuClick} position="bottom-right">
        <MenuIcon fill="white" height={32} width={32} />
      </Fab>
    </FlexBox>
  );
};

Header.displayName = 'Header';

export type HeaderProps = {
  onMenuClick?: (event: React.MouseEvent) => void;
};
export default Header;
