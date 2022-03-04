import React from 'react';

function Conditional({ children, condition, wrapper }: ConditionalProps): JSX.Element {
  return <>{condition ? wrapper(children) : children}</>;
}

export type ConditionalProps = {
  children: React.ReactNode;
  condition: boolean;
  wrapper: (children: React.ReactNode) => React.ReactNode;
};
export default Conditional;
