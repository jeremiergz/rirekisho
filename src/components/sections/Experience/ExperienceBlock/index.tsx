import Anchor from '@/components/common/Anchor';
import Conditional from '@/components/common/Conditional';
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
    <div className={clsx('flex flex-col items-stretch justify-start mb-8', 'col-span-2 lg:col-span-1')}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <span className="font-bold text-primary dark:text-primary-dark text-lg whitespace-nowrap">
          {startDate} - {endDate}
        </span>
        <div
          className={clsx(
            'flex flex-row md:flex-row-reverse items-center my-2 md:my-0',
            'font-bold min-w-fit text-secondary dark:text-secondary-dark',
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
            <div className="bg-transparent dark:bg-gray-200 md:-mr-2 px-2 py-1 rounded-full transition-colors will-change-auto">
              {image ? (
                <div className="h-6">
                  <GatsbyImage alt={item.company.name} image={image} />
                </div>
              ) : (
                <span className="text-gray-900 text-lg">{item.company.name}</span>
              )}
            </div>
          </Conditional>
          <div className="bg-secondary h-5 dark:bg-gray-900 mx-0.5 transition-colors w-0.5" />
          <div className="flex flex-1 px-2 py-1">
            <span className="italic text-base">{item.company.sector}</span>
          </div>
        </div>
      </div>
      {item.projects
        .map((project, index) => (
          <React.Fragment key={project.description}>
            <ProjectBlock item={project} />
            {index >= 1 && <div className="bg-gray-200 dark:bg-gray-700 h-px ml-4 my-3 w-auto md:w-9/12 lg:w-auto" />}
          </React.Fragment>
        ))
        .reverse()}
    </div>
  );
}

export type ExperienceBlockProps = {
  item: Models.Experience;
};
export default ExperienceBlock;
