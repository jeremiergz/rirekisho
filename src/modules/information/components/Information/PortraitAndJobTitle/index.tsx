import clsx from 'clsx';
import CertificationStamp from './CertificationStamp';

function PortraitAndJobTitle({ jobTitle }: PortraitAndJobTitleProps): JSX.Element {
  return (
    <div className={clsx('-mt-10 flex flex-1 flex-col items-center justify-between md:order-2', 'print:order-2')}>
      <CertificationStamp />
      <span
        className={clsx(
          'my-4 text-center text-4xl font-extrabold text-secondary dark:text-secondary-dark md:-mx-8',
          'print:-mx-8 print:mb-0',
        )}
      >
        {jobTitle}
      </span>
    </div>
  );
}

export type PortraitAndJobTitleProps = {
  jobTitle: string;
};
export default PortraitAndJobTitle;
