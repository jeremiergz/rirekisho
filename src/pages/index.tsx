import Menu from '@/common/components/misc/Menu';
import SEO from '@/common/components/misc/SEO';
import EducationIcon from '@/common/components/svgs/sections/Education';
import ExperienceIcon from '@/common/components/svgs/sections/Experience';
import InterestsIcon from '@/common/components/svgs/sections/Interests';
import SkillsIcon from '@/common/components/svgs/sections/Skills';
import ToolboxIcon from '@/common/components/svgs/sections/Toolbox';
import Section from '@/common/models/Section';
import Education from '@/modules/education/components/Education';
import Experience from '@/modules/experience/components/Experience';
import Footer from '@/modules/footer/components/Footer';
import Header from '@/modules/header/components/Header';
import Information from '@/modules/information/components/Information';
import Interests from '@/modules/interests/components/Interests';
import Skills from '@/modules/skills/components/Skills';
import Toolbox from '@/modules/toolbox/components/Toolbox';
import { useEffect, useRef, useState } from 'react';

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
      const theme = window.localStorage.getItem('theme');
      document.title = `Jeremie Rodriguez - CV (EN-${theme})`;
    };
    window.onafterprint = () => {
      document.title = originalDocTitle;
    };

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

export function Head(): JSX.Element {
  return <SEO />;
}

export default HomePage;
