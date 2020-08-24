import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { color, ColorProps, compose, layout, LayoutProps } from 'styled-system';

type SVGKnownProps = ColorProps & LayoutProps & HTMLAttributes<SVGSVGElement>;

const SVG = styled.svg<SVGKnownProps>`
  height: 32px;
  width: 32px;
  ${compose(color, layout)}
`;

SVG.displayName = 'SVG';
SVG.defaultProps = {
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
};

export type SVGProps = React.ComponentProps<typeof SVG>;
export default SVG;
