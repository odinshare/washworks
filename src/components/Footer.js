import React from 'react';
import '../styles/footer.css';
import fbIcon from '../assets/images/fb.svg';
import igIcon from '../assets/images/ig.svg';
import linkedinIcon from '../assets/images/linkedin.svg';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>Home</NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : undefined)}>Services</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>About</NavLink>
        <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : undefined)}>Gallery</NavLink>
        <NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'active' : undefined)}>Testimonials</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>Contact</NavLink>
        <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : undefined)}>FAQ</NavLink>
        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : undefined)}>Blog</NavLink>
      </div>
      <div className="footer-contact">
        <p>Call us: <a href="tel:508-555-1234">508-555-1234</a></p>
        <p>Email: <a href="mailto:info@washworks.com">info@washworks.com</a></p>
        <p>Serving Foxborough, MA & Surrounding Areas</p>
      </div>
      <div className="footer-social">
        <a href="#" aria-label="Facebook">
          <img src={fbIcon} alt="Facebook" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src={igIcon} alt="Instagram" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}
