import ActionManager from 'components/ActionManager';
import Layout from 'components/Layout';
import Details from 'components/sections/Details';
import Education from 'components/sections/Education';
import Experience from 'components/sections/Experience';
import Interests from 'components/sections/Interests';
import Skills from 'components/sections/Skills';
import Toolbox from 'components/sections/Toolbox';
import ChevronBottomIcon from 'components/svg/ChevronBottom';
import ChevronTopIcon from 'components/svg/ChevronTop';
import EducationIcon from 'components/svg/Education';
import ExperienceIcon from 'components/svg/Experience';
import InterestsIcon from 'components/svg/Interests';
import SkillsIcon from 'components/svg/Skills';
import ToolboxIcon from 'components/svg/Toolbox';
import useInstallPWA from 'hooks/useInstallPWA';
import React, { useRef } from 'react';

const IndexPage: React.FC = () => {
  const experiencesRef = useRef<HTMLDivElement>();
  const skillsRef = useRef<HTMLDivElement>();
  const toolboxRef = useRef<HTMLDivElement>();
  const interestsRef = useRef<HTMLDivElement>();
  const educationRef = useRef<HTMLDivElement>();
  const sections: Models.Section[] = [
    { Icon: ChevronTopIcon, ref: 'top', title: 'top' },
    { Component: Experience, Icon: ExperienceIcon, ref: experiencesRef, title: 'experience' },
    { Component: Skills, Icon: SkillsIcon, ref: skillsRef, title: 'skills' },
    { Component: Toolbox, Icon: ToolboxIcon, ref: toolboxRef, title: 'toolbox' },
    { Component: Interests, Icon: InterestsIcon, ref: interestsRef, title: 'interests' },
    { Component: Education, Icon: EducationIcon, ref: educationRef, title: 'education' },
    { Icon: ChevronBottomIcon, ref: 'bottom', title: 'bottom' },
  ];
  useInstallPWA();
  return (
    <Layout path="/" title="CV">
      <Details />
      {sections
        .filter(b => !!b.Component)
        .map(b => (
          <b.Component key={b.title} ref={b.ref} />
        ))}
      <ActionManager sections={sections} position="bottom-right" />
    </Layout>
  );
};

IndexPage.displayName = 'IndexPage';

export default IndexPage;
