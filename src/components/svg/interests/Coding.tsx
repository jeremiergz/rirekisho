import React, { ComponentProps } from 'react';

const Coding: React.FC<CodingProps> = ({ fill, ...rest }) => {
  return (
    <svg fill={fill} viewBox="0 0 24 24" {...rest}>
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </svg>
  );
};

Coding.displayName = 'Coding';

export type CodingProps = ComponentProps<'svg'>;
export default Coding;
