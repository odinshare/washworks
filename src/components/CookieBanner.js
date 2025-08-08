import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const cookieName = 'washworks_tracking';

  useEffect(() => {
    const consent = document.cookie.split('; ').find(c => c.startsWith(cookieName + '='));
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (allow) => {
    document.cookie = \`\${cookieName}=\${allow}; path=/; max-age=\${60*60*24*365}\`;
    setVisible(false);
    // TODO: enable/disable pixels based on allow
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>We use tracking to improve your experience. Do you consent?</p>
      <button onClick={() => handleChoice(true)}>Yes</button>
      <button onClick={() => handleChoice(false)}>No</button>
    </div>
  );
}
