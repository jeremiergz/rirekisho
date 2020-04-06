import { Link as BaseGatsbyLink } from 'gatsby';
import { OutboundLink as BaseOutboundLink } from 'gatsby-plugin-google-analytics';
import React, { FunctionComponent } from 'react';
import withoutStylingProps from '../../../hocs/withoutStylingProps';
import useTheme from '../../../hooks/useTheme';
import Anchor, { AnchorProps } from '../Anchor';

const GatsbyLink = withoutStylingProps(BaseGatsbyLink);

const OutboundLink = withoutStylingProps(BaseOutboundLink);

const Link: FunctionComponent<LinkProps> = ({ children, external, partiallyActive = false, to, ...rest }) => {
  const theme = useTheme();
  const isTouchDevice = typeof window !== 'undefined' && window.navigator.maxTouchPoints > 0;
  const target = isTouchDevice ? '_self' : '_blank';
  const linkProps = external
    ? {
        as: OutboundLink,
        href: to,
        rel: 'noopener noreferrer',
        target,
      }
    : {
        activeStyle: partiallyActive ? { color: theme['colors'].primary } : {},
        as: GatsbyLink,
        partiallyActive: partiallyActive && (to !== '/' ? true : false),
        to,
      };
  return (
    <Anchor {...linkProps} {...rest}>
      {children}
    </Anchor>
  );
};

Link.displayName = 'Link';

export type LinkProps = AnchorProps & {
  external?: boolean;
  partiallyActive?: boolean;
  to: string;
};
export default Link;
