import { useState, useEffect } from 'react';

/**
 * useScarcityBanner
 * @param {string} apiEndpoint - URL returning { slotsRemaining: number }
 * @returns {number|null} slotsRemaining or null while loading
 */
export default function useScarcityBanner(apiEndpoint) {
  const [slotsRemaining, setSlotsRemaining] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchSlots() {
      try {
        const res = await fetch(apiEndpoint);
        const data = await res.json();
        if (isMounted) {
          setSlotsRemaining(data.slotsRemaining);
        }
      } catch (err) {
        console.warn('ScarcityBanner fetch error:', err);
      }
    }
    fetchSlots();
    return () => {
      isMounted = false;
    };
  }, [apiEndpoint]);

  return slotsRemaining;
}
