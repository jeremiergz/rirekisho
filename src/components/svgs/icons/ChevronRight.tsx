import SVG, { SVGProps } from 'components/SVG';
import React from 'react';

const ChevronRight: React.FC<ChevronRightProps> = props => {
  return (
    <SVG {...props}>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </SVG>
  );
};

ChevronRight.displayName = 'ChevronRight';

export type ChevronRightProps = SVGProps;
export default ChevronRight;
