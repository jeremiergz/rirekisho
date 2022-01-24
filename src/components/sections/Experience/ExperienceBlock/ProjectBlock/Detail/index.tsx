import clsx from 'clsx';
import React from 'react';

function Detail({ details, emphasize, information, label }: DetailProps): JSX.Element {
  return (
    <div className="flex">
      <span className="min-w-[72px] font-semibold text-gray-600 dark:text-gray-500">{label}:</span>
      <div>
        {information && (
          <>
            <span
              className={clsx(
                emphasize === 'all'
                  ? 'font-semibold text-secondary dark:text-secondary-dark'
                  : 'text-gray-800 dark:text-gray-400',
                emphasize === 'primary' && 'font-semibold',
              )}
            >
              {`${information}`}
            </span>
            <span>&nbsp;|&nbsp;</span>
          </>
        )}
        <span
          className={clsx(
            'italic',
            emphasize === 'all'
              ? 'font-semibold text-secondary dark:text-secondary-dark'
              : 'text-gray-800 dark:text-gray-400',
            emphasize === 'secondary' && 'font-semibold',
          )}
        >
          {details}
        </span>
      </div>
    </div>
  );
}

export type DetailProps = {
  details: string;
  emphasize?: 'all' | 'primary' | 'secondary';
  information?: string;
  label: string;
};
export default Detail;
