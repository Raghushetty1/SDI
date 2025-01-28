import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero">
      <h2 style={{ color: '#f39c12' }}>Transforming Spaces with Premium Interlock Designs</h2>
      <button><Link to="/products">Learn More</Link></button>
    </div>
  );
};


