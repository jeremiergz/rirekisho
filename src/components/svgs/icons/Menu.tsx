import SVG, { SVGProps } from 'components/SVG';
import React from 'react';

const Menu: React.FC<MenuProps> = props => {
  return (
    <SVG {...props}>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </SVG>
  );
};

Menu.displayName = 'Menu';

export type MenuProps = SVGProps;
export default Menu;
