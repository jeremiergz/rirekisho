import { SVGProps } from '@/components/common/SVG';
import CodingIcon from '@/components/svgs/interests/Coding';
import MoviesIcon from '@/components/svgs/interests/Movies';
import MusicIcon from '@/components/svgs/interests/Music';
import NatureIcon from '@/components/svgs/interests/Nature';
import SportsIcon from '@/components/svgs/interests/Sports';
import TechIcon from '@/components/svgs/interests/Tech';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
    <div className="flex items-center flex-wrap justify-center lg:justify-between max-w-md w-full">
      {items.map(item => {
        let Icon: React.FC<SVGProps | null>;
        if (item.img) {
          const image = getImage(item.img.src);
          const CustomImage = () => (
            <div className="h-10 sm:h-12 w-10 sm:w-12">
              <GatsbyImage alt={item.name} image={image} />
            </div>
          );
          Icon = CustomImage;
        } else {
          Icon = IconsMapping[item.name];
        }

        return (
          <LabeledIcon key={item.name} link={item.link} name={item.name}>
            <div className="h-10 sm:h-12 text-center w-10 sm:w-12">
              {Icon && <Icon className="fill-gray-900 dark:fill-white h-full w-full" />}
            </div>
          </LabeledIcon>
        );
      })}
    </div>
  );
}

export type LabeledIconsBlockProps = {
  items: Models.LabeledItem[];
};
export default LabeledIconsBlock;
