import BiColoredTitle from '@/components/common/BiColoredTitle';
import clsx from 'clsx';
import React, { forwardRef } from 'react';

const Section = forwardRef<HTMLDivElement, SectionProps>(function Section(
  { children, className, halfWidth, title, ...rest },
  ref,
): JSX.Element {
  return (
    <section className={clsx(className, 'col-span-2 my-4 flex flex-col', halfWidth && 'md:col-span-1')} {...rest}>
      {title && <BiColoredTitle ref={ref} title={title} />}
      {children}
    </section>
  );
});

export type SectionProps = React.ComponentPropsWithRef<'section'> & {
  halfWidth?: boolean;
  title?: string;
};
export default Section;
