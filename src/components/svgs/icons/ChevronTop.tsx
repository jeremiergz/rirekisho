import SVG, { SVGProps } from '@common/SVG';
import React from 'react';

const ChevronTop: React.FC<ChevronTopProps> = props => {
  return (
    <SVG {...props}>
      <path d="M7.41 18.205l4.59-4.59 4.59 4.59 1.41-1.41-6-6-6 6 1.41 1.41zM6 7.795v-2h12v2H6z" />
    </SVG>
  );
};

ChevronTop.displayName = 'ChevronTop';

export type ChevronTopProps = SVGProps;
export default ChevronTop;
