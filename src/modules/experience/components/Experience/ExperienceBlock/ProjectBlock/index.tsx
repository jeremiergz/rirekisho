import clsx from 'clsx';
import React, { createElement } from 'react';
import Project from '../../../../models/Project';
import Detail from './Detail';

const tagRegExp = /(<em>[\s\w&\/._-]+<\/em>|<strong>[\s\w&\/._-]+<\/strong>)/gim;
const tagRemovalRexExp = /<\/?em>|<\/?strong>/gi;
const tagTypeRexExp = /(?<=<)\w+(?=>)/i;

function getElementsFromTask(task: string) {
  const matches = [...task.matchAll(tagRegExp)];
  let previousMatchIndex = 0;

  return matches.reduce<(string | JSX.Element)[]>((acc, match, index) => {
    const text = match[0].replace(tagRemovalRexExp, '');
    const type = match[0].match(tagTypeRexExp)[0];

    // Save text from start until 1st match
    acc.push(task.substring(previousMatchIndex, match.index));

    // Create & save matched tag element
    acc.push(createElement(type, { key: text }, text));
    previousMatchIndex = match[0].length + match.index;

    // Save rest of text if any after last match
    const isLastMatch = index === matches.length - 1;
    if (isLastMatch) acc.push(task.substring(previousMatchIndex, task.length));

    return acc;
  }, []);
}

function ProjectBlock({
  className,
  item: { client, description, name, tasks, technologies },
  ...rest
}: ProjectBlockProps): JSX.Element {
  return (
    <div className={clsx(className, 'flex flex-col md:flex-row', 'print:flex-row')} {...rest}>
      <ul className="flex-1">
        {client && <Detail details={client.sector} emphasize="primary" information={client.name} label="Client" />}
        {description && <Detail details={description} emphasize="secondary" information={name} label="Project" />}
        {technologies.length > 0 && <Detail details={technologies.join(' | ')} emphasize="all" label="Techs" />}
      </ul>
      <ul className={clsx('flex-1 pl-6 text-gray-600 dark:text-gray-300 md:pl-8', 'print:pl-8 print:text-sm')}>
        {tasks.map((task, index) => {
          const elements = getElementsFromTask(task);

          return (
            <li className={clsx('font-semibold', index !== 0 && 'mt-1')} key={task}>
              •&nbsp;{elements.length > 0 ? elements : task}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export type ProjectBlockProps = React.ComponentProps<'div'> & {
  item: Project;
};
export default ProjectBlock;
