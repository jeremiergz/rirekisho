import Box, { BoxProps } from 'components/primitives/Box';
import styled from 'styled-components';

const FlexBox = styled(Box)`
  display: flex;
`;

FlexBox.displayName = 'FlexBox';

export type FlexBoxProps = BoxProps;
export default FlexBox;
