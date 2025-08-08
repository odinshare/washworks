import React from 'react';
import './services.css';
import houseIcon from '../assets/images/house.png';
import roofIcon from '../assets/images/roof.png';
import deckIcon from '../assets/images/deck.png';
import drivewayIcon from '../assets/images/driveway.png';

export default function Services() {
  const services = [
    {
      title: 'Soft Washing',
      icon: houseIcon,
      description:
        'Safe, gentle cleaning for vinyl, wood & aluminum siding, composite decking, fences.',
    },
    {
      title: 'Pressure Washing',
      icon: drivewayIcon,
      description:
        'Hot & cold washing for driveways, walkways, loading docks, dumpster pads, retaining walls.',
    },
    {
      title: 'Roof Cleaning',
      icon: roofIcon,
      description:
        'Low-pressure moss, lichen & streak removal—extends roof life & protects your warranty.',
    },
    {
      title: 'Gutter Cleaning & Repair',
      icon: deckIcon,
      description:
        'Prevents water damage to foundation, trim, windows & basements with complete debris removal.',
    },
    // add more entries here as needed
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p>
        At WashWorks, we offer a full suite of exterior cleaning solutions—backed by industry-trained
        professionals, licensed & insured for your peace of mind.
      </p>
      <div className="services-grid">
        {services.map((svc) => (
          <div key={svc.title} className="service-item">
            <img src={svc.icon} alt={svc.title} />
            <h3>{svc.title}</h3>
            <p>{svc.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}