import SVG, { SVGProps } from '@/common/components/misc/SVG';

function Toolbox(props: ToolboxProps): JSX.Element {
  return (
    <SVG {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M18 16h-2v-1H8v1H6v-1H2v5h20v-5h-4zm2-8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v4h4v-2h2v2h8v-2h2v2h4v-4c0-1.1-.9-2-2-2zm-5 0H9V6h6v2z" />
    </SVG>
  );
}

export type ToolboxProps = SVGProps;
export default Toolbox;
