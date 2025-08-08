import React, { useEffect } from 'react';
import { isBusinessHours } from '../utils/timeHelpers';

export default function ChatFallback() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://example-chat-widget.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="chat-fallback">
      {!isBusinessHours() && (
        <p>
          We're offline. <a href="sms:+17742155153">Text us</a> or{' '}
          <a href="mailto:info@washworks.com">email us</a>.
        </p>
      )}
      <div id="chat-widget-container"></div>
    </div>
  );
}
