import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

const NotFoundPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (isBrowser) router.push('/');
  }, []);
  return null;
};

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
