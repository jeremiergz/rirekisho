import clsx from 'clsx';
import React from 'react';

function Bubble({ className, empty, ...rest }: BubbleProps): JSX.Element {
  return (
    <span
      className={clsx(
        className,
        'h-4 w-4 rounded-full',
        'print:h-3 print:w-3',
        empty ? 'bg-gray-300 dark:bg-gray-700 ' : 'bg-primary dark:bg-primary-dark',
      )}
      {...rest}
    />
  );
}

export type BubbleProps = React.ComponentProps<'span'> & {
  empty?: boolean;
};
export default Bubble;
