import LabeledIconsBlock from 'components/LabeledIconsBlock';
import Layout from 'components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import React, { forwardRef } from 'react';

const Interests = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    interestNodes: { nodes: interests },
  } = useStaticQuery<GraphQL.InterestsDataQuery>(graphql`
    query InterestsData {
      interestNodes: allInterestsJson {
        nodes {
          name
          sortOrder
        }
      }
    }
  `);
  return (
    <Layout.Section gridColumn={{ _: 'span 2', tablet: 'span 1' }} ref={ref} title="interests">
      <Layout.Content alignItems="center" marginBottom={4}>
        <LabeledIconsBlock items={interests as Models.LabeledItem[]} />
      </Layout.Content>
    </Layout.Section>
  );
});

Interests.displayName = 'Interests';

export default Interests;
