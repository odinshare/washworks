import React from 'react';
import '../styles/testimonial-card.css';

export default function TestimonialCard({ quote, name, photo }) {
  return (
    <figure className="testimonial-card">
      {photo && (
        <img
          className="testimonial-photo"
          src={photo}
          alt={`Photo of ${name}`}
        />
      )}
      <figcaption className="testimonial-content">
        <blockquote className="testimonial-quote">{quote}</blockquote>
        <cite className="testimonial-author">— {name}</cite>
      </figcaption>
    </figure>
  );
}
