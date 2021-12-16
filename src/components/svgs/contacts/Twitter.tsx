import SVG, { SVGProps } from '@/components/common/SVG';
import React from 'react';

function Twitter(props: TwitterProps): JSX.Element {
  return (
    <SVG viewBox="0 0 512 512" {...props}>
      <circle className="fill-white dark:fill-gray-900" cx="256" cy="256" r="224" />
      <path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm116.887 199.602c.113 2.52.168 5.05.168 7.593 0 77.645-59.102 167.18-167.184 167.184h.004-.004c-33.184 0-64.062-9.727-90.066-26.395 4.597.543 9.277.813 14.015.813 27.532 0 52.867-9.39 72.98-25.152-25.722-.477-47.41-17.465-54.894-40.813a58.481 58.481 0 0011.043 1.063c5.363 0 10.559-.723 15.496-2.07-26.886-5.384-47.14-29.145-47.14-57.598 0-.266 0-.504.008-.75a58.354 58.354 0 0026.613 7.347c-15.777-10.527-26.148-28.523-26.148-48.91a58.597 58.597 0 017.957-29.535c28.976 35.555 72.28 58.937 121.117 61.394a58.708 58.708 0 01-1.528-13.398c0-32.437 26.317-58.754 58.766-58.754 16.902 0 32.168 7.145 42.89 18.567a117.855 117.855 0 0037.313-14.262c-4.394 13.715-13.707 25.222-25.84 32.5 11.887-1.422 23.215-4.574 33.742-9.254a119.412 119.412 0 01-29.308 30.43zm0 0" />
    </SVG>
  );
}

export type TwitterProps = SVGProps;
export default Twitter;
