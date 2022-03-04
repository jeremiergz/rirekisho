import ErrorBoundary from '@/common/components/misc/ErrorBoundary';
import SEOProvider from '@/common/components/providers/SEOProvider';
import ThemeProvider from '@/common/components/providers/ThemeProvider';
import React from 'react';

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <ErrorBoundary>
      <SEOProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </SEOProvider>
    </ErrorBoundary>
  );
}

export type LayoutProps = {
  children: React.ReactNode;
};
export default Layout;
