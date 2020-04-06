import React, { FunctionComponent } from 'react';
import FlexBox, { FlexBoxProps } from '../../../primitives/FlexBox';

const Content: FunctionComponent<ContentProps> = ({
  children,
  columnDirection = 'column',
  rowDirection = 'row',
  ...rest
}) => {
  return (
    <FlexBox
      alignItems={{ _: 'center', tablet: 'flex-start' }}
      flexDirection={{ _: columnDirection, tablet: rowDirection }}
      flexWrap={{ tablet: 'wrap' }}
      justifyContent={{ _: 'center', laptopS: 'space-between' }}
      width="100%"
      {...rest}
    >
      {children}
    </FlexBox>
  );
};

Content.displayName = 'Content';

export type ContentProps = FlexBoxProps & {
  columnDirection?: 'column' | 'column-reverse';
  rowDirection?: 'row' | 'row-reverse';
};
export default Content;
