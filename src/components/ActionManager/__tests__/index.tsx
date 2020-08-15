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
import React, { createRef } from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import ActionManager from '..';

describe('components/ActionManager Test Suite', () => {
  it('matches snapshot', () => {
    const experiencesRef = createRef<HTMLDivElement>();
    const skillsRef = createRef<HTMLDivElement>();
    const toolboxRef = createRef<HTMLDivElement>();
    const interestsRef = createRef<HTMLDivElement>();
    const educationRef = createRef<HTMLDivElement>();
    const sections: Models.Section[] = [
      { Icon: ChevronTopIcon, ref: 'top', title: 'top' },
      { Component: Experience, Icon: ExperienceIcon, ref: experiencesRef, title: 'experience' },
      { Component: Skills, Icon: SkillsIcon, ref: skillsRef, title: 'skills' },
      { Component: Toolbox, Icon: ToolboxIcon, ref: toolboxRef, title: 'toolbox' },
      { Component: Interests, Icon: InterestsIcon, ref: interestsRef, title: 'interests' },
      { Component: Education, Icon: EducationIcon, ref: educationRef, title: 'education' },
      { Icon: ChevronBottomIcon, ref: 'bottom', title: 'bottom' },
    ];
    const jsx = (
      <ThemeProvider theme={theme}>
        <ActionManager sections={sections} position="bottom-right" />
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
