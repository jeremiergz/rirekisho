import Label from '@/common/components/misc/Label';
import clsx from 'clsx';
import React from 'react';
import PersonalDetail from '../../../models/PersonalDetail';

function PersonalDetails({ items }: PersonalDetailsProps): JSX.Element {
  return (
    <div
      className={clsx(
        'order-2 flex flex-1 flex-col justify-center md:order-1',
        'mb-2 mt-4 h-full min-w-[224px] text-center md:text-left',
        'print:order-1 print:ml-8 print:mb-0 print:mt-0 print:text-left',
      )}
    >
      {items
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((item, index) => (
          <div className={clsx('flex flex-col', index !== items.length - 1 && 'mb-6 print:mb-4')} key={item.label}>
            <Label title={item.label} />
            <span
              className={clsx(
                'text-xl font-extrabold uppercase leading-4 text-secondary dark:text-secondary-dark',
                'print:text-sm',
              )}
            >
              {item.value}
            </span>
          </div>
        ))}
    </div>
  );
}

export type PersonalDetailsProps = {
  items: PersonalDetail[];
};
export default PersonalDetails;
