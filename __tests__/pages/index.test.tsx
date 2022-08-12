import LayoutComponent from '@/common/components/layout/Layout';
import useSiteMetadata, * as Layout from '@/common/hooks/useSiteMetadata';
import useEducationData, * as Education from '@/modules/education/hooks/useEducationData';
import useExperiencesData, * as Experiences from '@/modules/experience/hooks/useExperiencesData';
import useFooterData, * as Footer from '@/modules/footer/hooks/useFooterData';
import useLanguagesData, * as Languages from '@/modules/header/hooks/useLanguagesData';
import useCertificationsData, * as Certifications from '@/modules/information/hooks/useCertificationsData';
import useInformationData, * as Information from '@/modules/information/hooks/useInformationData';
import useInterestsData, * as Interests from '@/modules/interests/hooks/useInterestsData';
import useSkillsData, * as Skills from '@/modules/skills/hooks/useSkillsData';
import useToolboxData, * as Toolbox from '@/modules/toolbox/hooks/useToolboxData';
import HomePage from '@/pages';
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
    jest.spyOn(Layout, 'default').mockReturnValue(layoutData as unknown as ReturnType<typeof useSiteMetadata>);
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
