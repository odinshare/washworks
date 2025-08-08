import React, { useState, useEffect } from 'react';
import Tracker from '../utils/tracker';
import EmailCaptureModal from './EmailCaptureModal';

export default function ExitIntentOverlay() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e) => {
      if (e.clientY < 0 && !showModal) {
        Tracker.trackEvent('exit_intent');
        setShowModal(true);
      }
    };
    document.addEventListener('mouseout', handleMouseOut);
    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, [showModal]);

  if (!showModal) return null;
  return <EmailCaptureModal onClose={() => setShowModal(false)} />;
}
