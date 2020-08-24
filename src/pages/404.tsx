import SEO from 'components/SEO';
import { navigate } from 'gatsby';
import React, { useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    if (isBrowser) navigate('/');
  }, []);
  return <SEO path="/404" title="404 Not Found" />;
};

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
