import Label from '@/components/common/Label';
import clsx from 'clsx';
import React from 'react';

function Information({ items }: InformationProps): JSX.Element {
  return (
    <div
      className="flex flex-1 flex-col h-full justify-center my-6 order-2 md:order-1 text-center md:text-left"
      style={{ minWidth: 224 }}
    >
      {items.map((item, index) => (
        <div className={clsx('flex flex-col', index !== items.length - 1 && 'mb-6')} key={item.label}>
          <Label title={item.label} />
          <span className="font-bold leading-4 text-primary dark:text-primary-dark text-xl uppercase">
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
