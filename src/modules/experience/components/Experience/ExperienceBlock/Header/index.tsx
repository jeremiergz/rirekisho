import Anchor from '@/common/components/misc/Anchor';
import Conditional from '@/common/components/misc/Conditional';
import Experience from '@/modules/experience/models/Experience';
import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

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

function Header({ company, endDate, startDate }: HeaderProps): JSX.Element {
  const formattedEndDate = getFormattedDate(endDate);
  const formattedStartDate = getFormattedDate(startDate);
  const image = getImage(company.img?.src);

  return (
    <div
      className={clsx(
        'm-auto flex max-w-lg flex-col items-center justify-between md:m-0 md:flex-row',
        'print:m-0 print:max-w-md print:flex-row',
      )}
    >
      <span className="whitespace-nowrap text-lg font-extrabold text-primary dark:text-primary-dark">
        {formattedStartDate} - {formattedEndDate}
      </span>
      <div
        className={clsx(
          'my-2 flex w-full flex-row items-center md:my-0 md:w-auto md:flex-row-reverse',
          'min-w-fit font-semibold text-secondary dark:text-secondary-dark',
          'print:my-0 print:w-auto print:flex-row-reverse',
        )}
      >
        <Conditional
          condition={!!company.website}
          wrapper={children => (
            <Anchor aria-label={`Go to ${company.website}`} external href={company.website}>
              {children}
            </Anchor>
          )}
        >
          <div
            className={clsx(
              '-ml-2 rounded-full bg-transparent px-2 py-1 transition-colors will-change-auto dark:bg-gray-200 md:ml-auto md:-mr-2',
              'print:ml-auto print:-mr-2',
            )}
          >
            {image ? (
              <GatsbyImage alt={company.name} className="h-6" image={image} />
            ) : (
              <span className="text-lg text-gray-900">{company.name}</span>
            )}
          </div>
        </Conditional>
        <div className="mx-0.5 h-5 w-0.5 bg-secondary transition-colors dark:bg-gray-900" />
        <div className="flex flex-1 px-2 py-1">
          <span className="text-base italic">{company.sector}</span>
        </div>
      </div>
    </div>
  );
}

export type HeaderProps = {
  company: Experience['company'];
  endDate: Experience['timeline']['endDate'];
  startDate: Experience['timeline']['startDate'];
};
export default Header;
