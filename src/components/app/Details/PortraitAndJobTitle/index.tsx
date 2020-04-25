import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { CSSProperties, FunctionComponent } from 'react';
import { ResponsiveValue } from 'styled-system';
import Box from '../../../primitives/Box';
import FlexBox from '../../../primitives/FlexBox';
import Text from '../../../primitives/Text';

const PortraitAndJobTitle: FunctionComponent<PortraitAndJobTitleProps> = ({ jobTitle, order }) => {
  const {
    imageSharp: { fluid: portrait },
  } = useStaticQuery<GraphQL.PortraitData>(graphql`
    query PortraitData {
      imageSharp(fluid: { originalName: { eq: "portrait.png" } }) {
        fluid(maxHeight: 256, maxWidth: 256) {
          ...GatsbyImageSharpFluid
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
      marginTop={-64}
      order={order}
    >
      <Box
        backgroundColor="white"
        borderRadius="50%"
        height={{ _: 184, laptopL: 224 }}
        minHeight={{ _: 184, laptopL: 224 }}
        position="relative"
        width={{ _: 184, laptopL: 224 }}
      >
        <Box left={0} margin="auto" position="absolute" right={0} top={16} width={{ _: 152, laptopL: 192 }}>
          <Img fluid={portrait} />
        </Box>
      </Box>
      <Text
        color="secondary"
        fontSize={40}
        fontWeight="bold"
        margin={{ _: '16px 0 0 0', tablet: '0 -16px 64px -16px' }}
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
