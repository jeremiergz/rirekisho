import Layout from '@/components/common/Layout';
import usePersonalDetailsData from '@/components/hooks/data/usePersonalDetailsData';
import React from 'react';
import Contacts from './Contacts';
import Information from './Information';
import PortraitAndJobTitle from './PortraitAndJobTitle';

function Details(): JSX.Element {
  const {
    personalDetails: { contacts, jobTitle, personalInformation },
  } = usePersonalDetailsData();

  return (
    <Layout.Section>
      <Layout.Content>
        <Information items={personalInformation} />
        <PortraitAndJobTitle jobTitle={jobTitle} />
        <Contacts items={contacts} />
      </Layout.Content>
    </Layout.Section>
  );
}

export default Details;
