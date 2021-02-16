import Box, { BoxProps } from '@primitives/Box';
import Text from '@primitives/Text';
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
    acc.push(createElement(type, { children: text, key: text }));
    previousMatchIndex = match[0].length + match.index;

    // Save rest of text if any after last match
    const isLastMatch = index === matches.length - 1;
    if (isLastMatch) acc.push(task.substring(previousMatchIndex, task.length));

    return acc;
  }, []);
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({
  item: { client, description, name, tasks, technologies },
  ...rest
}) => {
  return (
    <Box marginLeft={2} {...rest}>
      {client && <Detail details={client.sector} information={client.name} label="Client" />}
      {description && <Detail details={description} information={name} label="Project" />}
      {technologies.length > 0 && <Detail details={technologies.join(' | ')} emphasize label="Techs" />}
      <Box as="ul" paddingLeft={{ _: 3, tablet: 4 }}>
        {tasks.map(task => {
          const elements = getElementsFromTask(task);
          return (
            <Text as="li" color="body2" fontWeight="bolder" key={task} marginLeft={3} marginTop={1}>
              {elements.length > 0 ? elements : task}
            </Text>
          );
        })}
      </Box>
    </Box>
  );
};

ProjectBlock.displayName = 'ProjectBlock';

export type ProjectBlockProps = BoxProps & {
  item: Models.Project;
};
export default ProjectBlock;
