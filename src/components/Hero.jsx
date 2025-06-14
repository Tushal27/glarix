import React from 'react';
import heroImg from '../pics/hero.jpg';
export default function Hero() {
  return (
    <section className="bg-light py-5" id="hero">
      <div className="container " >
        <div className="row align-items-center molo">
          {/* Text Section */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0" >
            <h1 className="display-5 fw-bold text-primary">
              Find Your Perfect Vision with Glarix
            </h1>
            <p className="lead text-muted mt-3 mb-4">
              Stylish. Durable. Affordable. Discover premium lenses crafted to fit your lifestyle.
            </p>
            <a href="#products" className="btn btn-primary btn-lg shadow-sm">
              Explore Collection
            </a>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img
              className ='rounded-circle shadow-sm fluid '         
              src={heroImg}
              alt="Stylish eyewear"
              style={{ maxHeight: '400px', objectFit: 'cover'}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}