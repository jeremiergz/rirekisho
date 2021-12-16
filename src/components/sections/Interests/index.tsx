import LabeledIconsBlock from '@/components/common/LabeledIconsBlock';
import Layout from '@/components/common/Layout';
import useInterestsData from '@/components/hooks/data/useInterestsData';
import React, { forwardRef } from 'react';

const Interests = forwardRef<HTMLDivElement>(function Interests(_, ref): JSX.Element {
  const {
    interests: { nodes: interest },
  } = useInterestsData();

  return (
    <Layout.Section className="mt-0" halfWidth ref={ref} title="interests">
      <Layout.Content>
        <LabeledIconsBlock items={interest} />
      </Layout.Content>
    </Layout.Section>
  );
});

export default Interests;
