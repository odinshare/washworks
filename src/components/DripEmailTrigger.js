import React, { useEffect } from 'react';
import Tracker from '../utils/tracker';

export default function DripEmailTrigger({ formData, trigger }) {
  useEffect(() => {
    if (trigger) {
      fetch('/api/drip-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then(() => Tracker.trackEvent('drip_email_triggered', { email: formData.email }))
        .catch(e => console.error('Drip email error:', e));
    }
  }, [trigger, formData]);

  return null;
}
