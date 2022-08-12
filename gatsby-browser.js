import '@/common/styles/global.css';
import 'typeface-baloo-bhaina-2';
import 'typeface-open-sans';
import Layout from '@/common/components/layout/Layout';
import React from 'react';

export const onClientEntry = () => {
  window.addEventListener('load', () => {
    if (
      window.localStorage.getItem('theme') === 'dark' ||
      (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
};

export const wrapRootElement = ({ element }) => {
  return (
    <React.StrictMode>
      <Layout>{element}</Layout>
    </React.StrictMode>
  );
};
