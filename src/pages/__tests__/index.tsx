import ThemeProvider from 'components/providers/ThemeProvider';
import * as Gatsby from 'gatsby';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ReactTestRenderer from 'react-test-renderer';
import IndexPage from '..';
import NotFoundPage from '../404';
import mockData from './mock.json';

describe('pages Test Suite', () => {
  beforeAll(() => {
    const graphql = jest.spyOn(Gatsby, 'graphql');
    graphql.mockImplementation(() => '');
    const navigate = jest.spyOn(Gatsby, 'navigate');
    navigate.mockImplementation(() => null);
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => ({
      ...mockData,
    }));
  });

  describe('pages/404 Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = (
        <HelmetProvider>
          <ThemeProvider>
            <NotFoundPage />
          </ThemeProvider>
        </HelmetProvider>
      );
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });

    describe('pages/index Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = (
          <HelmetProvider>
            <ThemeProvider>
              <IndexPage />
            </ThemeProvider>
          </HelmetProvider>
        );
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });
  });
});
