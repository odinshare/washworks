import React from 'react';
import { isReturningVisitor } from '../utils/returningVisitor';

export default function WelcomeBackMessage() {
  const returning = isReturningVisitor();
  if (!returning) return null;
  return (
    <div className="welcome-back-banner">
      Welcome back! Ready for another clean?
    </div>
  );
}
