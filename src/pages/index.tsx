import Grid from 'components/primitives/Grid';
import { useTheme } from 'components/providers/ThemeProvider';
import Details from 'components/sections/Details';
import Education from 'components/sections/Education';
import Experience from 'components/sections/Experience';
import Footer from 'components/sections/Footer';
import Header from 'components/sections/Header';
import Interests from 'components/sections/Interests';
import Skills from 'components/sections/Skills';
import Toolbox from 'components/sections/Toolbox';
import SEO from 'components/SEO';
import SideMenu from 'components/SideMenu';
import EducationIcon from 'components/svgs/sections/Education';
import ExperienceIcon from 'components/svgs/sections/Experience';
import InterestsIcon from 'components/svgs/sections/Interests';
import SkillsIcon from 'components/svgs/sections/Skills';
import ToolboxIcon from 'components/svgs/sections/Toolbox';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const IndexPage: React.FC = () => {
  const {
    site: {
      siteMetadata: { description, keywords },
    },
  } = useStaticQuery<GraphQL.IndexDataQuery>(graphql`
    query IndexData {
      site {
        siteMetadata {
          description
          keywords
        }
      }
    }
  `);
  const { theme } = useTheme();
  const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);
  const [originalDocTitle, setOriginalDocTitle] = useState<string>();
  const experiencesRef = useRef<HTMLDivElement>();
  const skillsRef = useRef<HTMLDivElement>();
  const toolboxRef = useRef<HTMLDivElement>();
  const interestsRef = useRef<HTMLDivElement>();
  const educationRef = useRef<HTMLDivElement>();
  const sections: Models.Section[] = [
    { Component: Experience, Icon: ExperienceIcon, ref: experiencesRef, title: 'experience' },
    { Component: Skills, Icon: SkillsIcon, ref: skillsRef, title: 'skills' },
    { Component: Toolbox, Icon: ToolboxIcon, ref: toolboxRef, title: 'toolbox' },
    { Component: Interests, Icon: InterestsIcon, ref: interestsRef, title: 'interests' },
    { Component: Education, Icon: EducationIcon, ref: educationRef, title: 'education' },
  ];
  const handleToggleSideMenu = useCallback(() => setIsSideMenuOpened(!isSideMenuOpened), [isSideMenuOpened]);
  useEffect(() => {
    window.onbeforeprint = () => {
      setOriginalDocTitle(document.title);
      document.title = 'Jeremie Rodriguez - Resume (EN)';
    };
    window.onafterprint = () => (document.title = originalDocTitle);
    return () => {
      window.onbeforeprint = null;
      window.onafterprint = null;
    };
  }, [originalDocTitle]);
  return (
    <>
      <SEO description={description} keywords={keywords} />
      <Header onMenuClick={handleToggleSideMenu} />
      <Grid
        as="main"
        gridColumnGap={{ _: 32, tablet: 64 }}
        gridTemplateColumns="auto auto"
        margin="auto"
        maxWidth={theme.breakpoints['laptopM']}
        paddingX={{ _: 3, tablet: 4, laptopS: 48 }}
        variant="container"
      >
        <SideMenu isOpened={isSideMenuOpened} onClick={handleToggleSideMenu} sections={sections} />
        <Details />
        {sections
          .filter(s => !!s.Component)
          .map(s => (
            <s.Component key={s.title} ref={s.ref} />
          ))}
      </Grid>
      <Footer />
    </>
  );
};

IndexPage.displayName = 'IndexPage';

export default IndexPage;
