import React from 'react';

function SVG({ ...rest }: SVGProps): JSX.Element {
  return <svg height={32} viewBox="0 0 24 24" width={32} xmlns="http://www.w3.org/2000/svg" {...rest} />;
}

export type SVGProps = React.ComponentProps<'svg'>;
export default SVG;
