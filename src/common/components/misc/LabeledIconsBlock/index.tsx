import { SVGProps } from '@/common/components/misc/SVG';
import CodingIcon from '@/common/components/svgs/interests/Coding';
import MoviesIcon from '@/common/components/svgs/interests/Movies';
import MusicIcon from '@/common/components/svgs/interests/Music';
import NatureIcon from '@/common/components/svgs/interests/Nature';
import SportsIcon from '@/common/components/svgs/interests/Sports';
import TechIcon from '@/common/components/svgs/interests/Tech';
import clsx from 'clsx';
import { GatsbyImage, GatsbyImageProps, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
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
          let Icon: React.FC<GatsbyImageProps | SVGProps> = null;
          if (item.img) {
            const image = getImage(item.img.src);
            const CustomImage = (props: GatsbyImageProps) => <GatsbyImage alt={item.name} image={image} {...props} />;
            Icon = CustomImage;
          } else {
            Icon = IconsMapping[item.name];
          }

          return (
            <LabeledIcon key={item.name} link={item.link} name={item.name}>
              <div className={clsx('h-10 w-10 text-center md:h-12 md:w-12', 'print:h-10 print:w-10')}>
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
