import BiColoredTitle from 'components/BiColoredTitle';
import Grid, { GridProps } from 'components/primitives/Grid';
import React, { forwardRef, PropsWithChildren } from 'react';

const Section = forwardRef<HTMLDivElement, SectionProps>(({ children, fullWidth, title, ...rest }, ref) => {
  return (
    <Grid as="section" flex="100%" flexDirection="column" gridColumn="span 2" variant="item" {...rest}>
      <BiColoredTitle ref={ref} title={title} />
      {children}
    </Grid>
  );
});

Section.displayName = 'Section';

export type SectionProps = Omit<GridProps, 'variant'> &
  PropsWithChildren<{
    fullWidth?: boolean;
    title: string;
  }>;
export default Section;
