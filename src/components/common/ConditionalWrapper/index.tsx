import React from 'react';

const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({ children, condition, wrapper }) => {
  return <>{condition ? wrapper(children) : children}</>;
};

ConditionalWrapper.displayName = 'ConditionalWrapper';

export type ConditionalWrapperProps = {
  condition: boolean;
  wrapper: (children: React.ReactNode) => React.ReactNode;
};
export default ConditionalWrapper;
