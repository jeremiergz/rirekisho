import React, { ComponentProps } from 'react';

const ChevronTop: React.FC<ChevronTopProps> = props => {
  return (
    <svg fill="#fff" height="24" width="24" {...props}>
      <path d="M-1-1h582v402H-1z" fill="none"></path>
      <path d="M7.41 18.205l4.59-4.59 4.59 4.59 1.41-1.41-6-6-6 6 1.41 1.41zM6 7.795v-2h12v2H6z"></path>
    </svg>
  );
};

ChevronTop.displayName = 'ChevronTop';

export type ChevronTopProps = ComponentProps<'svg'>;
export default ChevronTop;
