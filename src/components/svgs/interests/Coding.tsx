import SVG, { SVGProps } from 'components/SVG';
import React from 'react';

const Coding: React.FC<CodingProps> = props => {
  return (
    <SVG {...props}>
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </SVG>
  );
};

Coding.displayName = 'Coding';

export type CodingProps = SVGProps;
export default Coding;
