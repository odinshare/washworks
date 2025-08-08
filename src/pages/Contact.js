import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Have questions or need a quote? Reach out via phone, email, or fill out the form below.</p>

      <div className="contact-methods">
        <div className="contact-item">
          <h2>Phone</h2>
          <p>
            <a href="tel:7742155153">(774) 215-5153</a>
          </p>
        </div>
        <div className="contact-item">
          <h2>Email</h2>
          <p>
            <a href="mailto:info@washworks.com">info@washworks.com</a>
          </p>
        </div>
      </div>

      <form className="contact-form">
        <label>
          Name
          <input type="text" name="name" placeholder="Your Name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" placeholder="(###) ###-####" />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" placeholder="Your message..." required />
        </label>
        <button type="submit" className="btn-submit">Send Message</button>
      </form>
    </div>
  );
}
