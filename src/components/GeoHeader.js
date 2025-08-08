import React, { useContext } from 'react';
import { AnalyticsContext } from '../components/AnalyticsProvider';
import '../styles/geoheader.css';

export default function GeoHeader() {
  const { region } = useContext(AnalyticsContext);
  const message = `Serving ${region} homes! `;
  // Repeat message array to ensure a long continuous ticker
  const ticker = Array(5).fill(message).join(' ');

  return (
    <div className="geo-header">
      <div className="geo-header__marquee">
        <span className="geo-header__text">
          Serving {region} homes! Call to schedule your FREE estimate!
        </span>
      </div>
    </div>
  );
}
