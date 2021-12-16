import clsx from 'clsx';
import React from 'react';

function Star({ className, type, ...rest }: StarProps): JSX.Element {
  const starsMapper = {
    empty: (
      <path
        className="fill-gray-700 dark:fill-gray-300"
        d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
      />
    ),
    full: (
      <path
        className="fill-white dark:fill-primary"
        d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
      />
    ),
    half: (
      <g>
        <path
          className="fill-gray-700 dark:fill-gray-300"
          d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
        />
        <path
          className="fill-white dark:fill-primary"
          d="M9.5,14.25L3.9160000000000004,17.186L4.982,10.968L0.465,6.564L6.708,5.657L9.5,0"
        />
      </g>
    ),
  };

  return (
    <div className={clsx(className, 'h-4')} {...rest}>
      <svg className="h-full" viewBox="0 0 18 18">
        {starsMapper[type]}
      </svg>
    </div>
  );
}

export type StarProps = React.ComponentProps<'div'> & {
  type: 'empty' | 'full' | 'half';
};
export default Star;
