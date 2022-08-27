import { useTheme } from '@/common/components/providers/ThemeProvider';
import DarkIcon from '@/common/components/svgs/icons/Dark';
import LightIcon from '@/common/components/svgs/icons/Light';
import clsx from 'clsx';
import React from 'react';

function ThemeSwitch(props: ThemeSwitchProps): JSX.Element {
  const { toggle: handleToggle } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      className={clsx(
        'relative h-6 w-12 rounded-3xl transition',
        'bg-white transition hover:brightness-75 dark:bg-gray-900',
      )}
      onClick={handleToggle}
      {...props}
    >
      <div className="absolute top-0.5 flex w-full items-center justify-between pr-0.5">
        <DarkIcon className="fill-gray-100" height={20} width={20} />
        <LightIcon height={17} width={17} />
      </div>
      <div
        className={clsx(
          'absolute top-0.5 mx-0.5 h-5 w-6 rounded-3xl transition-colors',
          'translate-x-0 bg-primary dark:translate-x-5',
        )}
      />
    </button>
  );
}

export type ThemeSwitchProps = React.ComponentProps<'button'>;
export default ThemeSwitch;
