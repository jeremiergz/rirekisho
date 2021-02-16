import Anchor from '@common/Anchor';
import Box from '@primitives/Box';
import FlexBox from '@primitives/FlexBox';
import Text from '@primitives/Text';
import { useData } from '@providers/DataProvider';
import { useTheme } from '@providers/ThemeProvider';
import HeartIcon from '@svgs/icons/Heart';
import React from 'react';

const Footer: React.FC = () => {
  const { imagesIndex } = useData();
  const { theme } = useTheme();
  const applicationInfo = `${process.env.APP_NAME.toLowerCase()} v${process.env.APP_VERSION}`;
  const repositoryURL = process.env.APP_REPOSITORY_URL;
  const sourceCodeURL = `${repositoryURL}/tree/${process.env.APP_VERSION}`;
  const techs = [
    { img: imagesIndex['tech_next.png'], url: 'https://nextjs.org' },
    { img: imagesIndex['tech_styled_components.png'], url: 'https://styled-components.com' },
  ];
  return (
    <FlexBox
      alignItems="center"
      as="footer"
      backgroundColor="primary"
      color="white"
      contentVisibility="auto"
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
              <Box alt={`Go to ${tech.url}`} as="img" height={64} src={tech.img} width={64} />
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
