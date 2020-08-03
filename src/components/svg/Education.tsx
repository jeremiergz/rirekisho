import React, { ComponentProps } from 'react';

const Education: React.FC<EducationProps> = props => {
  return (
    <svg fill="#fff" height="24" width="24" {...props}>
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
    </svg>
  );
};

Education.displayName = 'Education';

export type EducationProps = ComponentProps<'svg'>;
export default Education;
