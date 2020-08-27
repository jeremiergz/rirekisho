import React, { createContext, useContext, useEffect, useState } from 'react';

const ReadinessContext = createContext<{ isReady: boolean; setReady: (milestone: string) => void }>({
  isReady: false,
  setReady: () => null,
});

const ReadinessProvider: React.FC<ReadinessProviderProps> = ({ children, milestones = [] }) => {
  const [milestoneTracking, setMilestoneTracking] = useState(milestones.map(() => false));
  const [isReady, setIsReady] = useState(false);
  const setReady = (milestone: string) => {
    const index = milestones.findIndex(m => m === milestone);
    if (index > -1) {
      milestoneTracking[index] = true;
      setMilestoneTracking(milestoneTracking);
    }
  };
  useEffect(() => {
    if (milestoneTracking.every(t => t)) setIsReady(true);
  }, [milestoneTracking]);
  return <ReadinessContext.Provider value={{ isReady, setReady }}>{children}</ReadinessContext.Provider>;
};

ReadinessProvider.displayName = 'ReadinessProvider';

/**
 * Returns the readiness context..
 */
function useReadiness() {
  return useContext(ReadinessContext);
}

export { useReadiness };
export type ReadinessProviderProps = {
  milestones: string[];
};
export default ReadinessProvider;
