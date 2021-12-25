import LayoutComponent from '@/components/common/Layout';
import useCertificationsData, * as Certifications from '@/components/hooks/data/useCertificationsData';
import useEducationData, * as Education from '@/components/hooks/data/useEducationData';
import useExperiencesData, * as Experiences from '@/components/hooks/data/useExperiencesData';
import useFooterData, * as Footer from '@/components/hooks/data/useFooterData';
import useInformationData, * as Information from '@/components/hooks/data/useInformationData';
import useInterestsData, * as Interests from '@/components/hooks/data/useInterestsData';
import useLanguagesData, * as Languages from '@/components/hooks/data/useLanguagesData';
import useLayoutData, * as Layout from '@/components/hooks/data/useLayoutData';
import useSkillsData, * as Skills from '@/components/hooks/data/useSkillsData';
import useToolboxData, * as Toolbox from '@/components/hooks/data/useToolboxData';
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
      informationData,
      interestsData,
      languagesData,
      layoutData,
      skillsData,
      toolboxData,
    } = mockData;

    jest
      .spyOn(Certifications, 'default')
      .mockReturnValue(certificationsData as unknown as ReturnType<typeof useCertificationsData>);
    jest.spyOn(Education, 'default').mockReturnValue(educationData as unknown as ReturnType<typeof useEducationData>);
    jest
      .spyOn(Experiences, 'default')
      .mockReturnValue(experiencesData as unknown as ReturnType<typeof useExperiencesData>);
    jest.spyOn(Footer, 'default').mockReturnValue(footerData as unknown as ReturnType<typeof useFooterData>);
    jest
      .spyOn(Information, 'default')
      .mockReturnValue(informationData as unknown as ReturnType<typeof useInformationData>);
    jest.spyOn(Interests, 'default').mockReturnValue(interestsData as unknown as ReturnType<typeof useInterestsData>);
    jest.spyOn(Languages, 'default').mockReturnValue(languagesData as unknown as ReturnType<typeof useLanguagesData>);
    jest.spyOn(Layout, 'default').mockReturnValue(layoutData as unknown as ReturnType<typeof useLayoutData>);
    jest.spyOn(Skills, 'default').mockReturnValue(skillsData as unknown as ReturnType<typeof useSkillsData>);
    jest.spyOn(Toolbox, 'default').mockReturnValue(toolboxData as unknown as ReturnType<typeof useToolboxData>);
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
