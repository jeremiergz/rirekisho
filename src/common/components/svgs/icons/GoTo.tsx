import SVG, { SVGProps } from '@/common/components/misc/SVG';

function GoTo(props: GoToProps): JSX.Element {
  return (
    <SVG {...props}>
      <path d="M10.973 10.37l.11-6.37h2l-.11 6.37h3l-4.055 3.172-3.945-3.173z" />
      <circle cx="12" cy="18.108" r="2" />
    </SVG>
  );
}

export type GoToProps = SVGProps;
export default GoTo;
