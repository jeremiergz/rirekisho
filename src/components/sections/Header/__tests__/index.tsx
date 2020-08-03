import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Header from '..';
import mockData from './mock.json';

describe('components/sections/Header Test Suite', () => {
  beforeAll(() => {
    const graphql = jest.spyOn(Gatsby, 'graphql');
    graphql.mockImplementation(() => '');
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => mockData);
  });

  it('matches snapshot', () => {
    const jsx = (
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
