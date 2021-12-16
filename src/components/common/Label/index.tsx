import clsx from 'clsx';
import React from 'react';

function Label({ className, title }: LabelProps): JSX.Element {
  return (
    <label className={clsx(className, 'font-bold mb-1 text-secondary dark:text-secondary-dark text-sm uppercase')}>
      {title}
    </label>
  );
}

export type LabelProps = React.ComponentProps<'label'> & {
  title: string;
};
export default Label;
