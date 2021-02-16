import Layout from '@common/Layout';
import Grid from '@primitives/Grid';
import { useData } from '@providers/DataProvider';
import React, { forwardRef } from 'react';
import ExperienceBlock from './ExperienceBlock';

const Experience = forwardRef<HTMLDivElement>((_, ref) => {
  const { imagesIndex, experiencesData } = useData();
  return (
    <Layout.Section ref={ref} title="experience">
      <Layout.Content columnDirection="column-reverse">
        <Grid gridColumnGap={{ _: 32, tablet: 64 }} gridTemplateColumns="auto auto" variant="container">
          {experiencesData
            .sort((a, b) => b.timeline.startDate.localeCompare(a.timeline.startDate))
            .map(item => {
              const img = imagesIndex[item.company.img];
              return (
                <ExperienceBlock
                  companyImg={img}
                  gridColumn={{ _: 'span 2', laptopS: 'span 1' }}
                  item={item}
                  key={item.timeline.startDate}
                />
              );
            })}
        </Grid>
      </Layout.Content>
    </Layout.Section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
