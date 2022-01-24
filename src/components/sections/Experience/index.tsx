import Layout from '@/components/common/Layout';
import useExperiencesData from '@/components/hooks/data/useExperiencesData';
import React, { forwardRef } from 'react';
import ExperienceBlock from './ExperienceBlock';

const Experience = forwardRef<HTMLDivElement>(function Experience(_, ref): JSX.Element {
  const experiences = useExperiencesData();

  return (
    <Layout.Section className="mb-0" ref={ref} title="experience">
      <Layout.Content reverse>
        <div className="grid grid-cols-2 gap-x-8 md:gap-x-16">
          {experiences
            .sort((a, b) => new Date(b.timeline.startDate).getTime() - new Date(a.timeline.startDate).getTime())
            .map(item => (
              <ExperienceBlock item={item} key={item.timeline.startDate} />
            ))}
        </div>
      </Layout.Content>
    </Layout.Section>
  );
});

export default Experience;
