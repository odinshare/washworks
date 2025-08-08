// src/utils/tracker.js
// Central tracking API for pageviews and custom events

const ANALYTICS_ENDPOINT = '/api/analytics';
const PIXEL_PATH = '/pixel.gif';

const Tracker = {
  initBeacon: () => {
    if (document.cookie.includes('washworks_tracking=false')) return;
    const img = new Image(1,1);
    img.src = PIXEL_PATH;
    img.style.display = 'none';
    document.body.appendChild(img);
  },

  trackEvent: (eventName, payload = {}) => {
    // Google Analytics (GA4)
    if (window.gtag) {
      window.gtag('event', eventName, payload);
    }
    // Facebook Pixel
    if (window.fbq) {
      window.fbq('trackCustom', eventName, payload);
    }
    // LinkedIn Insight (guard against missing lintrk)
    if (typeof window.lintrk === 'function' && window._linkedin_data_partner_id) {
      window.lintrk('track', { conversion_id: window._linkedin_data_partner_id, event: eventName, ...payload });
    }
    // Custom beacon fallback
    const beaconUrl = `/track.gif?name=${encodeURIComponent(eventName)}&data=${encodeURIComponent(JSON.stringify(payload))}`;
    navigator.sendBeacon(beaconUrl);

    // send to custom analytics endpoint
    fetch(ANALYTICS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: eventName,
        payload,
        url: window.location.href,
        timestamp: new Date().toISOString()
      })
    }).catch(err => console.error('Analytics POST error:', err));
  }
};

export default Tracker;
