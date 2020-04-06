import React, { ComponentProps, FunctionComponent } from 'react';

const Menu: FunctionComponent<MenuProps> = props => {
  return (
    <svg fill="#fff" height="24" width="24" {...props}>
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  );
};

export type MenuProps = ComponentProps<'svg'>;
export default Menu;
