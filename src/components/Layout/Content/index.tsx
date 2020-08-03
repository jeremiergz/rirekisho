import FlexBox, { FlexBoxProps } from 'components/primitives/FlexBox';
import React from 'react';

const Content: React.FC<ContentProps> = ({ children, columnDirection = 'column', rowDirection = 'row', ...rest }) => {
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
