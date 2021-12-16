import _throttle from 'lodash.throttle';
import { useCallback, useState } from 'react';
import useEvent from './useEvent';

type WindowSize = { height: number; width: number };

function useWindowSize(fps = 60): WindowSize {
  const ms = 1000 / fps;

  const [windowSize, setWindowSize] = useState<WindowSize>({
    height: typeof window !== 'undefined' ? window.innerHeight : undefined,
    width: typeof window !== 'undefined' ? window.innerWidth : undefined,
  });

  const getWindowSize = useCallback(
    _throttle(() => setWindowSize({ height: window.innerHeight, width: window.innerWidth }), ms),
    [ms, setWindowSize, windowSize],
  );

  useEvent('resize', getWindowSize);

  return windowSize;
}

export default useWindowSize;
