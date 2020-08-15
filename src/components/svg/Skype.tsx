import React, { ComponentProps } from 'react';

const Skype: React.FC<SkypeProps> = ({ fill, ...rest }) => {
  return (
    <svg fill={fill} viewBox="0 0 512 512" {...rest}>
      <path d="M284.43749 237.76172l-35.20312-7.8125c-13.39062-3.05078-28.80468-7.08204-28.80468-19.70704 0-12.65234 10.81249-21.49218 30.33203-21.49218 39.33984 0 35.74609 27.03516 55.27733 27.03516 10.27736 0 19.27344-6.04298 19.27344-16.4336 0-24.2461-38.80468-42.44141-71.72265-42.44141-35.73438 0-73.78906 15.17579-73.78906 55.59375 0 19.46484 6.95312 40.17189 45.2578 49.77735l47.56251 11.875c14.39452 3.54687 17.9961 11.64452 17.9961 18.94922 0 12.14844-12.06642 24.01562-33.92578 24.01562-42.69923 0-36.77344-32.85937-59.65625-32.85937-10.28126 0-17.74219 7.08203-17.74219 17.18749 0 19.70312 23.92187 45.9961 77.39844 45.9961 50.8789 0 76.08984-24.52344 76.08984-57.36719 0-21.20703-9.77734-43.72265-48.34376-52.3164zm0 0" />
      <path d="M256 .000002C114.63672.000002.000002 114.63672.000002 256S114.63672 512 256 512s256-114.63672 256-256S397.36328.000002 256 .000002zM389.28516 388.90624C372.45312 405.74608 350.08593 415 326.28905 415c-15.41405 0-30.5078-4.00781-43.83984-11.55079-8.65233 1.53515-17.51562 2.34375-26.35937 2.34375-20.32031 0-40.03906-3.98437-58.58984-11.84765-17.9375-7.56251-34.02734-18.42578-47.85938-32.25-13.8164-13.82031-24.66796-29.91015-32.24218-47.83984-7.85938-18.5625-11.83594-38.26954-11.83594-58.59375 0-8.70313.78126-17.41797 2.26563-25.94531-7.31641-13.16016-11.210946-28.05079-11.210946-43.20313 0-23.80078 9.273456-46.1797 26.097656-63.0078 16.83203-16.83595 39.21094-26.105482 63.01172-26.105482 14.57813 0 28.98438 3.636722 41.78906 10.445322.0233-.004.0508-.004.0703-.012 9.33594-1.78906 18.92578-2.6914 28.5039-2.6914 20.31641 0 40.03125 3.98046 58.58204 11.82812 17.91796 7.58202 34.02734 18.43359 47.83984 32.2539 13.83202 13.82423 24.67969 29.92187 32.26172 47.84766 7.85937 18.5586 11.83593 38.26953 11.83593 58.58985 0 9.16015-.86328 18.32811-2.50781 27.28515 7.36719 13.21093 11.28516 28.15235 11.28516 43.35547-.004 23.80077-9.26563 46.1836-26.10156 63.0039zm0 0" />
    </svg>
  );
};

Skype.displayName = 'Skype';

export type SkypeProps = ComponentProps<'svg'>;
export default Skype;
