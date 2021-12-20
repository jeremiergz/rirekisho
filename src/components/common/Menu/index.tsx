import BiColoredTitle from '@/components/common/BiColoredTitle';
import useScrollThreshold from '@/components/hooks/useScrollThreshold';
import GoToIcon from '@/components/svgs/icons/GoTo';
import clsx from 'clsx';
import React from 'react';

function Menu({ sections }: MenuProps): JSX.Element {
  const isAbove96px = useScrollThreshold(80);
  const isAbove168px = useScrollThreshold(144);

  const handleScrollTo = (position: 'bottom' | 'top') => () => {
    window.scrollTo({ behavior: 'smooth', top: position === 'top' ? 0 : document.body.clientHeight });
  };

  return (
    <div
      className={clsx(
        'fixed flex h-14 items-center justify-center top-0 transition w-full will-change-auto z-10',
        'bg-gradient-to-b from-primary to-secondary dark:from-primary dark:via-primary-dark dark:to-secondary-dark',
        'print:hidden',
        isAbove96px ? 'md:opacity-100 md:pointer-events-auto' : 'md:opacity-0 md:pointer-events-none',
        isAbove168px ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      )}
    >
      <button
        aria-label="Scroll to top"
        className="hover:brightness-75 hidden 2xs:flex p-1 md:p-2 rotate-180 transition"
        onClick={handleScrollTo('top')}
      >
        <GoToIcon className="fill-white dark:fill-primary" height={28} width={28} />
      </button>
      {sections.map((s, i) => {
        const handleClick = () => {
          if (typeof s.ref !== 'string') {
            window.scrollTo({
              behavior: 'smooth',
              top: s.ref.current.offsetTop - 48,
            });
          }
        };
        const isFirst = i === 0;
        const isLast = i === sections.length - 1;

        return (
          <button
            aria-label={`Scroll to ${s.title}`}
            className={clsx(
              'hover:brightness-75 flex p-2 transition',
              isFirst ? 'ml-0' : 'ml-1',
              isLast ? 'mr-0' : 'mr-1',
            )}
            key={s.title}
            onClick={handleClick}
          >
            <s.Icon className="fill-white dark:fill-primary" />
            <BiColoredTitle
              className="hidden md:block leading-relaxed ml-2 text-lg"
              primaryColor="text-gray-900 dark:text-gray-100"
              secondaryColor="text-white dark:text-primary"
              title={s.title}
              variant="no-border"
            />
          </button>
        );
      })}
      <button
        aria-label="Scroll to bottom"
        className="hover:brightness-75 hidden 2xs:flex p-1 md:p-2 transition"
        onClick={handleScrollTo('bottom')}
      >
        <GoToIcon className="fill-white dark:fill-primary" height={28} width={28} />
      </button>
    </div>
  );
}

export type MenuProps = {
  sections: Models.Section[];
};
export default Menu;
