import FlexBox from '@primitives/FlexBox';
import Text from '@primitives/Text';
import { useData } from '@providers/DataProvider';
import React from 'react';
import Language from './Language';

const Header: React.FC = () => {
  const { imagesIndex, languagesData, personalDetailsData } = useData();
  return (
    <FlexBox
      as="header"
      backgroundColor="primary"
      boxSizing="border-box"
      color="white"
      height={{ _: 168, tablet: 96 }}
      justifyContent="center"
      paddingX={{ _: 3, tablet: 4, laptopS: 5 }}
      top={0}
      transition="background-color 500ms ease"
      width="100%"
      willChange="background-color"
    >
      <FlexBox
        alignItems="center"
        flexDirection={{ _: 'column', tablet: 'row' }}
        justifyContent={{ _: 'center', tablet: 'space-between' }}
        maxWidth={1100}
        width="100%"
      >
        <FlexBox alignItems="center" justifyContent={{ _: 'center', tablet: 'flex-start' }}>
          <Text
            fontFamily="title"
            fontSize={32}
            letterSpacing={-2}
            lineHeight="32px"
            paddingTop={2}
            textAlign="center"
            textTransform="uppercase"
            whiteSpace="nowrap"
          >
            {personalDetailsData.fullName}
          </Text>
        </FlexBox>
        <FlexBox marginBottom={{ _: 24, tablet: 0 }} marginTop={{ _: 2, tablet: 0 }}>
          {languagesData
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((item, index) => (
              <Language
                dense={index === 0}
                key={item.name}
                img={imagesIndex[item.img]}
                item={item as Models.Language}
              />
            ))}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

Header.displayName = 'Header';

export default Header;
