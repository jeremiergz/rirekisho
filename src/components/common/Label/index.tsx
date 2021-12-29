import clsx from 'clsx';
import React from 'react';

function Label({ className, emphasize = false, title }: LabelProps): JSX.Element {
  return (
    <label
      className={clsx(
        className,
        'font-extrabold mb-1 text-sm uppercase',
        emphasize ? 'text-secondary dark:text-secondary-dark' : 'text-primary dark:text-primary-dark',
      )}
    >
      {title}
    </label>
  );
}

export type LabelProps = React.ComponentProps<'label'> & {
  emphasize?: boolean;
  title: string;
};
export default Label;