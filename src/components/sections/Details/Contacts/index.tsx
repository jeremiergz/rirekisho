import Anchor from 'components/Anchor';
import Box from 'components/primitives/Box';
import FlexBox from 'components/primitives/FlexBox';
import Text from 'components/primitives/Text';
import Email from 'components/svg/Email';
import GitHub from 'components/svg/GitHub';
import GitLab from 'components/svg/GitLab';
import LinkedIn from 'components/svg/LinkedIn';
import Phone from 'components/svg/Phone';
import Twitter from 'components/svg/Twitter';
import useTheme from 'hooks/useTheme';
import React, { CSSProperties } from 'react';
import { ResponsiveValue } from 'styled-system';

const Icons: Record<Models.PersonalContact['type'], React.FC<React.SVGProps<SVGSVGElement>>> = {
  email: Email,
  github: GitHub,
  gitlab: GitLab,
  linkedin: LinkedIn,
  phone: Phone,
  twitter: Twitter,
};

function isHTTPLink(link: string) {
  return !!link.match(/^https?:\/\//);
}

const Contacts: React.FC<ContactsProps> = ({ items, order }) => {
  const theme = useTheme();
  return (
    <FlexBox
      flex={1}
      flexDirection={{ _: 'row', tablet: 'column' }}
      height="100%"
      justifyContent="center"
      marginY={3}
      maxHeight={{ _: 32, tablet: 'unset' }}
      minWidth={224}
      order={order}
      textAlign="center"
    >
      {items
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((item, index) => {
          const isEven = index % 2 === 0;
          const Icon = Icons[item.type];
          const iconColor = isEven ? theme.colors.secondary : theme.colors.primary;
          return (
            <FlexBox
              alignItems="center"
              justifyContent={{ _: 'center', tablet: 'flex-end' }}
              key={item.link}
              lineHeight="12px"
              marginBottom={{ _: 0, tablet: index !== items.length - 1 && 20 }}
              marginX={{ _: 1, tablet: 0 }}
            >
              <Anchor external={isHTTPLink(item.link)} href={item.link}>
                <FlexBox alignItems="center" flexDirection={{ _: 'column-reverse', tablet: 'row' }}>
                  <Text
                    color="primary"
                    display={{ _: 'none', tablet: 'block' }}
                    fontSize={18}
                    fontWeight="bold"
                    lineHeight="32px"
                  >
                    {item.label}
                  </Text>
                  <Box marginLeft={2}>
                    <Icon fill={iconColor} height={32} width={32} />
                  </Box>
                </FlexBox>
              </Anchor>
            </FlexBox>
          );
        })}
    </FlexBox>
  );
};

Contacts.displayName = 'Contacts';

export type ContactsProps = {
  items: Models.PersonalContact[];
  order?: ResponsiveValue<CSSProperties['order']>;
};
export default Contacts;
