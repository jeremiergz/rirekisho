import React, { ComponentProps } from 'react';

const Experience: React.FC<ExperienceProps> = props => {
  return (
    <svg fill="#fff" height="24" width="24" {...props}>
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
    </svg>
  );
};

Experience.displayName = 'Experience';

export type ExperienceProps = ComponentProps<'svg'>;
export default Experience;
