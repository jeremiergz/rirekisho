import clsx from 'clsx';
import React from 'react';
import Experience from '../../../models/Experience';
import Header from './Header';
import ProjectBlock from './ProjectBlock';

function ExperienceBlock({ className, item, ...rest }: ExperienceBlockProps): JSX.Element {
  return (
    <div className={clsx(className, 'col-span-2 flex flex-col items-stretch justify-start lg:col-span-1')} {...rest}>
      <Header company={item.company} endDate={item.timeline.endDate} startDate={item.timeline.startDate} />
      {item.projects
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((project, index) => (
          <React.Fragment key={project.description}>
            <ProjectBlock item={project} />
            {index >= 1 && (
              <div
                className={clsx('my-3 h-px w-auto bg-gray-200 dark:bg-gray-700 md:w-9/12 lg:w-auto', 'print:w-9/12')}
              />
            )}
          </React.Fragment>
        ))
        .reverse()}
    </div>
  );
}

export type ExperienceBlockProps = React.ComponentProps<'div'> & {
  item: Experience;
};
export default ExperienceBlock;
