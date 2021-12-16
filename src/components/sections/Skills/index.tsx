import Layout from '@/components/common/Layout';
import useSkillsData from '@/components/hooks/data/useSkillsData';
import React, { forwardRef } from 'react';
import SkillBlock from './SkillBlock';

const Skills = forwardRef<HTMLDivElement>(function Skills(_, ref): JSX.Element {
  const {
    skills: { nodes: skills },
  } = useSkillsData();

  // Display only supports 3 skills groups
  const [skillsGroup1, skillsGroup2, skillsGroup3] = skills;

  return (
    <Layout.Section className="mb-2 mt-0" ref={ref} title="skills">
      <Layout.Content className="justify-center">
        <SkillBlock
          className="mx-4 lg:ml-0"
          key={skillsGroup1.name}
          items={skillsGroup1.items}
          title={skillsGroup1.name}
        />
        <SkillBlock className="mx-4" key={skillsGroup2.name} items={skillsGroup2.items} title={skillsGroup2.name} />
        <SkillBlock
          className="mx-4 lg:mr-0"
          key={skillsGroup3.name}
          items={skillsGroup3.items}
          title={skillsGroup3.name}
        />
      </Layout.Content>
    </Layout.Section>
  );
});

export default Skills;
