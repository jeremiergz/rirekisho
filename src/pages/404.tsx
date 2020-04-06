import { navigate } from 'gatsby';
import { FunctionComponent, useEffect } from 'react';

const NotFoundPage: FunctionComponent = () => {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
};

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
