import React from 'react';
import logo from '../pics/glarix-logo.jpg'; // Put your logo in src/images folder
import './navbar.css'; 

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo Image */}
        <a href="/" className="d-flex align-items-center text-decoration-none">
          <img
            src={logo}
            alt="Glarix Logo"
            style={{ height: '40px', marginRight: '10px' }}
            className='rounded-circle shadow-sm'
          />
          <span className="fw-bold logo fs-4" >Glarix</span>
        </a>

        {/* Navigation Links */}
        <nav className="d-none d-md-flex gap-4">
          <a href="#products" className="text-dark text-decoration-none fw-semibold">
            Products
          </a>
          <a href="#about" className="text-dark text-decoration-none fw-semibold">
            About
          </a>
          <a href="#contact" className="text-dark text-decoration-none fw-semibold">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}