import Content from '@/common/components/layout/Content';
import Section from '@/common/components/layout/Section';
import LabeledIconsBlock from '@/common/components/misc/LabeledIconsBlock';
import React, { forwardRef } from 'react';
import useToolboxData from '../../hooks/useToolboxData';

const Toolbox = forwardRef<HTMLDivElement>(function Toolbox(_, ref): JSX.Element {
  const toolbox = useToolboxData();

  return (
    <Section className="mt-0 print:mt-4" halfWidth ref={ref} title="toolbox">
      <Content>
        <LabeledIconsBlock items={toolbox} />
      </Content>
    </Section>
  );
});

export default Toolbox;
