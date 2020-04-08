import React, { FunctionComponent, useRef } from 'react';
import ActionManager from '../components/app/ActionManager';
import Details from '../components/app/Details';
import Education from '../components/app/Education';
import Experience from '../components/app/Experience';
import Interests from '../components/app/Interests';
import Skills from '../components/app/Skills';
import Toolbox from '../components/app/Toolbox';
import Layout from '../components/common/Layout';
import ChevronBottomIcon from '../components/svg/ChevronBottom';
import ChevronTopIcon from '../components/svg/ChevronTop';
import EducationIcon from '../components/svg/Education';
import ExperienceIcon from '../components/svg/Experience';
import InterestsIcon from '../components/svg/Interests';
import SkillsIcon from '../components/svg/Skills';
import ToolboxIcon from '../components/svg/Toolbox';

const IndexPage: FunctionComponent = () => {
  const printableRef = useRef<HTMLDivElement>();
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
  return (
    <Layout.Base ref={printableRef} path="/" title="CV">
      <Details />
      {sections
        .filter(b => !!b.Component)
        .map(b => (
          <b.Component key={b.title} ref={b.ref} />
        ))}
      <ActionManager sections={sections} position="bottom-right" />
    </Layout.Base>
  );
};

IndexPage.displayName = 'IndexPage';

export default IndexPage;
