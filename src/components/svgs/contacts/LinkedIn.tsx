import SVG, { SVGProps } from '@/components/common/SVG';
import React from 'react';

function LinkedIn(props: LinkedInProps): JSX.Element {
  return (
    <SVG viewBox="0 0 512 512" {...props}>
      <circle className="fill-white dark:fill-gray-900" cx="256" cy="256" r="224" />
      <path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm-74.39 387h-62.348V199.426h62.347zm-31.173-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.402-35.274 32.402zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0" />
    </SVG>
  );
}

export type LinkedInProps = SVGProps;
export default LinkedIn;
