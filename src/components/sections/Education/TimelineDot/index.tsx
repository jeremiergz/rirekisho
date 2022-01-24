import clsx from 'clsx';
import React from 'react';

function TimelineDot(): JSX.Element {
  return (
    <div
      className={clsx(
        'box-border rounded-full border-4 border-secondary bg-white dark:border-secondary-dark dark:bg-gray-900',
        'hidden h-5 w-5 transition-colors will-change-auto md:block',
      )}
    />
  );
}

export default TimelineDot;
