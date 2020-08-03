import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Anchor from '..';

describe('components/common/Anchor Test Suite', () => {
  it('matches snapshot', () => {
    const jsx = (
      <ThemeProvider theme={theme}>
        <Anchor>Anchor Component</Anchor>
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
