import { useEffect } from 'react';

function useEvent<E extends keyof WindowEventMap>(event: E, listener: EventListenerOrEventListenerObject) {
  useEffect(() => {
    window.addEventListener(event, listener);
    return () => {
      window.removeEventListener(event, listener);
    };
  }, [event, listener]);
}

export default useEvent;
