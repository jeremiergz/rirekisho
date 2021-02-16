import styled from 'styled-components';
import { color, ColorProps, compose, layout, LayoutProps } from 'styled-system';

const SVG = styled.svg<SVGProps>`
  height: 32px;
  width: 32px;
  ${compose(color, layout)}
`;

SVG.displayName = 'SVG';
SVG.defaultProps = {
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
};

export type SVGProps = ColorProps &
  LayoutProps &
  React.ComponentProps<'svg'> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  };
export default SVG;
