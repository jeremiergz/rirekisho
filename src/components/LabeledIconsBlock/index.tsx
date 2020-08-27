import FlexBox from 'components/primitives/FlexBox';
import { useTheme } from 'components/providers/ThemeProvider';
import { SVGProps } from 'components/SVG';
import CodingIcon from 'components/svgs/interests/Coding';
import MoviesIcon from 'components/svgs/interests/Movies';
import MusicIcon from 'components/svgs/interests/Music';
import NatureIcon from 'components/svgs/interests/Nature';
import SportsIcon from 'components/svgs/interests/Sports';
import TechIcon from 'components/svgs/interests/Tech';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import LabeledIcon from './LabeledIcon';

const Icons: Record<string, React.FC<SVGProps>> = {
  coding: CodingIcon,
  tech: TechIcon,
  sports: SportsIcon,
  movies: MoviesIcon,
  music: MusicIcon,
  nature: NatureIcon,
};

const LabeledIconsBlock: React.FC<LabeledIconsBlockProps> = ({ items }) => {
  const {
    imgNodes: { nodes: imgs },
  } = useStaticQuery<GraphQL.LabeledIconsBlockDataQuery>(graphql`
    query LabeledIconsBlockData {
      imgNodes: allImageSharp(filter: { original: { src: { regex: "/toolbox/" } } }) {
        nodes {
          fixed(height: 48, quality: 100, width: 48) {
            originalName
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  const { theme } = useTheme();
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
              {Icon && <Icon fill={theme.type === 'dark' ? 'white' : theme.colors.text} height={48} width={48} />}
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
