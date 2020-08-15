import React, { ComponentProps } from 'react';

const Menu: React.FC<MenuProps> = ({ fill, ...rest }) => {
  return (
    <svg fill={fill} viewBox="0 0 24 24" {...rest}>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
};

Menu.displayName = 'Menu';

export type MenuProps = ComponentProps<'svg'>;
export default Menu;
