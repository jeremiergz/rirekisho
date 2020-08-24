import SVG, { SVGProps } from 'components/SVG';
import React from 'react';

const ArrowLeft: React.FC<ArrowLeftProps> = props => {
  return (
    <SVG {...props}>
      <path d="M17.835 3.87l-1.77-1.77-9.9 9.9 9.9 9.9 1.77-1.77L9.705 12z" />
    </SVG>
  );
};

ArrowLeft.displayName = 'ArrowLeft';

export type ArrowLeftProps = SVGProps;
export default ArrowLeft;
