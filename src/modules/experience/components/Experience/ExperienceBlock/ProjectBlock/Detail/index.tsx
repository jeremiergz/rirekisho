import Anchor from '@/common/components/misc/Anchor';
import Conditional from '@/common/components/misc/Conditional';
import clsx from 'clsx';

function Detail({
  dense = false,
  details,
  emphasize,
  information = '',
  informationWebsite = '',
  label,
}: DetailProps): JSX.Element {
  return (
    <li className={clsx('flex', 'print:text-sm')}>
      <span
        className={clsx(
          'min-w-[84px] font-semibold text-gray-600 dark:text-gray-500',
          dense ? 'print:min-w-[60px] md:min-w-[72px]' : 'print:min-w-[72px]',
        )}
      >
        {label}:
      </span>
      <div>
        {information && (
          <>
            <Conditional
              condition={!!informationWebsite}
              wrapper={children => (
                <Anchor
                  aria-label={`Go to ${informationWebsite}`}
                  className="inline-block"
                  external
                  href={informationWebsite}
                >
                  {children}
                </Anchor>
              )}
            >
              <span
                className={clsx(
                  emphasize === 'all'
                    ? 'font-semibold text-secondary dark:text-secondary-dark'
                    : 'text-gray-800 dark:text-gray-400',
                  emphasize === 'primary' && 'font-semibold',
                  informationWebsite && 'underline',
                )}
              >
                {information}
              </span>
            </Conditional>
            <span className="text-gray-400 transition-colors dark:text-gray-600">&nbsp;|&nbsp;</span>
          </>
        )}
        <span
          className={clsx(
            'italic',
            emphasize === 'all'
              ? 'font-semibold text-secondary dark:text-secondary-dark'
              : 'text-gray-800 dark:text-gray-400',
            emphasize === 'secondary' && 'font-semibold',
          )}
        >
          {details}
        </span>
      </div>
    </li>
  );
}

export type DetailProps = {
  dense?: boolean;
  details: string;
  emphasize: 'all' | 'primary' | 'secondary';
  information?: string;
  label: string;
  informationWebsite?: string;
};
export default Detail;
