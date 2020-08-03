import React, { ComponentProps } from 'react';

const ChevronBottom: React.FC<ChevronBottomProps> = props => {
  return (
    <svg fill="#fff" height="24" width="24" {...props}>
      <path d="M-1-1h582v402H-1z" fill="none"></path>
      <path d="M16.59 5.795L12 10.385l-4.59-4.59L6 7.205l6 6 6-6-1.41-1.41zM18 16.205v2H6v-2h12z"></path>
    </svg>
  );
};

ChevronBottom.displayName = 'ChevronBottom';

export type ChevronBottomProps = ComponentProps<'svg'>;
export default ChevronBottom;
