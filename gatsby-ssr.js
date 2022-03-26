import '@/common/styles/global.css';
import 'typeface-baloo-bhaina-2';
import 'typeface-open-sans';
import Layout from '@/common/components/layout/Layout';
import React from 'react';

export const onRenderBody = ({ setBodyAttributes, setHtmlAttributes }) => {
  const isBrowser = typeof window !== 'undefined';

  if (
    isBrowser &&
    (localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
  ) {
    setHtmlAttributes({
      className: 'dark',
      lang: 'en',
    });
  } else {
    setHtmlAttributes({
      lang: 'en',
    });
  }

  setBodyAttributes({
    className: 'dark:bg-gray-900 transition-colors',
  });
};

export const wrapRootElement = ({ element }) => {
  return (
    <React.StrictMode>
      <Layout>{element}</Layout>
    </React.StrictMode>
  );
};
