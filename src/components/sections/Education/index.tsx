import Layout from '@/components/common/Layout';
import useEducationData from '@/components/hooks/data/useEducationData';
import React, { forwardRef } from 'react';
import Degree from './Degree';
import TimelineDot from './TimelineDot';
import TimelineLine from './TimelineLine';

const Education = forwardRef<HTMLDivElement>(function Education(_, ref): JSX.Element {
  const {
    education: { nodes: education },
  } = useEducationData();

  return (
    <Layout.Section ref={ref} title="education">
      <Layout.Content reverse>
        {education.map((degree, index) => (
          <div className="flex flex-1 flex-col items-center relative" key={degree.name}>
            <span className="font-bold text-secondary dark:text-secondary-dark text-xl md:text-base">
              {degree.issueDate.substring(0, 4)}
            </span>
            <TimelineDot />
            {index !== 0 && (
              <TimelineLine>
                <line x1="0%" x2="50%" y1="27%" y2="27%" />
              </TimelineLine>
            )}
            {index !== education.length - 1 && (
              <TimelineLine>
                <line x1="50%" x2="100%" y1="27%" y2="27%" />
              </TimelineLine>
            )}
            <Degree city={degree.city} countryCode={degree.countryCode} name={degree.name} school={degree.school} />
            {index !== 0 && <div className="bg-primary h-8 md:hidden my-1 rounded-xl w-2" />}
          </div>
        ))}
      </Layout.Content>
    </Layout.Section>
  );
});

export default Education;
