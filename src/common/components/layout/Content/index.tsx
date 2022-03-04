import clsx from 'clsx';
import React from 'react';

function Content({ children, className, reverse = false, ...rest }: ContentProps): JSX.Element {
  return (
    <div
      className={clsx(
        className,
        'flex w-full items-center md:flex-row md:flex-wrap md:items-start',
        'print:flex-row print:flex-wrap print:items-start',
        reverse ? 'flex-col-reverse' : 'flex-col',
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export type ContentProps = React.ComponentProps<'div'> & {
  reverse?: boolean;
};
export default Content;
