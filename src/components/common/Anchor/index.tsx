import clsx from 'clsx';
import React from 'react';

function Anchor({ children, className, external, ...rest }: AnchorProps): JSX.Element {
  const target = external ? '_blank' : '_self';

  return (
    <a
      className={clsx(className, 'font-semibold text-inherit transition hover:brightness-75')}
      rel="noopener noreferrer"
      target={target}
      {...rest}
    >
      {children}
    </a>
  );
}

export type AnchorProps = React.ComponentProps<'a'> & {
  download?: boolean;
  external?: boolean;
  href?: string;
  target?: string;
};
export default Anchor;
