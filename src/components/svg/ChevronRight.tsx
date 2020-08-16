import React, { ComponentProps } from 'react';

const ChevronRight: React.FC<ChevronRightProps> = ({ fill, ...rest }) => {
  return (
    <svg fill={fill} viewBox="0 0 24 24" {...rest}>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </svg>
  );
};

ChevronRight.displayName = 'ChevronRight';

export type ChevronRightProps = ComponentProps<'svg'>;
export default ChevronRight;
