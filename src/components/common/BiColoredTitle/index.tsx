import clsx from 'clsx';
import React, { forwardRef } from 'react';

const BiColoredTitle = forwardRef<HTMLDivElement, BiColoredTitleProps>(function BiColoredTitle(
  {
    className,
    onClick,
    primaryClassName = 'text-secondary dark:text-secondary-dark',
    secondaryClassName = 'text-primary dark:text-primary-dark',
    title,
    variant,
    ...rest
  },
  ref,
): JSX.Element {
  const firstThreeChars = title.substring(0, 3);
  const remainingChars = title.substring(3, title.length);

  return (
    <div
      className={clsx(
        className,
        'border-primary font-bold pb-0.5 text-3xl text-center md:text-left',
        variant === 'no-border' ? 'border-b-0 mb-0' : 'border-b-2 mb-2',
      )}
      onClick={onClick}
      ref={ref}
      {...rest}
    >
      <span className={primaryClassName}>{firstThreeChars}</span>
      <span className={secondaryClassName}>{remainingChars}</span>
    </div>
  );
});

export type BiColoredTitleProps = React.ComponentPropsWithRef<'div'> & {
  primaryClassName?: string;
  secondaryClassName?: string;
  title: string;
  variant?: 'no-border';
};
export default BiColoredTitle;
