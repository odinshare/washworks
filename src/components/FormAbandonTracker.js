import { useEffect } from 'react';
import Tracker from '../utils/tracker';

export default function FormAbandonTracker() {
  useEffect(() => {
    let idleTimer;
    const handleFocus = () => {
      Tracker.trackEvent('form_focus');
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        Tracker.trackEvent('form_idle');
      }, 30000); // 30s idle
    };
    const handleBlur = () => {
      clearTimeout(idleTimer);
    };
    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);
    return () => {
      clearTimeout(idleTimer);
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
    };
  }, []);
  return null;
}
