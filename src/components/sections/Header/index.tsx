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
        'box-border flex h-36 md:h-20 items-center justify-center relative',
        'bg-gradient-to-b from-primary to-secondary dark:from-primary dark:via-primary-dark dark:to-secondary-dark',
      )}
    >
      <div
        className={clsx(
          'flex items-center flex-col md:flex-row justify-center md:justify-between',
          'px-6 md:px-8 lg:px-10',
          'max-w-7xl w-full',
        )}
      >
        <div className="flex items-center justify-center md:justify-start">
          <span
            className={clsx(
              'pt-1.5 text-3xl whitespace-nowrap',
              'font-bold font-title leading-8 text-gray-100 tracking-tighter uppercase',
            )}
          >
            {fullName}
            <div
              className={clsx('absolute -bottom-3 flex left-auto justify-center right-auto max-w-7xl', 'print:hidden')}
            >
              <ThemeSwitch />
            </div>
          </span>
        </div>
        <div className="flex mb-6 md:mb-0 mt-2 md:mt-0">
          {languages.map((item, index) => (
            <Lang dense={index === 0} key={item.name} item={item} />
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
