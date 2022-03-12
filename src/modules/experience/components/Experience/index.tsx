import Content from '@/common/components/layout/Content';
import Section from '@/common/components/layout/Section';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import useExperiencesData from '../../hooks/useExperiencesData';
import ExperienceBlock from './ExperienceBlock';

const Experience = forwardRef<HTMLDivElement>(function Experience(_, ref): JSX.Element {
  const experiences = useExperiencesData();

  return (
    <Section className="my-0" ref={ref} title="experience">
      <Content reverse>
        <div>
          {experiences
            .sort((a, b) => new Date(b.timeline.startDate).getTime() - new Date(a.timeline.startDate).getTime())
            .map((item, index) => (
              <React.Fragment key={item.timeline.startDate}>
                <ExperienceBlock item={item} key={item.timeline.startDate} />
                {index !== experiences.length - 1 && (
                  <div
                    className={clsx('my-4 h-px w-auto bg-gray-200 transition-colors dark:bg-gray-700', 'print:my-3')}
                  />
                )}
              </React.Fragment>
            ))}
        </div>
      </Content>
    </Section>
  );
});

export default Experience;
