import { useTheme } from '@/components/providers/ThemeProvider';
import DarkIcon from '@/components/svgs/icons/Dark';
import LightIcon from '@/components/svgs/icons/Light';
import clsx from 'clsx';
import React from 'react';

function ThemeSwitch(props: ThemeSwitchProps): JSX.Element {
  const { toggle: handleToggle } = useTheme();

  return (
    <button
      className={clsx(
        'h-6 relative rounded-3xl transition w-12',
        'bg-white dark:bg-gray-900 hover:brightness-75 transition',
      )}
      onClick={handleToggle}
      {...props}
    >
      <div className="absolute flex items-center justify-between pr-0.5 top-0.5 w-full">
        <DarkIcon fill="white" height={20} width={20} />
        <LightIcon height={17} width={17} />
      </div>
      <div
        className={clsx(
          'absolute h-5 mx-0.5 rounded-3xl top-0.5 transition-colors w-6',
          'bg-primary translate-x-0 dark:bg-primary-dark dark:translate-x-5',
        )}
      />
    </button>
  );
}

export type ThemeSwitchProps = React.ComponentProps<'button'>;
export default ThemeSwitch;
