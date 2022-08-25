import Content from '@/common/components/layout/Content';
import Section from '@/common/components/layout/Section';
import clsx from 'clsx';
import { forwardRef } from 'react';
import useEducationData from '../../hooks/useEducationData';
import Degree from './Degree';
import TimelineDot from './TimelineDot';
import TimelineLine from './TimelineLine';

const Education = forwardRef<HTMLDivElement>(function Education(_, ref): JSX.Element {
  const education = useEducationData();

  return (
    <Section className="print:mt-2" ref={ref} title="education">
      <Content reverse>
        {education
          .sort((a, b) => new Date(a.issueDate).getTime() - new Date(b.issueDate).getTime())
          .map((degree, index) => (
            <div className="relative flex flex-1 flex-col items-center" key={degree.name}>
              <span
                className={clsx(
                  'text-xl font-extrabold text-secondary dark:text-secondary-dark md:text-base',
                  'print:text-base',
                )}
              >
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
              {index !== 0 && <div className={clsx('my-1 h-8 w-2 rounded-xl bg-primary md:hidden', 'print:hidden')} />}
            </div>
          ))}
      </Content>
    </Section>
  );
});

export default Education;
