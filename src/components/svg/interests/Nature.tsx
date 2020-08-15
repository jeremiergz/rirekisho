import React, { ComponentProps } from 'react';

const Nature: React.FC<NatureProps> = ({ fill, ...rest }) => {
  return (
    <svg fill={fill} viewBox="0 0 24 24" {...rest}>
      <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
    </svg>
  );
};

Nature.displayName = 'Nature';

export type NatureProps = ComponentProps<'svg'>;
export default Nature;
