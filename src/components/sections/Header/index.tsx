import ThemeSwitch from '@/components/common/ThemeSwitch';
import useLanguagesData from '@/components/hooks/data/useLanguagesData';
import usePersonalDetailsData from '@/components/hooks/data/usePersonalDetailsData';
import useStripes from '@/components/hooks/useStripes';
import clsx from 'clsx';
import React from 'react';
import Language from './Language';

function Header(): JSX.Element {
  const {
    languages: { nodes: languages },
  } = useLanguagesData();
  const {
    personalDetails: { fullName },
  } = usePersonalDetailsData();

  const { height, stripes } = useStripes(84, 'ASC', 1.75);

  return (
    <header className="box-border flex items-center justify-center relative" style={{ height }}>
      <div className="absolute h-full w-full -z-10">
        {stripes.map(stripe => (
          <div
            className="transition-colors w-full will-change-auto"
            key={stripe.color}
            style={{ background: stripe.color, height: stripe.height }}
          />
        ))}
      </div>
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
              'leading-8 font-title text-white dark:text-primary tracking-tighter uppercase',
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
            <Language dense={index === 0} key={item.name} item={item} />
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
