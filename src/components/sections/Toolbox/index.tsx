import LabeledIconsBlock from '@/components/common/LabeledIconsBlock';
import Layout from '@/components/common/Layout';
import useToolboxData from '@/components/hooks/data/useToolboxData';
import React, { forwardRef } from 'react';

const Toolbox = forwardRef<HTMLDivElement>(function Toolbox(_, ref): JSX.Element {
  const toolbox = useToolboxData();

  return (
    <Layout.Section className="mt-0" halfWidth ref={ref} title="toolbox">
      <Layout.Content>
        <LabeledIconsBlock items={toolbox} />
      </Layout.Content>
    </Layout.Section>
  );
});

export default Toolbox;
