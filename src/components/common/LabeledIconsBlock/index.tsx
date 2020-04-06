import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import FlexBox from '../../primitives/FlexBox';
import LabeledIcon from '../LabeledIcon';

const LabeledIconsBlock: FunctionComponent<LabeledIconsBlockProps> = ({ items }) => {
  const {
    imgNodes: { nodes: imgs },
  } = useStaticQuery<GraphQL.LabeledIconsBlockData>(graphql`
    query LabeledIconsBlockData {
      imgNodes: allImageSharp {
        nodes {
          fixed(height: 48, width: 48) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const imgsIndex = imgs.reduce((acc, img) => {
    acc[img.fixed.originalName] = img.fixed;
    return acc;
  }, {});
  return (
    <FlexBox
      alignItems="center"
      flexWrap="wrap"
      justifyContent={{ _: 'center', laptopS: 'space-between' }}
      maxWidth={448}
      width="100%"
    >
      {items
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map(item => (
          <LabeledIcon
            flex={{ _: 1, laptopS: 'unset' }}
            key={item.name}
            img={imgsIndex[item.img]}
            link={item.link}
            marginBottom={3}
            name={item.name}
          />
        ))}
    </FlexBox>
  );
};

LabeledIconsBlock.displayName = 'LabeledIconsBlock';

export type LabeledIconsBlockProps = {
  items: Models.LabeledItem[];
};
export default LabeledIconsBlock;
