import Layout from '@common/Layout';
import Grid from '@primitives/Grid';
import { useData } from '@providers/DataProvider';
import React from 'react';
import Contacts from './Contacts';
import Information from './Information';
import PortraitAndJobTitle from './PortraitAndJobTitle';

const Details: React.FC = () => {
  const {
    personalDetailsData: { contacts, jobTitle, personalInformation },
  } = useData();
  return (
    <Grid as="section" gridColumn="span 2" justifyContent="center" variant="item">
      <Layout.Content marginBottom={4} marginTop={2} paddingX={{ _: 0, laptopS: 48 }}>
        <Information items={personalInformation as Models.PersonalInformation[]} order={{ _: 2, tablet: 1 }} />
        <PortraitAndJobTitle jobTitle={jobTitle} order={{ _: 1, tablet: 2 }} />
        <Contacts items={contacts} order={3} />
      </Layout.Content>
    </Grid>
  );
};

Details.displayName = 'Details';

export default Details;
