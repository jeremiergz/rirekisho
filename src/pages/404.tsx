import SEO from '@common/SEO';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

const NotFoundPage: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    if (isBrowser) router.push('/');
  }, []);
  return <SEO path="/404" title="404 Not Found" />;
};

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
