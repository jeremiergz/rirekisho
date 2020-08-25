import ThemeProvider from 'components/providers/ThemeProvider';
import React from 'react';
import 'styles/global.css';

const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};

export { wrapRootElement };
