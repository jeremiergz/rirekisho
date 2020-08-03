import { useCallback, useEffect, useState } from 'react';

const defaultOrientation: Partial<ScreenOrientation> = { type: 'portrait-primary' };

function getOrientation() {
  if (typeof window !== 'undefined') {
    const { height, orientation, width } = window.screen;
    return orientation ? orientation : { type: height > width ? 'portrait-primary' : 'landscape-primary' };
  }
  return defaultOrientation;
}

/**
 * Returns screen orientation.
 */
function useScreenOrientation() {
  const [orientation, setOrientation] = useState(getOrientation());
  const handleOrientationChange = useCallback(() => setOrientation(getOrientation()), []);
  useEffect(() => {
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);
  return orientation.type.includes('portrait') ? 'portrait' : 'landscape';
}

export default useScreenOrientation;
