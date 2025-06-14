import React from 'react';
import lolo from '../pics/hero1.png';
const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 h-[400px] px-8 md:px-16">
      {/* Left Side: Text and Button */}
      <div className="flex flex-col space-y-4 md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Find Your Perfect Vision with <span className="text-blue-900">Glarix</span>
        </h1>
        <p className="text-lg text-gray-600">
          Stylish. Durable. Affordable. Discover premium lenses crafted to fit your lifestyle.
        </p>
        <button className="bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg w-max hover:bg-blue-800 transition">
          Explore Collection
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        {/* Replace with your image path or URL */}
        <img
          src={lolo} // Add the actual image path here
          alt="Person wearing glasses"
          className="h-[300px] md:h-[350px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;