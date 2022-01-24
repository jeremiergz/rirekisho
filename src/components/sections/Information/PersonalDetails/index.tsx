import Label from '@/components/common/Label';
import PersonalDetail from '@/models/PersonalDetail';
import clsx from 'clsx';
import React from 'react';

function PersonalDetails({ items }: PersonalDetailsProps): JSX.Element {
  return (
    <div
      className={clsx(
        'order-2 flex flex-1 flex-col justify-center md:order-1',
        'mb-2 mt-4 h-full min-w-[224px] text-center md:text-left',
      )}
    >
      {items
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((item, index) => (
          <div className={clsx('flex flex-col', index !== items.length - 1 && 'mb-6')} key={item.label}>
            <Label title={item.label} />
            <span className="text-xl font-extrabold uppercase leading-4 text-secondary dark:text-secondary-dark">
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
