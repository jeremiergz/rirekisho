import React from 'react';

function Degree({ city, countryCode, name, school }: DegreeProps): JSX.Element {
  return (
    <>
      <span className="mt-1 text-center text-lg font-extrabold uppercase text-primary dark:text-primary-dark md:w-9/12 md:text-sm">
        {name}
      </span>
      <span className="text-center text-base font-extrabold text-gray-900 dark:text-gray-300 md:text-xs">{school}</span>
      <span className="text-center text-sm font-bold text-gray-900 dark:text-gray-300 md:text-2xs">
        {city.toUpperCase()} - {countryCode}
      </span>
    </>
  );
}

export type DegreeProps = {
  city: string;
  countryCode: string;
  name: string;
  school: string;
};
export default Degree;
