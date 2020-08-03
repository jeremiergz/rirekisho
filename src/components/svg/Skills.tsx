import React, { ComponentProps } from 'react';

const Skills: React.FC<SkillsProps> = props => {
  return (
    <svg fill="#fff" height="24" width="24" {...props}>
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
    </svg>
  );
};

Skills.displayName = 'Skills';

export type SkillsProps = ComponentProps<'svg'>;
export default Skills;
