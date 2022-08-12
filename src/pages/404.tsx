import SEO from '@/common/components/misc/SEO';
import { navigate } from 'gatsby';
import { useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

function NotFoundPage(): JSX.Element {
  useEffect(() => {
    if (isBrowser) navigate('/');
  }, []);

  return null;
}

export function Head(): JSX.Element {
  return <SEO />;
}

export default NotFoundPage;
