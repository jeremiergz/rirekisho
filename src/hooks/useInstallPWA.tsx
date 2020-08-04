import { useEffect } from 'react';

type BeforeInstallPromptEvent = Event & {
  prompt(): Promise<void>;
};

const eventName = 'beforeinstallprompt';

/**
 * Returns theme retrieved from context.
 */
function useInstallPWA() {
  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.prompt().catch(() => {});
    };
    window.addEventListener(eventName, handler);
    return () => {
      window.removeEventListener(eventName, handler);
    };
  }, []);
}

export default useInstallPWA;
