import _throttle from 'lodash.throttle';
import { useCallback, useEffect, useState } from 'react';

function useScrollPosition(fps = 60) {
  const ms = 1000 / fps;
  const [scrollPosition, setScrollPosition] = useState(0);
  const getScrollY = useCallback(
    _throttle(() => setScrollPosition(window.scrollY), ms),
    [ms, setScrollPosition],
  );

  useEffect(() => {
    window.addEventListener('scroll', getScrollY);
    return () => {
      window.removeEventListener('scroll', getScrollY);
    };
  }, [getScrollY]);
  return scrollPosition;
}

export default useScrollPosition;
