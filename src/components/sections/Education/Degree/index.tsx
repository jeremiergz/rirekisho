import React from 'react';

function Degree({ city, countryCode, name, school }: DegreeProps): JSX.Element {
  return (
    <>
      <span className="font-bold mt-1 text-center text-primary dark:text-primary-dark text-lg md:text-sm uppercase md:w-9/12">
        {name}
      </span>
      <span className="font-bold text-base md:text-xs text-center text-gray-900 dark:text-gray-300">{school}</span>
      <span className="font-bold text-center text-gray-900 dark:text-gray-300 text-sm md:text-2xs">
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
