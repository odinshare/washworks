import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import './home.css';
import { Link } from 'react-router-dom';

import heroBg from '../assets/images/hero-bg.jpg';
import houseIcon from '../assets/images/house.png';
import roofIcon from '../assets/images/roof.png';
import deckIcon from '../assets/images/deck.png';
import drivewayIcon from '../assets/images/driveway.png';

import licensed from '../assets/images/licensed.png';
import insured from '../assets/images/insured.png';
import osha from '../assets/images/osha.png';
import pwna from '../assets/images/pwna.png';
import bbbBadge from '../assets/images/bbb.png';

import janePhoto from '../assets/images/author-jane.png';

export default function Home() {
  return (
    <>
      <Hero background={heroBg} />

      <section className="services-overview">
        <ServiceCard title="House Washing" src={houseIcon} />
        <ServiceCard title="Roof Cleaning" src={roofIcon} />
        <ServiceCard title="Deck & Patio" src={deckIcon} />
        <ServiceCard title="Driveway Cleaning" src={drivewayIcon} />
      </section>

      <section className="trust-badges">
        <img src={licensed} alt="Licensed & Insured" />
        <img src={insured} alt="Insured" />
        <img src={osha} alt="OSHA Safety Trained" />
        <img src={pwna} alt="PWNA Member" />
        <img src={bbbBadge} alt="BBB Accredited A+" />
      </section>

      <section className="testimonial-snippet">
        <TestimonialCard
          quote="WashWorks made my house look new again!"
          name="Jane D., Foxborough"
          photo={janePhoto}
        />
      </section>

      <section className="cta-section">
        <h2>Ready to See the Difference?</h2>
        <Link to="/contact" className="btn-primary">Get Your Free Quote</Link>
      </section>
    </>
  );
}
