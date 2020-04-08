import React, { FunctionComponent } from 'react';
import Box from '../../../primitives/Box';
import FlexBox from '../../../primitives/FlexBox';
import Grid, { GridProps } from '../../../primitives/Grid';
import Text from '../../../primitives/Text';
import ProjectBlock from './ProjectBlock';

const months = {
  0: 'JAN',
  1: 'FEB',
  2: 'MAR',
  3: 'APR',
  4: 'MAY',
  5: 'JUN',
  6: 'JUL',
  7: 'AUG',
  8: 'SEP',
  9: 'OCT',
  10: 'NOV',
  11: 'DEC',
};

function getFormattedDate(dateString: string) {
  const date = dateString && new Date(dateString);
  return dateString ? `${months[date.getMonth()]} ${date.getFullYear()}` : 'PRESENT';
}

const ExperienceBlock: FunctionComponent<ExperienceBlockProps> = ({ item, ...rest }) => {
  const endDate = getFormattedDate(item.endDate);
  const startDate = getFormattedDate(item.startDate);
  return (
    <Grid
      alignItems="stretch"
      flexDirection="column"
      justifyContent="flex-start"
      marginBottom={4}
      variant="item"
      {...rest}
    >
      <FlexBox alignItems="flex-start" justifyContent="space-between" marginBottom={2}>
        <Box color="primary" fontSize={18} fontWeight="bold" marginRight={3}>
          <Text display={{ _: 'block', mobileM: 'inline' }} whiteSpace="nowrap">
            {startDate}
            {' - '}
          </Text>
          <Text display={{ _: 'block', mobileM: 'inline' }} whiteSpace="nowrap">
            {endDate}
          </Text>
        </Box>
        <Box color="secondary" fontWeight="bold" textAlign="right">
          <Text fontSize={18}>{item.company}</Text> |{' '}
          <Text fontSize={16} fontStyle="italic">
            {item.companySector}
          </Text>
        </Box>
      </FlexBox>
      {item.projects.map((project, index) => (
        <ProjectBlock
          item={project}
          key={project.description}
          marginBottom={index < item.projects.length - 1 ? '24px' : 0}
        />
      ))}
    </Grid>
  );
};

ExperienceBlock.displayName = 'ExperienceBlock';

export type ExperienceBlockProps = Omit<GridProps, 'variant'> & {
  item: Models.Experience;
};
export default ExperienceBlock;
