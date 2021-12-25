import Layout from '@/components/common/Layout';
import useInformationData from '@/components/hooks/data/useInformationData';
import React from 'react';
import Contacts from './Contacts';
import PersonalDetails from './PersonalDetails';
import PortraitAndJobTitle from './PortraitAndJobTitle';

function Information(): JSX.Element {
  const { contacts, jobTitle, personalDetails } = useInformationData();

  return (
    <Layout.Section>
      <Layout.Content>
        <PersonalDetails items={personalDetails} />
        <PortraitAndJobTitle jobTitle={jobTitle} />
        <Contacts items={contacts} />
      </Layout.Content>
    </Layout.Section>
  );
}

export default Information;
