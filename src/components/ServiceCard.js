import React from 'react';
import '../styles/service-card.css';

export default function ServiceCard({ title, src }) {
  return (
    <div className="service-card">
      <img src={src} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}