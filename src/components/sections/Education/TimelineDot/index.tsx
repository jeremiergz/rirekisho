import clsx from 'clsx';
import React from 'react';

function TimelineDot(): JSX.Element {
  return (
    <div
      className={clsx(
        'box-border bg-white dark:bg-gray-900 border-4 border-secondary dark:border-secondary-dark rounded-full',
        'h-5 hidden md:block transition-colors w-5 will-change-auto',
      )}
    />
  );
}

export default TimelineDot;
