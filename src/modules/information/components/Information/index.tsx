import Content from '@/common/components/layout/Content';
import Section from '@/common/components/layout/Section';
import useInformationData from '../../hooks/useInformationData';
import Contacts from './Contacts';
import PersonalDetails from './PersonalDetails';
import PortraitAndJobTitle from './PortraitAndJobTitle';

function Information(): JSX.Element {
  const { contacts, jobTitle, personalDetails } = useInformationData();

  return (
    <Section className="">
      <Content>
        <PersonalDetails items={personalDetails} />
        <PortraitAndJobTitle jobTitle={jobTitle} />
        <Contacts items={contacts} />
      </Content>
    </Section>
  );
}

export default Information;
