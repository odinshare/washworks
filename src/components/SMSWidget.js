import React, { useState, useEffect } from 'react';
import { Twilio } from 'twilio-client'; // ensure SDK installed

export default function SMSWidget({ accountSid, authToken }) {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const twilioClient = new Twilio(accountSid, authToken);
    setClient(twilioClient);
  }, [accountSid, authToken]);

  const sendText = () => {
    if (client) {
      client.messages
        .create({ body: 'Hello! How can we help you today?', to: 'YOUR_NUMBER', from: 'TWILIO_NUMBER' })
        .then(() => alert('Text sent!'))
        .catch(err => console.error('SMS error:', err));
    }
  };

  return (
    <button className="sms-widget" onClick={sendText}>
      Text us
    </button>
  );
}
