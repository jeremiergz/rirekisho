import Button from 'components/Button';
import Box from 'components/primitives/Box';
import FlexBox, { FlexBoxProps } from 'components/primitives/FlexBox';
import Text from 'components/primitives/Text';
import ChevronRight from 'components/svg/ChevronRight';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { shadeColor } from 'theme/utils';
import ArrowLeft from 'components/svg/ArrowLeft';

const SideMenu: React.FC<SideMenuProps> = ({ isOpened, onClick, sections }) => {
  const theme = useTheme();
  const borderStyle = `1px solid ${shadeColor(theme.colors.primary, -25)}`;
  const handleClose = (e: React.MouseEvent) => {
    if (typeof onClick === 'function') onClick(e);
  };
  return (
    <Box
      backgroundColor="primary"
      boxShadow={`${isOpened ? '8px 0px 8px 0px' : 0} rgba(0,0,0,0.25)`}
      height="100%"
      left={0}
      position="fixed"
      top={0}
      transform={`translate3d(${isOpened ? 0 : 'calc(-100% - 1px)'}, 0, 0)`}
      transition="box-shadow ease 250ms, transform ease 250ms"
      width={{ _: '100%', tablet: 224 }}
      zIndex={100}
    >
      <FlexBox height={96} justifyContent="flex-end">
        <Button onClick={handleClose} variant="cursor-only">
          <FlexBox alignItems="center" borderLeft={borderStyle} height="100%" justifyContent="center" paddingX={3}>
            <ArrowLeft fill={theme.colors.secondary} height={24} width={24} />
          </FlexBox>
        </Button>
      </FlexBox>
      <Box fontSize={20}>
        {sections.map((s, index) => {
          const handleClick = (e: React.MouseEvent) => {
            if (typeof s.ref !== 'string') {
              s.ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
            if (typeof onClick === 'function') onClick(e);
          };
          return (
            <Button key={s.title} onClick={handleClick} variant="cursor-only" width="100%">
              <FlexBox
                alignItems="center"
                borderBottom={borderStyle}
                borderTop={index === 0 && borderStyle}
                color="white"
                justifyContent="space-between"
                paddingX={3}
                paddingY={3}
                width="100%"
              >
                <FlexBox>
                  <FlexBox alignItems="center" marginRight={2}>
                    <s.Icon fill={theme.colors.secondary} height={24} width={24} />
                  </FlexBox>
                  <Text>{s.title}</Text>
                </FlexBox>
                <ChevronRight fill={theme.colors.secondary} height={24} width={24} />
              </FlexBox>
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

SideMenu.displayName = 'SideMenu';

export type SideMenuProps = FlexBoxProps & {
  isOpened: boolean;
  sections: Models.Section[];
};
export default SideMenu;
