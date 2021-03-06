import Box from 'components/primitives/Box';
import FlexBox from 'components/primitives/FlexBox';
import Text from 'components/primitives/Text';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { CSSProperties } from 'react';
import { ResponsiveValue } from 'styled-system';

const PortraitAndJobTitle: React.FC<PortraitAndJobTitleProps> = ({ jobTitle, order }) => {
  const {
    imageSharp: { fluid: portrait },
  } = useStaticQuery<GraphQL.PortraitDataQuery>(graphql`
    query PortraitData {
      imageSharp(fluid: { originalName: { eq: "portrait.png" } }) {
        fluid(maxHeight: 192, maxWidth: 192, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `);
  return (
    <FlexBox
      alignItems="center"
      flex={1}
      flexDirection="column"
      justifyContent="space-between"
      marginTop={{ _: -40, tablet: -24 }}
      order={order}
    >
      <Box
        backgroundColor="background"
        borderRadius="50%"
        height={{ _: 184, laptopM: 224 }}
        minHeight={{ _: 184, laptopM: 224 }}
        position="relative"
        transition="background-color 500ms ease"
        width={{ _: 184, laptopM: 224 }}
        willChange="background-color"
      >
        <Box left={0} margin="auto" position="absolute" right={0} top={16} width={{ _: 152, laptopM: 192 }}>
          <Img fluid={portrait} />
        </Box>
      </Box>
      <Text
        color="secondary"
        fontSize={40}
        fontWeight="bold"
        margin={{ _: '16px 0 16px 0', tablet: '0 -16px 0 -16px' }}
        textAlign="center"
      >
        {jobTitle}
      </Text>
    </FlexBox>
  );
};

PortraitAndJobTitle.displayName = 'PortraitAndJobTitle';

export type PortraitAndJobTitleProps = {
  jobTitle: string;
  order?: ResponsiveValue<CSSProperties['order']>;
};
export default PortraitAndJobTitle;
