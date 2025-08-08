// src/components/AnalyticsProvider.js
import React, { createContext, useEffect, useState } from 'react';
import Tracker from '../utils/tracker';
import { getRegion } from '../utils/geolocation';

export const AnalyticsContext = createContext({
  region: null,
  trackEvent: Tracker.trackEvent
});

export default function AnalyticsProvider({ children }) {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    // Initialize only the 1×1 beacon and fetch region:
    Tracker.initBeacon();
    getRegion().then(setRegion);
  }, []);

  return (
    <AnalyticsContext.Provider value={{ region, trackEvent: Tracker.trackEvent }}>
      {children}
    </AnalyticsContext.Provider>
  );
}
