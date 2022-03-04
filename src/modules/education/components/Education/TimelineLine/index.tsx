import clsx from 'clsx';
import React from 'react';

function TimelineLine({ children }: TimelineLineProps): JSX.Element {
  return (
    <svg
      className={clsx(
        'absolute left-0 -top-1.5 -z-10 hidden w-full stroke-primary dark:stroke-primary-dark md:block',
        'print:block',
      )}
      strokeWidth={8}
    >
      {children}
    </svg>
  );
}

export type TimelineLineProps = {
  children: React.ReactNode;
};
export default TimelineLine;
