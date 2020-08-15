import React, { ComponentProps } from 'react';

const Education: React.FC<EducationProps> = ({ fill, ...rest }) => {
  return (
    <svg fill={fill} viewBox="0 0 24 24" {...rest}>
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </svg>
  );
};

Education.displayName = 'Education';

export type EducationProps = ComponentProps<'svg'>;
export default Education;
