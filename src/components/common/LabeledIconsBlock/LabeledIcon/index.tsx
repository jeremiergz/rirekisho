import Anchor from '@/components/common/Anchor';
import clsx from 'clsx';
import React from 'react';
import Conditional from '../../Conditional';

function LabeledIcon({ children, className, link, name, ...rest }: LabeledIconProps): JSX.Element {
  return (
    <div
      className={clsx(className, 'flex flex-1 lg:flex-initial flex-col items-center justify-center text-center')}
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
        <span className="font-extrabold max-h-4 text-gray-900 dark:text-gray-300 text-xs">{name}</span>
      </Conditional>
    </div>
  );
}

export type LabeledIconProps = React.ComponentProps<'div'> & {
  link?: string;
  name: string;
};
export default LabeledIcon;
