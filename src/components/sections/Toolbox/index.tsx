import LabeledIconsBlock from '@common/LabeledIconsBlock';
import Layout from '@common/Layout';
import { useData } from '@providers/DataProvider';
import React, { forwardRef } from 'react';

const Toolbox = forwardRef<HTMLDivElement>((_, ref) => {
  const { toolboxData } = useData();
  return (
    <Layout.Section gridColumn={{ _: 'span 2', tablet: 'span 1' }} ref={ref} title="toolbox">
      <Layout.Content alignItems="center" marginBottom={4}>
        <LabeledIconsBlock items={toolboxData} />
      </Layout.Content>
    </Layout.Section>
  );
});

Toolbox.displayName = 'Toolbox';

export default Toolbox;
