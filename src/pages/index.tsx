import Grid from 'components/primitives/Grid';
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
import ChevronBottomIcon from 'components/svg/ChevronBottom';
import ChevronTopIcon from 'components/svg/ChevronTop';
import EducationIcon from 'components/svg/sections/Education';
import ExperienceIcon from 'components/svg/sections/Experience';
import InterestsIcon from 'components/svg/sections/Interests';
import SkillsIcon from 'components/svg/sections/Skills';
import ToolboxIcon from 'components/svg/sections/Toolbox';
import { graphql, useStaticQuery } from 'gatsby';
import useInstallPWA from 'hooks/useInstallPWA';
import useTheme from 'hooks/useTheme';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    color: ${({ theme }) => theme['colors'].text};
    font-family: ${({ theme }) => theme['fonts'].main};
    font-weight: 400;
  }
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(49, 133, 154, 0.5);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(49, 133, 154, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(49, 133, 154, 0);
    }
  }
  @page {
    size: A4 portrait;
    margin: 0mm;
  }
  @media print {
    body {
      /* Force displaying of background elements on print */
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
    }
  }
`;

const IndexPage: React.FC = () => {
  const {
    site: {
      siteMetadata: { description, keywords },
    },
  } = useStaticQuery<GraphQL.IndexData>(graphql`
    query IndexData {
      site {
        siteMetadata {
          description
          keywords
        }
      }
    }
  `);
  const theme = useTheme();
  const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);
  const [originalDocTitle, setOriginalDocTitle] = useState<string>();
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
  const menuSections = sections.slice(1, sections.length - 1);
  const handleToggleSideMenu = useCallback(() => setIsSideMenuOpened(!isSideMenuOpened), [isSideMenuOpened]);
  useInstallPWA();
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
      <GlobalStyle />
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
        <SideMenu isOpened={isSideMenuOpened} onClick={handleToggleSideMenu} sections={menuSections} />
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
