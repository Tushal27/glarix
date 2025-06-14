import React from 'react';
import product1 from '../pics/product1.jpg';
import product2 from '../pics/product2.jpg';
import product3 from '../pics/product3.jpg';
import product4 from '../pics/product4.jpg';
import product5 from '../pics/product5.jpg';
import product6 from '../pics/product6.jpg';
import product7 from '../pics/product7.jpg';
import product8 from '../pics/product8.jpg';
import product9 from '../pics/product9.jpg';
import product10 from '../pics/product10.jpg';
import product11 from '../pics/product11.jpg';
import product12 from '../pics/product12.jpg';

const pics = [
  { src: product1, model: '359-48', color: 'Matte Black', price: '₹499' },
  { src: product2, model: '391-48', color: 'Maroon Black', price: '₹599' },
  { src: product3, model: '365-48', color: 'Royal Black', price: '₹499' },
  { src: product4, model: '359-48', color: 'Matte Black', price: '₹599' },
  { src: product5, model: '379-48', color: 'Red Blue', price: '₹499' },
  { src: product6, model: '379-48', color: 'Red Blue', price: '₹499' },
  { src: product7, model: '359-48', color: 'Titanium Black', price: '₹599' },
  { src: product8, model: '397-48', color: 'Shiny Black', price: '₹499' },
  { src: product9, model: '368-48', color: 'Black', price: '₹599' },
  { src: product10, model: '350-48', color: 'Rose Red Black', price: '₹499' },
  { src: product11, model: '386-48', color: 'Glossy Black', price: '₹599' },
  { src: product12, model: '401-48', color: 'Dark Maroon', price: '₹499' },
];

export default function products() {
  return (
    <section className="py-5 bg-white text-center" id="pics">
      <div className="container">
        <h2 className="mb-4 fw-bold text-2xl md:text-3xl">Our Top Picks</h2>
        <div className="row">
          {pics.map((product, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div
                className="card shadow-sm border-0 h-100"
                style={{
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.05)';
                }}
              >
                <img
                  src={product.src}
                  alt={`Lens Model ${i + 1}`}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "contain",
                    padding: "10px",
                    transition: "transform 0.3s",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Model: {product.model}</h5>
                  <p className="card-text">Color: {product.color}</p>
                  <p className="text-success fw-bold">{product.price}</p>
                  <button
  className="btn btn-outline-primary"
  onClick={() => alert(`Thank you for showing interest in Model ${product.model}`)}
>
  Buy Now
</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}