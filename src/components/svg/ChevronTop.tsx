import React, { ComponentProps } from 'react';

const ChevronTop: React.FC<ChevronTopProps> = ({ fill, ...rest }) => {
  return (
    <svg fill={fill} viewBox="0 0 24 24" {...rest}>
      <path d="M7.41 18.205l4.59-4.59 4.59 4.59 1.41-1.41-6-6-6 6 1.41 1.41zM6 7.795v-2h12v2H6z" />
    </svg>
  );
};

ChevronTop.displayName = 'ChevronTop';

export type ChevronTopProps = ComponentProps<'svg'>;
export default ChevronTop;
