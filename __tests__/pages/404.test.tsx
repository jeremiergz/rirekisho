import LayoutComponent from '@/common/components/layout/Layout';
import useSiteMetadata, * as Layout from '@/common/hooks/useSiteMetadata';
import NotFoundPage from '@/pages/404';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import mockData from './mock.json';

describe('pages/404 Test Suite', () => {
  beforeAll(() => {
    const { layoutData } = mockData;

    jest.spyOn(Layout, 'default').mockReturnValue(layoutData as unknown as ReturnType<typeof useSiteMetadata>);
  });

  it('matches snapshot', () => {
    const jsx = (
      <LayoutComponent>
        <NotFoundPage />
      </LayoutComponent>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
