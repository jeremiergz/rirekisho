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
          <ProjectBlock className={clsx(index >= 1 && 'mb-6')} item={project} key={project.description} />
        ))
        .reverse()}
    </div>
  );
}

export type ExperienceBlockProps = React.ComponentProps<'div'> & {
  item: Experience;
};
export default ExperienceBlock;
