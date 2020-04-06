import { graphql, useStaticQuery } from 'gatsby';
import React, { forwardRef } from 'react';
import LabeledIconsBlock from '../../common/LabeledIconsBlock';
import Layout from '../../common/Layout';

const Interests = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    interestNodes: { nodes: interests },
  } = useStaticQuery<GraphQL.InterestsData>(graphql`
    query InterestsData {
      interestNodes: allInterestsJson {
        nodes {
          img
          name
          sortOrder
        }
      }
    }
  `);
  return (
    <Layout.Section gridColumn={{ _: 'span 2', tablet: 'span 1' }} ref={ref} title="interests">
      <Layout.Content alignItems="center" marginBottom={4}>
        <LabeledIconsBlock items={interests} />
      </Layout.Content>
    </Layout.Section>
  );
});

Interests.displayName = 'Interests';

export default Interests;
