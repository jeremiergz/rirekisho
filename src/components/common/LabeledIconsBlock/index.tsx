import { SVGProps } from '@common/SVG';
import Box from '@primitives/Box';
import FlexBox from '@primitives/FlexBox';
import { useData } from '@providers/DataProvider';
import { useTheme } from '@providers/ThemeProvider';
import CodingIcon from '@svgs/interests/Coding';
import MoviesIcon from '@svgs/interests/Movies';
import MusicIcon from '@svgs/interests/Music';
import NatureIcon from '@svgs/interests/Nature';
import SportsIcon from '@svgs/interests/Sports';
import TechIcon from '@svgs/interests/Tech';
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
  const { imagesIndex } = useData();
  const { theme } = useTheme();
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
          const Icon = item.img
            ? () => (
                <Box height={{ _: 40, mobileL: 48 }} width={{ _: 40, mobileL: 48 }}>
                  <Box alt={item.name} as="img" height="100%" src={imagesIndex[item.img]} width="100%" />
                </Box>
              )
            : Icons[item.name];
          return (
            <LabeledIcon
              flex={{ _: 1, laptopS: 'unset' }}
              key={item.name}
              link={item.link}
              marginBottom={3}
              name={item.name}
            >
              <Box height={{ _: 40, mobileL: 48 }} textAlign="center" width={{ _: 40, mobileL: 48 }}>
                {Icon && <Icon fill={theme.type === 'dark' ? 'white' : theme.colors.text} height="100%" width="100%" />}
              </Box>
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
