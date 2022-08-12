import ThemeSwitch from '@/common/components/misc/ThemeSwitch';
import useInformationData from '@/modules/information/hooks/useInformationData';
import clsx from 'clsx';
import useLanguagesData from '../../hooks/useLanguagesData';
import Lang from './Lang';

function Header(): JSX.Element {
  const languages = useLanguagesData();
  const { fullName } = useInformationData();

  return (
    <header
      className={clsx(
        'relative box-border flex h-36 items-center justify-center md:h-20',
        'bg-primary dark:bg-gradient-to-b dark:from-primary-dark dark:to-secondary-dark',
        'print:h-20',
      )}
    >
      <div
        className={clsx(
          'flex flex-col items-center justify-center md:flex-row md:justify-between',
          'px-6 md:px-8 lg:px-10',
          'w-full max-w-7xl',
          'print:flex-row print:justify-between print:px-8',
        )}
      >
        <div className={clsx('flex items-center justify-center md:justify-start', 'print:justify-start')}>
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
        <div className={clsx('mb-6 mt-2 flex md:mb-0 md:mt-0', 'print:mt-0 print:mb-0')}>
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
