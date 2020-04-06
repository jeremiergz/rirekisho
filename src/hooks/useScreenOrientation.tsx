import { useCallback, useEffect, useState } from 'react';

const defaultOrientation = { type: 'portrait-primary' };

function useScreenOrientation() {
  const [orientation, setOrientation] = useState(
    typeof window !== 'undefined' ? window.screen.orientation : defaultOrientation,
  );
  const handleOrientationChange = useCallback(() => setOrientation(window.screen.orientation), []);
  useEffect(() => {
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);
  return orientation.type.includes('portrait') ? 'portrait' : 'landscape';
}

export default useScreenOrientation;
