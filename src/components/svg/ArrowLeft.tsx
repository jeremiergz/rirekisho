import React, { ComponentProps } from 'react';

const ArrowLeft: React.FC<ArrowLeftProps> = ({ fill, ...rest }) => {
  return (
    <svg fill={fill} viewBox="0 0 24 24" {...rest}>
      <path d="M17.835 3.87l-1.77-1.77-9.9 9.9 9.9 9.9 1.77-1.77L9.705 12z" />
    </svg>
  );
};

ArrowLeft.displayName = 'ArrowLeft';

export type ArrowLeftProps = ComponentProps<'svg'>;
export default ArrowLeft;
