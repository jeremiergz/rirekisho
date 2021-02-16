import Menu from '@common/Menu';
import SEO from '@common/SEO';
import Compose from '@kobionic/react-compose';
import Grid from '@primitives/Grid';
import DataProvider from '@providers/DataProvider';
import ThemeProvider from '@providers/ThemeProvider';
import Details from '@sections/Details';
import Education from '@sections/Education';
import Experience from '@sections/Experience';
import Footer from '@sections/Footer';
import Header from '@sections/Header';
import Interests from '@sections/Interests';
import Skills from '@sections/Skills';
import Toolbox from '@sections/Toolbox';
import EducationIcon from '@svgs/sections/Education';
import ExperienceIcon from '@svgs/sections/Experience';
import InterestsIcon from '@svgs/sections/Interests';
import SkillsIcon from '@svgs/sections/Skills';
import ToolboxIcon from '@svgs/sections/Toolbox';
import {
  getEducationData,
  getExperiencesData,
  getInterestsData,
  getLanguagesData,
  getPersonalDetailsData,
  getSkillsData,
  getThemeData,
  getToolboxData,
  listImages,
} from '@utils/server';
import { GetStaticPropsContext } from 'next';
import React, { useEffect, useRef, useState } from 'react';

const IndexPage: React.FC<IndexPageProps> = ({
  educationData,
  experiencesData,
  images,
  imagesIndex,
  interestsData,
  languagesData,
  personalDetailsData,
  skillsData,
  themeData,
  toolboxData,
}) => {
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
    <Compose
      components={[
        {
          component: DataProvider,
          props: {
            educationData,
            experiencesData,
            images,
            imagesIndex,
            interestsData,
            languagesData,
            personalDetailsData,
            skillsData,
            themeData,
            toolboxData,
          },
        },
        ThemeProvider,
      ]}
    >
      <SEO description={process.env.APP_DESCRIPTION} keywords={process.env.APP_KEYWORDS.split(',')} />
      <Header />
      <Menu sections={sections} />
      <Grid
        as="main"
        gridColumnGap={{ _: 32, tablet: 64 }}
        gridTemplateColumns="auto auto"
        margin="auto"
        maxWidth={1100}
        paddingX={{ _: 3, tablet: 4, laptopS: 48 }}
        variant="container"
      >
        <Details />
        {sections
          .filter(s => !!s.Component)
          .map(s => (
            <s.Component key={s.title} ref={s.ref} />
          ))}
      </Grid>
      <Footer />
    </Compose>
  );
};

IndexPage.displayName = 'IndexPage';

export async function getStaticProps(_: GetStaticPropsContext) {
  const [
    educationData,
    experiencesData,
    interestsData,
    languagesData,
    personalDetailsData,
    skillsData,
    themeData,
    toolboxData,
    { images, imagesIndex },
  ] = await Promise.all([
    getEducationData(),
    getExperiencesData(),
    getInterestsData(),
    getLanguagesData(),
    getPersonalDetailsData(),
    getSkillsData(),
    getThemeData(),
    getToolboxData(),
    listImages(),
  ]);
  return {
    props: {
      educationData,
      experiencesData,
      images,
      imagesIndex,
      interestsData,
      languagesData,
      personalDetailsData,
      skillsData,
      themeData,
      toolboxData,
    },
  };
}
export type IndexPageProps = {
  educationData: Models.Degree[];
  experiencesData: Models.Experience[];
  images: string[];
  imagesIndex: Record<string, string>;
  interestsData: Models.Interest[];
  languagesData: Models.Language[];
  personalDetailsData: Models.PersonalDetails;
  skillsData: Models.Skill[];
  themeData: Theme.Data;
  toolboxData: Models.Tool[];
};
export default IndexPage;
