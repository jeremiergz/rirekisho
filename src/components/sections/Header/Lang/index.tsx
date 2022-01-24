import Language from '@/models/Language';
import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Star from './Star';

function Lang({ dense = false, item }: LangProps): JSX.Element {
  const maxStarsNumber = 5;
  const maxStarsDifference = maxStarsNumber - item.proficiencyLevel;

  const fullStarsNumber = [...Array(Math.floor(item.proficiencyLevel)).keys()];
  const halfStarsNumber = [...Array(Math.round(maxStarsDifference % 1)).keys()];
  const emptyStarsNumber = [...Array(Math.floor(maxStarsDifference)).keys()];

  const image = getImage(item.img.src);

  return (
    <div className={clsx('flex flex-col items-center justify-center', !dense && 'ml-3')}>
      <div className="w-10 md:w-12">
        <GatsbyImage alt={item.name} image={image} />
      </div>
      <div className="mt-0.5 flex md:mt-1">
        {fullStarsNumber.map(fstar => (
          <Star className="h-3 md:h-4" key={fstar} type="full" />
        ))}
        {halfStarsNumber.map(fstar => (
          <Star className="h-3 md:h-4" key={fstar} type="half" />
        ))}
        {emptyStarsNumber.map(fstar => (
          <Star className="h-3 md:h-4" key={fstar} type="empty" />
        ))}
      </div>
    </div>
  );
}

export type LangProps = {
  dense?: boolean;
  item: Language;
};
export default Lang;
