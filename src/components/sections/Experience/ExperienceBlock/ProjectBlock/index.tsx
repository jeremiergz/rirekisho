import Box, { BoxProps } from 'components/primitives/Box';
import Text from 'components/primitives/Text';
import React from 'react';
import Detail from './Detail';

const ProjectBlock: React.FC<ProjectBlockProps> = ({
  item: { client, clientSector, description, name, tasks, technologies },
  ...rest
}) => {
  return (
    <Box marginLeft={2} {...rest}>
      {client && <Detail details={clientSector} label="Client" information={client} />}
      <Detail details={description} label="Project" information={name} />
      <Detail details={technologies.join(' | ')} emphasize label="Techs" />
      {tasks.map(task => (
        <Text color="#575757" display="block" fontWeight="bolder" key={task} marginTop={1}>
          • {task}
        </Text>
      ))}
    </Box>
  );
};

ProjectBlock.displayName = 'ProjectBlock';

export type ProjectBlockProps = BoxProps & {
  item: Models.Project;
};
export default ProjectBlock;
