import Label from '@/components/common/Label';
import clsx from 'clsx';
import React from 'react';

function Information({ items }: InformationProps): JSX.Element {
  return (
    <div
      className={clsx(
        'flex flex-1 flex-col justify-center order-2 md:order-1',
      )}
    >
      {items.map((item, index) => (
        <div className={clsx('flex flex-col', index !== items.length - 1 && 'mb-6')} key={item.label}>
          <Label title={item.label} />
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export type InformationProps = {
  items: Models.PersonalInformation[];
};
export default Information;
