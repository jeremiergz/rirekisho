import clsx from 'clsx';
import React from 'react';

function Content({ children, className, reverse = false, ...rest }: ContentProps): JSX.Element {
  return (
    <div
      className={clsx(
        className,
        'flex md:flex-row md:flex-wrap items-center md:items-start w-full',
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
