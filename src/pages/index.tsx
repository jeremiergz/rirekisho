import React, { FunctionComponent, useRef } from 'react';
import Details from '../components/app/Details';
import Education from '../components/app/Education';
import Interests from '../components/app/Interests';
import Skills from '../components/app/Skills';
import Toolbox from '../components/app/Toolbox';
import ActionManager from '../components/common/ActionManager';
import Layout from '../components/common/Layout';
import ChevronBottomIcon from '../components/svg/ChevronBottom';
import ChevronTopIcon from '../components/svg/ChevronTop';
import EducationIcon from '../components/svg/Education';
import InterestsIcon from '../components/svg/Interests';
import SkillsIcon from '../components/svg/Skills';
import ToolboxIcon from '../components/svg/Toolbox';

const IndexPage: FunctionComponent = () => {
  const printableRef = useRef<HTMLDivElement>();
  const skillsRef = useRef<HTMLDivElement>();
  const toolboxRef = useRef<HTMLDivElement>();
  const interestsRef = useRef<HTMLDivElement>();
  const educationRef = useRef<HTMLDivElement>();
  const actions: Models.Action[] = [
    { Icon: ChevronTopIcon, ref: 'top', title: 'top' },
    { Icon: SkillsIcon, ref: skillsRef, title: 'skills' },
    { Icon: ToolboxIcon, ref: toolboxRef, title: 'toolbox' },
    { Icon: InterestsIcon, ref: interestsRef, title: 'interests' },
    { Icon: EducationIcon, ref: educationRef, title: 'education' },
    { Icon: ChevronBottomIcon, ref: 'bottom', title: 'bottom' },
  ];
  return (
    <Layout.Base ref={printableRef} path="/" title="CV">
      <Details />
      <Skills ref={skillsRef} />
      <Toolbox ref={toolboxRef} />
      <Interests ref={interestsRef} />
      <Education ref={educationRef} />
      <ActionManager actions={actions} position="bottom-right" />
    </Layout.Base>
  );
};

IndexPage.displayName = 'IndexPage';

export default IndexPage;
