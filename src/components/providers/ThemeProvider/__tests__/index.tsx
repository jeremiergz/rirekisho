import { act, renderHook } from '@testing-library/react-hooks';
import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ThemeProvider, { useTheme } from '..';
import mockData from './mock.json';

describe('components/providers/ThemeProvider Test Suite', () => {
  beforeAll(() => {
    const graphql = jest.spyOn(Gatsby, 'graphql');
    graphql.mockImplementation(() => '');
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => mockData);
  });

  it('matches snapshot', () => {
    const jsx = <ThemeProvider>ThemeProvider Component</ThemeProvider>;
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });

  it('should change theme accordingly', () => {
    const wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;
    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current.theme.type).toBe('light');
    act(() => {
      result.current.toggle();
    });
    expect(result.current.theme.type).toBe('dark');
  });
});
