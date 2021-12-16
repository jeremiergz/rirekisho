import SVG, { SVGProps } from '@/components/common/SVG';
import React from 'react';

function Nature(props: NatureProps): JSX.Element {
  return (
    <SVG {...props}>
      <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
    </SVG>
  );
}

export type NatureProps = SVGProps;
export default Nature;
