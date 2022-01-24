import Menu from '@/components/common/Menu';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import Information from '@/components/sections/Information';
import Interests from '@/components/sections/Interests';
import Skills from '@/components/sections/Skills';
import Toolbox from '@/components/sections/Toolbox';
import EducationIcon from '@/components/svgs/sections/Education';
import ExperienceIcon from '@/components/svgs/sections/Experience';
import InterestsIcon from '@/components/svgs/sections/Interests';
import SkillsIcon from '@/components/svgs/sections/Skills';
import ToolboxIcon from '@/components/svgs/sections/Toolbox';
import Section from '@/models/Section';
import React, { useEffect, useRef, useState } from 'react';

function HomePage(): JSX.Element {
  const [originalDocTitle, setOriginalDocTitle] = useState<string>();
  const experiencesRef = useRef<HTMLDivElement>();
  const skillsRef = useRef<HTMLDivElement>();
  const toolboxRef = useRef<HTMLDivElement>();
  const interestsRef = useRef<HTMLDivElement>();
  const educationRef = useRef<HTMLDivElement>();
  const sections: Section[] = [
    new Section({ Component: Experience, Icon: ExperienceIcon, ref: experiencesRef, title: 'experience' }),
    new Section({ Component: Skills, Icon: SkillsIcon, ref: skillsRef, title: 'skills' }),
    new Section({ Component: Toolbox, Icon: ToolboxIcon, ref: toolboxRef, title: 'toolbox' }),
    new Section({ Component: Interests, Icon: InterestsIcon, ref: interestsRef, title: 'interests' }),
    new Section({ Component: Education, Icon: EducationIcon, ref: educationRef, title: 'education' }),
  ];

  useEffect(() => {
    window.onbeforeprint = () => {
      setOriginalDocTitle(document.title);
      document.title = 'Jeremie Rodriguez - CV (EN)';
    };
    window.onafterprint = () => (document.title = originalDocTitle);

    return () => {
      window.onbeforeprint = null;
      window.onafterprint = null;
    };
  }, [originalDocTitle]);

  return (
    <>
      <Header />
      <Menu sections={sections} />
      <main className="m-auto grid max-w-7xl grid-cols-2 gap-x-8 px-6 md:gap-x-16 md:px-8 lg:px-12">
        <Information />
        {sections
          .filter(section => !!section.Component)
          .map(section => (
            <section.Component key={section.title} ref={typeof section.ref !== 'string' && section.ref} />
          ))}
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
