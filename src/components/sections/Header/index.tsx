import Button from 'components/Button';
import Fab from 'components/Fab';
import Box from 'components/primitives/Box';
import FlexBox from 'components/primitives/FlexBox';
import Text from 'components/primitives/Text';
import { useTheme } from 'components/providers/ThemeProvider';
import MenuIcon from 'components/svgs/icons/Menu';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Language from './Language';

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const {
    flagImgNodes: { nodes: flagImgs },
    languageNodes: { nodes: languages },
    personalDetailsJson: { fullName },
  } = useStaticQuery<GraphQL.HeaderDataQuery>(graphql`
    query HeaderData {
      flagImgNodes: allImageSharp(filter: { original: { src: { regex: "/flag/" } } }) {
        nodes {
          fluid(quality: 100) {
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
      personalDetailsJson {
        fullName
      }
    }
  `);
  const { theme } = useTheme();
  const flagsIndex = flagImgs.reduce((acc, flag) => {
    acc[flag.fluid.originalName] = flag.fluid;
    return acc;
  }, {});
  const handleMenuClick = (e: React.MouseEvent) => {
    if (typeof onMenuClick === 'function') onMenuClick(e);
  };
  return (
    <>
      <Box
        backgroundColor="primary"
        display={{ _: 'none', tablet: 'inline-block' }}
        position="sticky"
        marginX={3}
        marginTop={3}
        top={0}
        transition="background-color 500ms ease"
        willChange="background-color"
        zIndex={10}
      >
        <Button onClick={handleMenuClick} padding={3} variant="cursor-only">
          <MenuIcon fill="white" />
        </Button>
      </Box>
      <FlexBox
        as="header"
        backgroundColor="primary"
        boxSizing="border-box"
        color="white"
        height={{ _: 168, tablet: 96 }}
        justifyContent="center"
        paddingX={{ _: 3, tablet: 4, laptopS: 5 }}
        position={{ tablet: 'absolute' }}
        top={0}
        transition="background-color 500ms ease"
        width="100%"
        willChange="background-color"
      >
        <FlexBox
          alignItems="center"
          flexDirection={{ _: 'column', tablet: 'row' }}
          justifyContent={{ _: 'center', tablet: 'space-between' }}
          maxWidth={theme.breakpoints['laptopM']}
          width="100%"
        >
          <FlexBox alignItems="center" justifyContent={{ _: 'center', tablet: 'flex-start' }}>
            <Text
              fontFamily="title"
              fontSize={32}
              letterSpacing={-2}
              lineHeight="32px"
              marginLeft={{ tablet: 5, laptopS: 4 }}
              paddingTop={2}
              textAlign="center"
              textTransform="uppercase"
              whiteSpace="nowrap"
            >
              {fullName}
            </Text>
          </FlexBox>
          <FlexBox marginBottom={{ _: 24, tablet: 0 }} marginTop={{ _: 2, tablet: 0 }}>
            {languages
              .sort((a, b) => a.sortOrder - b.sortOrder)
              .map((item, index) => (
                <Language
                  dense={index === 0}
                  key={item.name}
                  img={flagsIndex[item.img]}
                  item={item as Models.Language}
                />
              ))}
          </FlexBox>
        </FlexBox>
        <Fab display={{ _: 'block', tablet: 'none' }} onClick={handleMenuClick} position="bottom-right">
          <MenuIcon fill="white" height={32} width={32} />
        </Fab>
      </FlexBox>
    </>
  );
};

Header.displayName = 'Header';

export type HeaderProps = {
  onMenuClick?: (event: React.MouseEvent) => void;
};
export default Header;
