import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import contactsMockData from '__tests__/contacts.mock.json';
import Details from '..';
import mockData from './mock.json';

describe('components/sections/Details Test Suite', () => {
  beforeAll(() => {
    const graphql = jest.spyOn(Gatsby, 'graphql');
    graphql.mockImplementation(() => '');
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => ({
      ...contactsMockData,
      ...mockData,
    }));
  });

  it('matches snapshot', () => {
    const jsx = (
      <ThemeProvider theme={theme}>
        <Details />
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
