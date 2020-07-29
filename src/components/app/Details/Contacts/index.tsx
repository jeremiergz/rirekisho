import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { CSSProperties, FunctionComponent } from 'react';
import { ResponsiveValue } from 'styled-system';
import Anchor from '../../../common/Anchor';
import Box from '../../../primitives/Box';
import FlexBox from '../../../primitives/FlexBox';
import Text from '../../../primitives/Text';

function isHTTPLink(link: string) {
  return !!link.match(/^https?:\/\//);
}

const Contacts: FunctionComponent<ContactsProps> = ({ items, order }) => {
  const {
    contactImgNodes: { nodes: contactImgs },
  } = useStaticQuery<GraphQL.ContactsData>(graphql`
    query ContactsData {
      contactImgNodes: allImageSharp {
        nodes {
          fixed(height: 32, width: 32) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const contactImgsIndex = contactImgs.reduce((acc, img) => {
    if (img.fixed.originalName.includes('contact_')) acc[img.fixed.originalName] = img.fixed;
    return acc;
  }, {});
  return (
    <FlexBox
      flex={1}
      flexDirection={{ _: 'row', tablet: 'column' }}
      justifyContent="center"
      marginY={3}
      maxHeight={{ _: 32, tablet: 'unset' }}
      minWidth={224}
      order={order}
      textAlign="center"
    >
      {items
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((item, index) => (
          <FlexBox
            alignItems="center"
            justifyContent={{ _: 'center', tablet: 'flex-end' }}
            key={item.link}
            lineHeight="12px"
            marginX={{ _: 1, tablet: 0 }}
            marginBottom={{ _: 0, tablet: index !== items.length - 1 && 20 }}
          >
            <Anchor external={isHTTPLink(item.link)} href={item.link}>
              <FlexBox alignItems="center" flexDirection={{ _: 'column-reverse', tablet: 'row' }}>
                <Text
                  color="primary"
                  display={{ _: 'none', tablet: 'block' }}
                  fontSize={18}
                  fontWeight="bold"
                  lineHeight="32px"
                >
                  {item.label}
                </Text>
                <Box marginLeft={2}>
                  <Img fixed={contactImgsIndex[item.img]} />
                </Box>
              </FlexBox>
            </Anchor>
          </FlexBox>
        ))}
    </FlexBox>
  );
};

Contacts.displayName = 'Contacts';

export type ContactsProps = {
  items: Models.PersonalContact[];
  order?: ResponsiveValue<CSSProperties['order']>;
};
export default Contacts;
