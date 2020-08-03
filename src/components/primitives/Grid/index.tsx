import Box, { BoxProps } from 'components/primitives/Box';
import React from 'react';
import styled from 'styled-components';
import { compose, grid, GridProps as StyledGridProps, variant } from 'styled-system';

const BaseGrid = styled(Box)`
  ${compose(grid)};
  ${variant({
    variants: {
      container: {
        display: 'grid',
      },
      item: {
        display: 'flex',
      },
    },
  })}
`;

const Grid: React.FC<GridProps> = ({ children, ...rest }) => {
  return <BaseGrid {...rest}>{children}</BaseGrid>;
};

Grid.displayName = 'Grid';

export type GridProps = BoxProps &
  StyledGridProps & {
    variant: 'container' | 'item';
  };
export default Grid;
