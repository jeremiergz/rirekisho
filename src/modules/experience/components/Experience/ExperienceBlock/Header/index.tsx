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
      <span
        className={clsx(
          'whitespace-nowrap text-lg font-extrabold text-primary dark:text-primary-dark md:min-w-[220px]',
          'print:min-w-[228px]',
        )}
      >
        {formattedStartDate} - {formattedEndDate}
      </span>
      <div
        className={clsx(
          'mb-2 flex w-full flex-col-reverse items-center md:mb-0 md:flex-row',
          'min-w-fit font-semibold text-secondary dark:text-secondary-dark',
          'print:mb-0 print:flex-row',
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
              'min-w-[150px] rounded-full bg-transparent bg-[#d5e6ea] px-2 py-1 text-center transition-colors will-change-auto dark:bg-gray-200',
              'print:min-w-[150px]',
            )}
          >
            {image ? (
              <GatsbyImage alt={company.name} className="h-6" image={image} />
            ) : (
              <span className="text-lg text-gray-900">{company.name}</span>
            )}
          </div>
        </Conditional>
        <div className={clsx('flex flex-1 px-2.5 pb-1 md:pb-0', 'print:pb-0')}>
          <span className="text-sm italic">{company.sector}</span>
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
