import Content from '@/common/components/layout/Content';
import Section from '@/common/components/layout/Section';
import clsx from 'clsx';
import { forwardRef } from 'react';
import useSkillsData from '../../hooks/useSkillsData';
import SkillBlock from './SkillBlock';

const Skills = forwardRef<HTMLDivElement>(function Skills(_, ref): JSX.Element {
  const skills = useSkillsData();

  // FIXME: Display only supports 3 skills groups
  const [skillsGroup1, skillsGroup2, skillsGroup3] = skills.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <Section className="print:mt-2" ref={ref} title="skills">
      <Content className="justify-center">
        <SkillBlock
          className={clsx('mx-4 lg:ml-0', 'print:mx-0')}
          key={skillsGroup1.name}
          items={skillsGroup1.items}
          title={skillsGroup1.name}
        />
        <SkillBlock
          className={clsx('mx-4', 'print:mx-4')}
          key={skillsGroup2.name}
          items={skillsGroup2.items}
          title={skillsGroup2.name}
        />
        <SkillBlock
          className={clsx('mx-4 lg:mr-0', 'print:mx-0')}
          key={skillsGroup3.name}
          items={skillsGroup3.items}
          title={skillsGroup3.name}
        />
      </Content>
    </Section>
  );
});

export default Skills;
