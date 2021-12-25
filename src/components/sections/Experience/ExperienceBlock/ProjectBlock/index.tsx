import Project from '@/models/Project';
import React, { createElement } from 'react';
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
  item: { client, description, name, tasks, technologies },
  ...rest
}: ProjectBlockProps): JSX.Element {
  return (
    <div className="ml-4" {...rest}>
      {client && <Detail details={client.sector} information={client.name} label="Client" />}
      {description && <Detail details={description} information={name} label="Project" />}
      {technologies.length > 0 && <Detail details={technologies.join(' | ')} emphasize label="Techs" />}
      <ul className="pl-6 md:pl-8">
        {tasks.map(task => {
          const elements = getElementsFromTask(task);

          return (
            <li className="font-semibold mt-1 text-gray-600 dark:text-gray-300" key={task}>
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
