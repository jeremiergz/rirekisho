import SVG, { SVGProps } from 'components/SVG';
import React from 'react';

const Nature: React.FC<NatureProps> = props => {
  return (
    <SVG {...props}>
      <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
    </SVG>
  );
};

Nature.displayName = 'Nature';

export type NatureProps = SVGProps;
export default Nature;
