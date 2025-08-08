import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import GeoHeader from './GeoHeader';
import logo from '../assets/images/logo.png';
import '../styles/header.css';

export default function Header() {
  return (
    <>
      <GeoHeader />
      <header className="header">
        <div className="logo">
          <Link to="/"><img src={logo} alt="WashWorks Logo" /></Link>
        </div>
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : undefined)}>Services</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>About</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : undefined)}>Gallery</NavLink>
          <NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'active' : undefined)}>Testimonials</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>Contact</NavLink>
          <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : undefined)}>FAQ</NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : undefined)}>Blog</NavLink>
        </nav>
        <div className="cta">
          <Link to="/contact" className="btn-quote">Get a Free Quote</Link>
        </div>
      </header>
    </>
  );
}
