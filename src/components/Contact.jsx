import React from 'react';

export default function Contact() {
  return (
    <footer id="contact" className="bg-dark text-white py-4">
      <div className="container text-center">
        <h5 className="fw-bold">Contact Us</h5>
        <p>Email: support@glarix.com | Phone: +91 99629 78556</p>
        <p className="mb-0">&copy; {new Date().getFullYear()} Glarix. All rights reserved.</p>
      </div>
    </footer>
  );
}