import { navigate } from 'gatsby';
import React, { FunctionComponent, useEffect } from 'react';
import SEO from '../components/common/SEO';

const NotFoundPage: FunctionComponent = () => {
  useEffect(() => {
    navigate('/');
  }, []);
  return <SEO path="/404" title="404 Not Found" />;
};

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
