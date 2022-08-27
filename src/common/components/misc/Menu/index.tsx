import BiColoredTitle from '@/common/components/misc/BiColoredTitle';
import GoToIcon from '@/common/components/svgs/icons/GoTo';
import useScrollThreshold from '@/common/hooks/useScrollThreshold';
import Section from '@/common/models/Section';
import clsx from 'clsx';

function Menu({ sections }: MenuProps): JSX.Element {
  const isAbove96px = useScrollThreshold(80);
  const isAbove168px = useScrollThreshold(144);

  const handleScrollTo = (position: 'bottom' | 'top') => () => {
    window.scrollTo({ behavior: 'smooth', top: position === 'top' ? 0 : document.body.clientHeight });
  };

  return (
    <div
      className={clsx(
        'fixed top-0 z-10 flex h-14 w-full items-center justify-center bg-primary transition will-change-auto',
        'print:hidden',
        isAbove96px ? 'md:pointer-events-auto md:opacity-100' : 'md:pointer-events-none md:opacity-0',
        isAbove168px ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <button
        aria-label="Scroll to top"
        className="hidden rotate-180 p-1 transition hover:brightness-75 2xs:flex md:p-2"
        onClick={handleScrollTo('top')}
      >
        <GoToIcon className="fill-gray-100" height={28} width={28} />
      </button>
      {sections.map((section, i) => {
        const handleClick = () => {
          if (typeof section.ref !== 'string') {
            window.scrollTo({
              behavior: 'smooth',
              top: section.ref.current.offsetTop - 56, // Tailwind's h-14
            });
          }
        };
        const isFirst = i === 0;
        const isLast = i === sections.length - 1;

        return (
          <button
            aria-label={`Scroll to ${section.title}`}
            className={clsx(
              'flex p-2 transition hover:brightness-75',
              isFirst ? 'ml-0' : 'ml-1',
              isLast ? 'mr-0' : 'mr-1',
            )}
            key={section.title}
            onClick={handleClick}
          >
            <section.Icon className="fill-gray-100" />
            <BiColoredTitle
              className="ml-2 hidden text-lg leading-relaxed md:block"
              primaryClassName="text-gray-100"
              secondaryClassName="text-slate-500"
              title={section.title}
              variant="no-border"
            />
          </button>
        );
      })}
      <button
        aria-label="Scroll to bottom"
        className="hidden p-1 transition hover:brightness-75 2xs:flex md:p-2"
        onClick={handleScrollTo('bottom')}
      >
        <GoToIcon className="fill-gray-100" height={28} width={28} />
      </button>
    </div>
  );
}

export type MenuProps = {
  sections: Section[];
};
export default Menu;
