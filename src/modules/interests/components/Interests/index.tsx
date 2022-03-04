import Content from '@/common/components/layout/Content';
import Section from '@/common/components/layout/Section';
import LabeledIconsBlock from '@/common/components/misc/LabeledIconsBlock';
import React, { forwardRef } from 'react';
import useInterestsData from '../../hooks/useInterestsData';

const Interests = forwardRef<HTMLDivElement>(function Interests(_, ref): JSX.Element {
  const interests = useInterestsData();

  return (
    <Section className="mt-0 print:mt-4" halfWidth ref={ref} title="interests">
      <Content>
        <LabeledIconsBlock items={interests} />
      </Content>
    </Section>
  );
});

export default Interests;
