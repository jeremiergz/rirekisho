import { navigate } from 'gatsby';
import { useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

function NotFoundPage(): JSX.Element {
  useEffect(() => {
    if (isBrowser) navigate('/');
  }, []);

  return null;
}

export default NotFoundPage;
