import React, { useState } from 'react';
import Tracker from '../utils/tracker';

export default function EmailCaptureModal({ onClose }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Tracker.trackEvent('email_capture', { email });
    onClose();
  };

  return (
    <div className="email-capture-modal">
      <div className="modal-content">
        <h2>Wait! Before you go…</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="capture-email">
            Enter your email to save your quote:
          </label>
          <input
            id="capture-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send me the details</button>
        </form>
        <button onClick={onClose}>No thanks</button>
      </div>
    </div>
  );
}
