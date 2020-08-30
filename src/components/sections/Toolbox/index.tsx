import LabeledIconsBlock from 'components/LabeledIconsBlock';
import Layout from 'components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import React, { forwardRef } from 'react';

const Toolbox = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    toolNodes: { nodes: tools },
  } = useStaticQuery<GraphQL.ToolboxDataQuery>(graphql`
    query ToolboxData {
      toolNodes: allToolboxJson {
        nodes {
          img
          link
          name
          sortOrder
        }
      }
    }
  `);
  return (
    <Layout.Section contentVisibility="auto" gridColumn={{ _: 'span 2', tablet: 'span 1' }} ref={ref} title="toolbox">
      <Layout.Content alignItems="center" marginBottom={4}>
        <LabeledIconsBlock items={tools as Models.LabeledItem[]} />
      </Layout.Content>
    </Layout.Section>
  );
});

Toolbox.displayName = 'Toolbox';

export default Toolbox;
