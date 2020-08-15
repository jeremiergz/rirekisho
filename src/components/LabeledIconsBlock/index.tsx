import LabeledIcon from 'components/LabeledIcon';
import FlexBox from 'components/primitives/FlexBox';
import Coding from 'components/svg/interests/Coding';
import Movies from 'components/svg/interests/Movies';
import Music from 'components/svg/interests/Music';
import Nature from 'components/svg/interests/Nature';
import Sports from 'components/svg/interests/Sports';
import Tech from 'components/svg/interests/Tech';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const Icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  coding: Coding,
  tech: Tech,
  sports: Sports,
  movies: Movies,
  music: Music,
  nature: Nature,
};

const LabeledIconsBlock: React.FC<LabeledIconsBlockProps> = ({ items }) => {
  const {
    imgNodes: { nodes: imgs },
  } = useStaticQuery<GraphQL.LabeledIconsBlockData>(graphql`
    query LabeledIconsBlockData {
      imgNodes: allImageSharp(filter: { original: { src: { regex: "/toolbox/" } } }) {
        nodes {
          fixed(height: 48, width: 48) {
            originalName
            ...GatsbyImageSharpFixed_withWebp
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
        .map(item => {
          const Icon = item.img ? () => <Img fixed={imgsIndex[item.img]} /> : Icons[item.name];
          return (
            <LabeledIcon
              flex={{ _: 1, laptopS: 'unset' }}
              key={item.name}
              link={item.link}
              marginBottom={3}
              name={item.name}
            >
              {Icon && <Icon />}
            </LabeledIcon>
          );
        })}
    </FlexBox>
  );
};

LabeledIconsBlock.displayName = 'LabeledIconsBlock';

export type LabeledIconsBlockProps = {
  items: Models.LabeledItem[];
};
export default LabeledIconsBlock;
