import { useTheme } from '@/components/providers/ThemeProvider';
import DarkIcon from '@/components/svgs/icons/Dark';
import LightIcon from '@/components/svgs/icons/Light';
import clsx from 'clsx';
import React from 'react';

function ThemeSwitch(props: ThemeSwitchProps): JSX.Element {
  const { setType, type } = useTheme();

  const handleToggle = () => (type === 'light' ? setType('dark') : setType('light'));

  return (
    <button
      className={clsx(
        'bg-clip-content hover:brightness-75 h-6 relative rounded-3xl transition w-12',
        type === 'light' ? 'bg-white' : 'bg-gray-900',
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
          type === 'light' ? 'bg-primary translate-x-0' : 'bg-primary-dark translate-x-5',
        )}
      />
    </button>
  );
}

export type ThemeSwitchProps = React.ComponentProps<'button'>;
export default ThemeSwitch;
