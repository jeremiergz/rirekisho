import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Skills from '..';
import mockData from './mock.json';

describe('components/sections/Skills Test Suite', () => {
  beforeAll(() => {
    jest.spyOn(Gatsby, 'graphql').mockImplementation(() => '');
    jest.spyOn(Gatsby, 'useStaticQuery').mockImplementation(() => mockData);
  });

  it('matches snapshot', () => {
    const jsx = (
      <ThemeProvider theme={theme}>
        <Skills />
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
