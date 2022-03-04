import _throttle from 'lodash.throttle';
import { useCallback, useState } from 'react';
import useEvent from './useEvent';

function useScrollThreshold(threshold: number, fps = 60): boolean {
  const ms = 1000 / fps;
  const [isAboveThreshold, setIsAboveThreshold] = useState(false);

  const getScrollY = useCallback(
    _throttle(() => setIsAboveThreshold(window.scrollY > threshold), ms),
    [ms, setIsAboveThreshold, threshold],
  );
  useEvent('scroll', getScrollY);

  return isAboveThreshold;
}

export default useScrollThreshold;
