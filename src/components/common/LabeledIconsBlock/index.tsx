import { SVGProps } from '@/components/common/SVG';
import CodingIcon from '@/components/svgs/interests/Coding';
import MoviesIcon from '@/components/svgs/interests/Movies';
import MusicIcon from '@/components/svgs/interests/Music';
import NatureIcon from '@/components/svgs/interests/Nature';
import SportsIcon from '@/components/svgs/interests/Sports';
import TechIcon from '@/components/svgs/interests/Tech';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import LabeledIcon from './LabeledIcon';

const IconsMapping: Record<string, React.FC<SVGProps>> = {
  coding: CodingIcon,
  movies: MoviesIcon,
  music: MusicIcon,
  nature: NatureIcon,
  sports: SportsIcon,
  tech: TechIcon,
};

function LabeledIconsBlock({ items }: LabeledIconsBlockProps): JSX.Element {
  return (
    <div className="flex w-full max-w-md flex-wrap items-center justify-center lg:justify-between">
      {items
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map(item => {
          let Icon: React.FC<SVGProps | null>;
          if (item.img) {
            const image = getImage(item.img.src);
            const CustomImage = () => (
              <div className="h-10 w-10 sm:h-12 sm:w-12">
                <GatsbyImage alt={item.name} image={image} />
              </div>
            );
            Icon = CustomImage;
          } else {
            Icon = IconsMapping[item.name];
          }

          return (
            <LabeledIcon key={item.name} link={item.link} name={item.name}>
              <div className="h-10 w-10 text-center sm:h-12 sm:w-12">
                {Icon && <Icon className="h-full w-full fill-gray-900 dark:fill-gray-100" />}
              </div>
            </LabeledIcon>
          );
        })}
    </div>
  );
}

export type LabeledIconsBlockProps = {
  items: {
    img?: { src: IGatsbyImageData };
    link?: string;
    name: string;
    sortOrder: number;
  }[];
};
export default LabeledIconsBlock;
