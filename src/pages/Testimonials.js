import React from 'react';
import './testimonials.css';
import TestimonialCard from '../components/TestimonialCard';

// Replace these with your actual photos
import janePhoto from '../assets/images/author-jane.png';
import johnPhoto from '../assets/images/author-john.png';
import alicePhoto from '../assets/images/author-alice.png';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "WashWorks made my house look brand new! Their team was professional and efficient.",
      name: "Jane Doe, Foxborough",
      photo: janePhoto,
    },
    {
      quote: "We saw amazing results on our driveway. Highly recommend for any power washing needs!",
      name: "John Smith, Boston",
      photo: johnPhoto,
    },
    {
      quote: "Very satisfied with their roof cleaning service. Our shingles look spotless and our insurance premium went down!",
      name: "Alice Johnson, Mansfield",
      photo: alicePhoto,
    },
  ];

  return (
    <div className="testimonials-page">
      <h1>What Our Customers Are Saying</h1>
      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <TestimonialCard
            key={idx}
            quote={t.quote}
            name={t.name}
            photo={t.photo}
          />
        ))}
      </div>
    </div>
  );
}
