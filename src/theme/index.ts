const breakpoints = ['320px', '375px', '425px', '768px', '1024px', '1200px', '1440px', '2560px'] as const;
Object.defineProperties(breakpoints, {
  mobileS: { value: breakpoints[0] },
  mobileM: { value: breakpoints[1] },
  mobileL: { value: breakpoints[2] },
  tablet: { value: breakpoints[3] },
  laptopS: { value: breakpoints[4] },
  laptopM: { value: breakpoints[5] },
  laptopL: { value: breakpoints[6] },
  desktop: { value: breakpoints[7] },
});

const colors = {
  background: 'white',
  dark: '#212121',
  error: '#f44336',
  info: '#2196f3',
  primary: '#17365c',
  secondary: '#31859a',
  success: '#4caf50',
  text: '#262626',
  white: '#ffffff',
} as const;

const fonts = {
  main: "'Open Sans', sans-serif",
  title: "'Baloo Bhaina 2', cursive",
} as const;

const fontWeights = {
  bold: 800,
  bolder: 600,
  regular: 400,
} as const;

const theme = {
  breakpoints,
  colors,
  fonts,
  fontWeights,
} as const;

type Theme = typeof theme;

export type { Theme };
export default theme;
