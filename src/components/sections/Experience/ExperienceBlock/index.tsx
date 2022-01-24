import Anchor from '@/components/common/Anchor';
import Conditional from '@/components/common/Conditional';
import Experience from '@/models/Experience';
import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import ProjectBlock from './ProjectBlock';

const months = {
  0: 'JAN',
  1: 'FEB',
  2: 'MAR',
  3: 'APR',
  4: 'MAY',
  5: 'JUN',
  6: 'JUL',
  7: 'AUG',
  8: 'SEP',
  9: 'OCT',
  10: 'NOV',
  11: 'DEC',
};

function getFormattedDate(dateString: string) {
  const date = dateString && new Date(dateString);
  return dateString ? `${months[date.getMonth()]} ${date.getFullYear()}` : 'PRESENT';
}

function ExperienceBlock({ item }: ExperienceBlockProps): JSX.Element {
  const endDate = getFormattedDate(item.timeline.endDate);
  const startDate = getFormattedDate(item.timeline.startDate);
  const image = getImage(item.company.img?.src);

  return (
    <div className={clsx('mb-8 flex flex-col items-stretch justify-start', 'col-span-2 lg:col-span-1')}>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <span className="whitespace-nowrap text-lg font-extrabold text-primary dark:text-primary-dark">
          {startDate} - {endDate}
        </span>
        <div
          className={clsx(
            'my-2 flex w-full flex-row items-center md:my-0 md:w-auto md:flex-row-reverse',
            'min-w-fit font-semibold text-secondary dark:text-secondary-dark',
          )}
        >
          <Conditional
            condition={!!item.company.website}
            wrapper={children => (
              <Anchor aria-label={`Go to ${item.company.website}`} external href={item.company.website}>
                {children}
              </Anchor>
            )}
          >
            <div className="-ml-2 rounded-full bg-transparent px-2 py-1 transition-colors will-change-auto dark:bg-gray-200 md:ml-auto md:-mr-2">
              {image ? (
                <GatsbyImage alt={item.company.name} className="h-6" image={image} />
              ) : (
                <span className="text-lg text-gray-900">{item.company.name}</span>
              )}
            </div>
          </Conditional>
          <div className="mx-0.5 h-5 w-0.5 bg-secondary transition-colors dark:bg-gray-900" />
          <div className="flex flex-1 px-2 py-1">
            <span className="text-base italic">{item.company.sector}</span>
          </div>
        </div>
      </div>
      {item.projects
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((project, index) => (
          <React.Fragment key={project.description}>
            <ProjectBlock item={project} />
            {index >= 1 && <div className="my-3 ml-4 h-px w-auto bg-gray-200 dark:bg-gray-700 md:w-9/12 lg:w-auto" />}
          </React.Fragment>
        ))
        .reverse()}
    </div>
  );
}

export type ExperienceBlockProps = {
  item: Experience;
};
export default ExperienceBlock;
