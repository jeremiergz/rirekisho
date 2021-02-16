import LabeledIconsBlock from '@common/LabeledIconsBlock';
import Layout from '@common/Layout';
import { useData } from '@providers/DataProvider';
import React, { forwardRef } from 'react';

const Interests = forwardRef<HTMLDivElement>((_, ref) => {
  const { interestsData } = useData();
  return (
    <Layout.Section gridColumn={{ _: 'span 2', tablet: 'span 1' }} ref={ref} title="interests">
      <Layout.Content alignItems="center" marginBottom={4}>
        <LabeledIconsBlock items={interestsData} />
      </Layout.Content>
    </Layout.Section>
  );
});

Interests.displayName = 'Interests';

export default Interests;
