import clsx from 'clsx';
import React from 'react';

function Degree({ city, countryCode, name, school }: DegreeProps): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <span
        className={clsx(
          'mt-1 text-center text-lg font-extrabold uppercase text-primary dark:text-primary-dark md:w-9/12 md:text-sm',
          'print:w-10/12 print:text-2xs',
        )}
      >
        {name}
      </span>
      <span
        className={clsx(
          'text-center text-base font-extrabold text-gray-900 dark:text-gray-300 md:text-xs',
          'print:text-2xs',
        )}
      >
        {school}
      </span>
      <span
        className={clsx('text-center text-sm font-bold text-gray-900 dark:text-gray-300 md:text-2xs', 'print:text-2xs')}
      >
        {city.toUpperCase()} - {countryCode}
      </span>
    </div>
  );
}

export type DegreeProps = {
  city: string;
  countryCode: string;
  name: string;
  school: string;
};
export default Degree;
