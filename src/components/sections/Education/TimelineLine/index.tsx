import React from 'react';

function TimelineLine({ children }: TimelineLineProps): JSX.Element {
  return (
    <svg
      className="absolute hidden md:block left-0 stroke-primary dark:stroke-primary-dark -top-1.5 w-full -z-10"
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
