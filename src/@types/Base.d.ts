declare type StyledSystemProps<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  P extends object
> = import('styled-components').StyledComponentProps<C, any, P, never> & {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
