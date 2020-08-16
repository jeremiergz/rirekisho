import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Fab from '..';

describe('components/Fab Test Suite', () => {
  it('matches snapshot', () => {
    const jsx = (
      <ThemeProvider theme={theme}>
        <Fab position="bottom-right" />
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
