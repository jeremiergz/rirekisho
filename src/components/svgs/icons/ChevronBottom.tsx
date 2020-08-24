import SVG, { SVGProps } from 'components/SVG';
import React from 'react';

const ChevronBottom: React.FC<ChevronBottomProps> = props => {
  return (
    <SVG {...props}>
      <path d="M16.59 5.795L12 10.385l-4.59-4.59L6 7.205l6 6 6-6-1.41-1.41zM18 16.205v2H6v-2h12z" />
    </SVG>
  );
};

ChevronBottom.displayName = 'ChevronBottom';

export type ChevronBottomProps = SVGProps;
export default ChevronBottom;
