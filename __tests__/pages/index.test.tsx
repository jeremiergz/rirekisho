import LayoutComponent from '@/components/common/Layout';
import type { CertificationsQueryData } from '@/components/hooks/data/useCertificationsData';
import * as Certifications from '@/components/hooks/data/useCertificationsData';
import type { EducationQueryData } from '@/components/hooks/data/useEducationData';
import * as Education from '@/components/hooks/data/useEducationData';
import type { ExperiencesQueryData } from '@/components/hooks/data/useExperiencesData';
import * as Experiences from '@/components/hooks/data/useExperiencesData';
import type { FooterQueryData } from '@/components/hooks/data/useFooterData';
import * as Footer from '@/components/hooks/data/useFooterData';
import type { InterestsQueryData } from '@/components/hooks/data/useInterestsData';
import * as Interests from '@/components/hooks/data/useInterestsData';
import type { LanguagesQueryData } from '@/components/hooks/data/useLanguagesData';
import * as Languages from '@/components/hooks/data/useLanguagesData';
import type { LayoutQueryData } from '@/components/hooks/data/useLayoutData';
import * as Layout from '@/components/hooks/data/useLayoutData';
import type { PersonalDetailsQueryData } from '@/components/hooks/data/usePersonalDetailsData';
import * as PersonalDetails from '@/components/hooks/data/usePersonalDetailsData';
import type { SkillsQueryData } from '@/components/hooks/data/useSkillsData';
import * as Skills from '@/components/hooks/data/useSkillsData';
import type { ToolboxQueryData } from '@/components/hooks/data/useToolboxData';
import * as Toolbox from '@/components/hooks/data/useToolboxData';
import HomePage from '@/pages';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import mockData from './mock.json';

describe('pages/index Test Suite', () => {
  beforeAll(() => {
    const {
      certificationsData,
      educationData,
      experiencesData,
      footerData,
      interestsData,
      languagesData,
      layoutData,
      personalDetailsData,
      skillsData,
      toolboxData,
    } = mockData;

    jest.spyOn(Certifications, 'default').mockReturnValue(certificationsData as unknown as CertificationsQueryData);
    jest.spyOn(Education, 'default').mockReturnValue(educationData as unknown as EducationQueryData);
    jest.spyOn(Experiences, 'default').mockReturnValue(experiencesData as unknown as ExperiencesQueryData);
    jest.spyOn(Footer, 'default').mockReturnValue(footerData as unknown as FooterQueryData);
    jest.spyOn(Interests, 'default').mockReturnValue(interestsData as unknown as InterestsQueryData);
    jest.spyOn(Languages, 'default').mockReturnValue(languagesData as unknown as LanguagesQueryData);
    jest.spyOn(Layout, 'default').mockReturnValue(layoutData as unknown as LayoutQueryData);
    jest.spyOn(PersonalDetails, 'default').mockReturnValue(personalDetailsData as unknown as PersonalDetailsQueryData);
    jest.spyOn(Skills, 'default').mockReturnValue(skillsData as unknown as SkillsQueryData);
    jest.spyOn(Toolbox, 'default').mockReturnValue(toolboxData as unknown as ToolboxQueryData);
  });

  it('matches snapshot', () => {
    const jsx = (
      <LayoutComponent>
        <HomePage />
      </LayoutComponent>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
