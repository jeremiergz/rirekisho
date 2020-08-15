import Layout from 'components/Layout';
import Grid from 'components/primitives/Grid';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Contacts from './Contacts';
import Information from './Information';
import PortraitAndJobTitle from './PortraitAndJobTitle';

const Details: React.FC = () => {
  const {
    details: { contacts, jobTitle, personalInformation },
  } = useStaticQuery<GraphQL.DetailsData>(graphql`
    query DetailsData {
      details: personalDetailsJson {
        contacts {
          label
          link
          sortOrder
          type
        }
        jobTitle
        personalInformation {
          label
          sortOrder
          value
        }
      }
    }
  `);
  return (
    <Grid as="section" gridColumn="span 2" justifyContent="center" variant="item">
      <Layout.Content marginY={4} paddingX={{ _: 0, laptopS: 48 }}>
        <Information items={personalInformation} order={{ _: 2, tablet: 1 }} />
        <PortraitAndJobTitle jobTitle={jobTitle} order={{ _: 1, tablet: 2 }} />
        <Contacts items={contacts} order={3} />
      </Layout.Content>
    </Grid>
  );
};

Details.displayName = 'Details';

export default Details;
