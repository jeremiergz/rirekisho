import ThemeSwitch from '@/components/common/ThemeSwitch';
import useInformationData from '@/components/hooks/data/useInformationData';
import useLanguagesData from '@/components/hooks/data/useLanguagesData';
import clsx from 'clsx';
import React from 'react';
import Lang from './Lang';

function Header(): JSX.Element {
  const languages = useLanguagesData();
  const { fullName } = useInformationData();

  return (
    <header
      className={clsx(
        'relative box-border flex h-36 items-center justify-center md:h-20',
        'bg-gradient-to-b from-primary to-secondary dark:from-primary dark:via-primary-dark dark:to-secondary-dark',
      )}
    >
      <div
        className={clsx(
          'flex flex-col items-center justify-center md:flex-row md:justify-between',
          'px-6 md:px-8 lg:px-10',
          'w-full max-w-7xl',
        )}
      >
        <div className="flex items-center justify-center md:justify-start">
          <span
            className={clsx(
              'whitespace-nowrap pt-1.5 text-3xl',
              'font-title font-bold uppercase leading-8 tracking-tighter text-gray-100 dark:text-slate-900',
            )}
          >
            {fullName}
            <div
              className={clsx('absolute -bottom-3 left-auto right-auto flex max-w-7xl justify-center', 'print:hidden')}
            >
              <ThemeSwitch />
            </div>
          </span>
        </div>
        <div className="mb-6 mt-2 flex md:mb-0 md:mt-0">
          {languages
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((item, index) => (
              <Lang dense={index === 0} key={item.name} item={item} />
            ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
