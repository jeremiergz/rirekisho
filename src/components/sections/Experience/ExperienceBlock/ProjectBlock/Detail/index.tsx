import clsx from 'clsx';
import React from 'react';

function Detail({ details, emphasize, information, label }: DetailProps): JSX.Element {
  return (
    <div className="flex">
      <span className="font-semibold min-w-[72px] text-gray-600 dark:text-gray-500">{label}:</span>
      <div>
        {information && <span className="text-gray-800 dark:text-gray-400">{`${information}`}&nbsp;|&nbsp;</span>}
        <span
          className={clsx(
            'italic',
            emphasize ? 'font-semibold text-secondary dark:text-secondary-dark' : 'text-gray-800 dark:text-gray-400',
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
  emphasize?: boolean;
  information?: string;
  label: string;
};
export default Detail;
