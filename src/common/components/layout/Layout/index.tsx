import ErrorBoundary from '@/common/components/misc/ErrorBoundary';
import ThemeProvider from '@/common/components/providers/ThemeProvider';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

function Layout({ children }: LayoutProps): JSX.Element {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsInitialized(true);
    }, 300);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className={clsx('transition-opacity duration-300 ease-out', !isInitialized && 'opacity-0')}>
        <ThemeProvider>{children}</ThemeProvider>
      </div>
    </ErrorBoundary>
  );
}

export type LayoutProps = {
  children: React.ReactNode;
};
export default Layout;
