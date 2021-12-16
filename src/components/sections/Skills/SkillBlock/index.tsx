import Label from '@/components/common/Label';
import clsx from 'clsx';
import React from 'react';
import Bubble from './Bubble';

const gradeBasis = 10;
const maxBubblesNumber = 7;

function SkillBlock({ className, items, style, title, ...rest }: SkillBlockProps): JSX.Element {
  const factor = gradeBasis / maxBubblesNumber;

  return (
    <div className={clsx(className, 'mb-6 w-full')} {...rest} style={{ ...style, maxWidth: 373 }}>
      <Label title={title} />
      {items.map((item, index) => {
        const grade = Math.ceil(item.proficiencyLevel * factor);
        const fullBubblesNumber = [...Array(item.proficiencyLevel).keys()];
        const emptyBubblesNumber = [...Array(maxBubblesNumber - item.proficiencyLevel).keys()];
        const isLast = index === items.length - 1;

        return (
          <div className={clsx('flex items-center justify-between', isLast || 'mb-2')} key={item.name}>
            <span className="font-bold text-lg text-gray-900 dark:text-gray-300 mr-6">{item.name}</span>
            <span className="font-bold sm:hidden leading-4 text-secondary text-xl">
              {grade}/{gradeBasis}
            </span>
            <div className="hidden sm:flex items-center">
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
  items: Models.SkillItem[];
  title: string;
};
export default SkillBlock;
