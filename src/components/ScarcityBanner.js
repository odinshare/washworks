import React, { useState, useEffect } from 'react';
import Tracker from '../utils/tracker';

export default function ScarcityBanner({ apiEndpoint }) {
  const [slots, setSlots] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function fetchSlots() {
      try {
        const res = await fetch(apiEndpoint);
        const { slotsRemaining } = await res.json();
        if (mounted) setSlots(slotsRemaining);
      } catch (err) {
        console.warn('Error fetching slots:', err);
      }
    }
    fetchSlots();
    return () => { mounted = false; };
  }, [apiEndpoint]);

  return slots != null
    ? <div className="scarcity-banner">
        Only {slots} booking slots left this week!
      </div>
    : null;
}
