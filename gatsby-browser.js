import Layout from '@/components/common/Layout';
import React from 'react';
import '@/styles/global.css';
import 'typeface-baloo-bhaina-2';
import 'typeface-open-sans';

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export const wrapRootElement = ({ element }) => {
  return (
    <React.StrictMode>
      <Layout>{element}</Layout>
    </React.StrictMode>
  );
};
