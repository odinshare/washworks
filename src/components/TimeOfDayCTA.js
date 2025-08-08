import React from 'react';

export default function TimeOfDayCTA() {
  const hour = new Date().getHours();
  const isBusinessHours = hour >= 8 && hour < 18;
  return (
    <button className="cta-button">
      {isBusinessHours
        ? 'Call now—we’re online'
        : 'Leave your number and we’ll call you'}
    </button>
  );
}
