import Label from '@/components/common/Label';
import PersonalDetail from '@/models/PersonalDetail';
import clsx from 'clsx';
import React from 'react';

function PersonalDetails({ items }: PersonalDetailsProps): JSX.Element {
  return (
    <div
      className={clsx(
        'flex flex-1 flex-col justify-center order-2 md:order-1',
        'h-full min-w-[224px] mb-2 mt-4 text-center md:text-left',
      )}
    >
      {items
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((item, index) => (
          <div className={clsx('flex flex-col', index !== items.length - 1 && 'mb-6')} key={item.label}>
            <Label title={item.label} />
            <span className="font-extrabold leading-4 text-secondary dark:text-secondary-dark text-xl uppercase">
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
