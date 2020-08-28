import Box from 'components/primitives/Box';
import FlexBox from 'components/primitives/FlexBox';
import Grid, { GridProps } from 'components/primitives/Grid';
import Text from 'components/primitives/Text';
import { useTheme } from 'components/providers/ThemeProvider';
import Img, { FixedObject } from 'gatsby-image';
import React from 'react';
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

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ companyImg, item, ...rest }) => {
  const { theme } = useTheme();
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
      <FlexBox
        flexDirection={{ _: 'column', tablet: 'row' }}
        alignItems={{ _: 'flex-start', tablet: 'center' }}
        justifyContent="space-between"
        marginBottom={2}
      >
        <Box color="primary" fontSize={18} fontWeight="bold" marginRight={3}>
          <Text whiteSpace="nowrap">
            {startDate}
            {' - '}
          </Text>
          <Text whiteSpace="nowrap">{endDate}</Text>
        </Box>
        <FlexBox
          alignItems="center"
          color="secondary"
          flexDirection={{ _: 'row', tablet: 'row-reverse' }}
          fontWeight="bold"
          marginY={{ _: 2, tablet: 0 }}
          textAlign={{ _: 'left', tablet: 'right' }}
        >
          <FlexBox
            backgroundColor={theme.type === 'dark' ? 'text' : 'none'}
            borderRadius={16}
            paddingX={2}
            paddingY={1}
          >
            {companyImg ? (
              <Img fixed={companyImg} />
            ) : (
              <Text color="dark" fontSize={18}>
                {item.company}
              </Text>
            )}
          </FlexBox>
          <Text marginX={2}>|</Text>
          <FlexBox flex={1}>
            <Text fontSize={16} fontStyle="italic">
              {item.companySector}
            </Text>
          </FlexBox>
        </FlexBox>
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
  companyImg?: FixedObject;
  item: Models.Experience;
};
export default ExperienceBlock;
