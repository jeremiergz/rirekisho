import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import imgsMockData from '__tests__/images.mock.json';
import Interests from '..';
import mockData from './mock.json';

describe('components/sections/Interests Test Suite', () => {
  beforeAll(() => {
    jest.spyOn(Gatsby, 'graphql').mockImplementation(() => '');
    jest.spyOn(Gatsby, 'useStaticQuery').mockImplementation(() => ({
      ...imgsMockData,
      ...mockData,
    }));
  });

  it('matches snapshot', () => {
    const jsx = (
      <ThemeProvider theme={theme}>
        <Interests />
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
