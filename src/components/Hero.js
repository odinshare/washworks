import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/hero.css';
import { AnalyticsContext } from './AnalyticsProvider';

export default function Hero({ background }) {
  const { trackEvent } = useContext(AnalyticsContext);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-content">
        <h1>Your Home, Revived</h1>
        <p>Professional Power Washing in Foxborough</p>
        <p className="hero-subhead">
          Don’t let dirt and mildew damage your property—get your free quote today!
        </p>
        <div className="hero-buttons">
          <Link
            to="/contact"
            className="btn-primary"
            onClick={() => trackEvent('hero_cta_click')}
          >
            Get a Free Quote
          </Link>
          <Link to="/services" className="btn-secondary">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}