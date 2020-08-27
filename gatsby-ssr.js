import ReadinessProvider from 'components/providers/ReadinessProvider';
import ThemeProvider from 'components/providers/ThemeProvider';
import React from 'react';
import 'styles/global.css';

const wrapRootElement = ({ element }) => {
  return (
    <ReadinessProvider milestones={['Theme']}>
      <ThemeProvider>{element}</ThemeProvider>
    </ReadinessProvider>
  );
};

export { wrapRootElement };
