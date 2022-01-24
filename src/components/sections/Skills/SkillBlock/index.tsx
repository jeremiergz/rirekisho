import Label from '@/components/common/Label';
import Skill from '@/models/Skill';
import clsx from 'clsx';
import React from 'react';
import Bubble from './Bubble';

const gradeBasis = 10;
const maxBubblesNumber = 7;

function SkillBlock({ className, items, title, ...rest }: SkillBlockProps): JSX.Element {
  const factor = gradeBasis / maxBubblesNumber;

  return (
    <div className={clsx(className, 'mb-6 w-full max-w-[373px]')} {...rest}>
      <Label emphasize title={title} />
      {items
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((item, index) => {
          const grade = Math.ceil(item.proficiencyLevel * factor);
          const fullBubblesNumber = [...Array(item.proficiencyLevel).keys()];
          const emptyBubblesNumber = [...Array(maxBubblesNumber - item.proficiencyLevel).keys()];
          const isLast = index === items.length - 1;

          return (
            <div className={clsx('flex items-center justify-between', isLast || 'mb-2')} key={item.name}>
              <span className="mr-6 text-lg font-extrabold text-gray-900 dark:text-gray-300">{item.name}</span>
              <span className="text-xl font-extrabold leading-4 text-secondary dark:text-secondary-dark sm:hidden">
                {grade}/{gradeBasis}
              </span>
              <div className="hidden items-center sm:flex">
                {fullBubblesNumber.map((bubble, index) => (
                  <Bubble className={clsx(index !== maxBubblesNumber - 1 && 'mr-2')} key={bubble} />
                ))}
                {emptyBubblesNumber.map((bubble, index) => (
                  <Bubble className={clsx(index !== emptyBubblesNumber.length - 1 && 'mr-2')} empty key={bubble} />
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export type SkillBlockProps = React.ComponentProps<'div'> & {
  items: Skill['items'];
  title: string;
};
export default SkillBlock;
