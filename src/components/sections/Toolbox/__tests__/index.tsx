import ThemeProvider from 'components/providers/ThemeProvider';
import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import imgsMockData from '__tests__/images.mock.json';
import Toolbox from '..';
import mockData from './mock.json';

describe('components/sections/Toolbox Test Suite', () => {
  beforeAll(() => {
    jest.spyOn(Gatsby, 'graphql').mockImplementation(() => '');
    jest.spyOn(Gatsby, 'useStaticQuery').mockImplementation(() => ({
      ...imgsMockData,
      ...mockData,
    }));
  });

  it('matches snapshot', () => {
    const jsx = (
      <ThemeProvider>
        <Toolbox />
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
