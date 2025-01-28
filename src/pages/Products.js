import React from "react";

export const Products = () => {
  const products = [
    { id: 1, name: "Classic Interlock", img: "/images/classic.jpg" },
    { id: 2, name: "Modern Interlock", img: "/images/modern.jpg" },
    { id: 3, name: "Custom Designs", img: "/images/custom.jpg" },
  ];

  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};


