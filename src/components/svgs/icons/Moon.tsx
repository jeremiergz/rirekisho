import SVG, { SVGProps } from '@common/SVG';
import React from 'react';

const Moon: React.FC<MoonProps> = props => {
  return (
    <SVG viewBox="0 0 512 512" {...props}>
      <path
        d="M462.386 299.769c.41-.419.817-.839 1.223-1.261 7.725-8.038 21.132-.659 18.399 10.148-10.812 42.747-33.518 83.102-68.104 115.812-95.437 90.26-246.857 86.823-338.324-7.457-91.447-94.259-90.577-244.8 2.611-337.988 31.784-31.784 70.248-52.833 110.871-63.14 10.789-2.738 18.352 10.612 10.324 18.322-.925.888-1.843 1.788-2.754 2.699-74.12 74.12-72.967 195.002 3.436 267.669 73.762 70.155 191.11 67.943 262.318-4.804z"
        fill="#fce25c"
      />
      <path
        d="M381.639 450.131c-94.76 62.84-224.34 51.12-306.06-33.12-91.45-94.26-90.58-244.8 2.61-337.99 31.78-31.78 70.24-52.83 110.87-63.14 1.52-.39 2.97-.45 4.33-.25-12.6 8.5-24.56 18.32-35.71 29.47-93.19 93.19-94.06 243.73-2.61 337.99 60.48 62.34 147.18 84.97 226.57 67.04z"
        fill="#fbd307"
      />
      <path
        d="M391.528 203.895l7.162 14.512a7.74 7.74 0 005.828 4.234l16.015 2.327c6.349.923 8.884 8.724 4.29 13.202l-11.589 11.296a7.74 7.74 0 00-2.226 6.851l2.736 15.951c1.084 6.323-5.552 11.145-11.231 8.16l-14.325-7.531a7.744 7.744 0 00-7.204 0l-14.325 7.531c-5.678 2.985-12.315-1.837-11.231-8.16l2.736-15.951a7.74 7.74 0 00-2.226-6.851l-11.589-11.296c-4.594-4.478-2.059-12.28 4.29-13.202l16.015-2.327a7.741 7.741 0 005.828-4.234l7.162-14.512c2.841-5.753 11.045-5.753 13.884 0z"
        fill="#fce25c"
      />
      <path
        d="M369.97 259.501c0 6.16 1.15 12.06 3.25 17.48l-6.56 3.45c-5.68 2.98-12.31-1.84-11.23-8.16l2.74-15.95a7.72 7.72 0 00-2.23-6.85l-11.59-11.3c-4.59-4.48-2.06-12.28 4.29-13.2l16.02-2.33c2.52-.37 4.7-1.95 5.83-4.23l7.16-14.52c2.84-5.75 11.04-5.75 13.88 0l5.9 11.97c-16.25 7.8-27.46 24.41-27.46 43.64z"
        fill="#fbd307"
      />
      <path
        d="M327.03 9.19l10.464 21.202a16.482 16.482 0 0012.409 9.016l23.398 3.4c13.518 1.964 18.916 18.576 9.134 28.111l-16.931 16.504a16.481 16.481 0 00-4.74 14.588l3.997 23.304c2.309 13.463-11.822 23.73-23.913 17.374l-20.928-11.002a16.481 16.481 0 00-15.338 0l-20.928 11.002c-12.091 6.357-26.222-3.91-23.913-17.374l3.997-23.304a16.483 16.483 0 00-4.74-14.588l-16.931-16.504c-9.782-9.535-4.384-26.147 9.134-28.111l23.398-3.4a16.48 16.48 0 0012.409-9.016L297.472 9.19c6.046-12.25 23.513-12.25 29.558 0z"
        fill="#fce25c"
      />
      <path
        d="M294.541 107.768c0 9.4 1.53 18.45 4.35 26.9l-15.24 8.02c-12.09 6.35-26.22-3.91-23.91-17.38l4-23.3c.91-5.35-.86-10.8-4.74-14.59l-16.94-16.5c-9.78-9.54-4.38-26.15 9.14-28.11l23.4-3.4a16.51 16.51 0 0012.41-9.02l10.46-21.2c6.05-12.25 23.51-12.25 29.56 0l10.46 21.2c.47.95 1.03 1.85 1.67 2.68-26.57 14.32-44.62 42.4-44.62 74.7z"
        fill="#fbd307"
      />
    </SVG>
  );
};

Moon.displayName = 'Moon';

export type MoonProps = SVGProps;
export default Moon;
