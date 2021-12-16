import React, { useEffect, useState } from 'react';

function useOnScreen(ref: React.MutableRefObject<HTMLElement>, threshold = 0.5): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return isIntersecting;
}

export default useOnScreen;
