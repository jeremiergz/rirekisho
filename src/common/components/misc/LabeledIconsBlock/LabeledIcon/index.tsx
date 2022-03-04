import Anchor from '@/common/components/misc/Anchor';
import clsx from 'clsx';
import React from 'react';
import Conditional from '../../Conditional';

function LabeledIcon({ children, className, link, name, ...rest }: LabeledIconProps): JSX.Element {
  return (
    <div
      className={clsx(className, 'flex flex-1 flex-col items-center justify-center text-center lg:flex-initial')}
      {...rest}
    >
      <Conditional
        condition={!!link}
        wrapper={children => (
          <Anchor aria-label={`Go to ${link}`} className="flex flex-col" external href={link}>
            {children}
          </Anchor>
        )}
      >
        {children}
        <span className={clsx('max-h-4 text-xs font-extrabold text-gray-900 dark:text-gray-300', 'print:text-2xs')}>
          {name}
        </span>
      </Conditional>
    </div>
  );
}

export type LabeledIconProps = React.ComponentProps<'div'> & {
  link?: string;
  name: string;
};
export default LabeledIcon;
