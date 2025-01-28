import React, { useRef } from "react";
import a1Image from "../assets/images/Designs/a1 (1).jpg";
import a2Image from "../assets/images/Designs/a1 (2).jpg";
import a3Image from "../assets/images/Designs/a1 (3).jpg";
import a4Image from "../assets/images/Designs/a1 (4).jpg";
import a5Image from "../assets/images/Designs/a1 (5).jpg";
import a6Image from "../assets/images/Designs/a1 (6).jpg";
import a7Image from "../assets/images/Designs/a1 (7).jpg";
import a8Image from "../assets/images/Designs/a1 (8).jpg";
import a9Image from "../assets/images/Designs/a1 (9).jpg";
import a10Image from "../assets/images/Designs/a1 (10).jpg";
import a11Image from "../assets/images/Designs/a1 (11).jpg";
import a12Image from "../assets/images/Designs/a1 (12).jpg";
import a13Image from "../assets/images/Designs/a1 (13).jpg";
import a14Image from "../assets/images/Designs/a1 (14).jpg";
import a15Image from "../assets/images/Designs/a1 (15).jpg";
import a16Image from "../assets/images/Designs/a1 (16).jpg";
import a17Image from "../assets/images/Designs/a1 (17).jpg";
import a18Image from "../assets/images/Designs/a1 (18).jpg";
import a19Image from "../assets/images/Designs/a1 (19).jpg";
import a20Image from "../assets/images/Designs/a1 (20).jpg";
import a21Image from "../assets/images/Designs/a1 (21).jpg";
import a22Image from "../assets/images/Designs/a1 (22).jpg";
import a23Image from "../assets/images/Designs/a1 (23).jpg";
import a24Image from "../assets/images/Designs/a1 (24).jpg";
import a25Image from "../assets/images/Designs/a1 (25).jpg";
import a26Image from "../assets/images/Designs/a1 (26).jpg";
import a27Image from "../assets/images/Designs/a1 (27).jpg";
import a28Image from "../assets/images/Designs/a1 (28).jpg";
import a29Image from "../assets/images/Designs/a1 (29).jpg";
import a30Image from "../assets/images/Designs/a1 (30).jpg";
import a31Image from "../assets/images/Designs/a1 (31).jpg";

import "../Product.css";

export const Products = () => {
  const products = [
    { id: 1, img: a1Image },
    { id: 2, img: a2Image },
    { id: 3, img: a3Image },
    { id: 4, img: a4Image },
    { id: 5, img: a5Image },
    { id: 6, img: a6Image },
    { id: 7, img: a7Image },
    { id: 8, img: a8Image },
    { id: 9, img: a9Image },
    { id: 10, img: a10Image },
    { id: 11, img: a11Image },
    { id: 12, img: a12Image },
    { id: 13, img: a13Image },
    { id: 14, img: a14Image },
    { id: 15, img: a15Image },
    { id: 16, img: a16Image },
    { id: 17, img: a17Image },
    { id: 18, img: a18Image },
    { id: 19, img: a19Image },
    { id: 20, img: a20Image },
    { id: 21, img: a21Image },
    { id: 22, img: a22Image },
    { id: 23, img: a23Image },
    { id: 24, img: a24Image },
    { id: 25, img: a25Image },
    { id: 26, img: a26Image },
    { id: 27, img: a27Image },
    { id: 28, img: a28Image },
    { id: 29, img: a29Image },
    { id: 30, img: a30Image },
    { id: 31, img: a31Image },
  ];

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -900, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 900, behavior: "smooth" });
  };

  return (
    <div className="products">
      <h2>Browse Through a Variety of Designs to Find Your Perfect Match</h2>
      <div className="scroll-buttons">
        <button onClick={scrollLeft} className="scroll-button">←</button>
        <button onClick={scrollRight} className="scroll-button">→</button>
      </div>
      <div className="product-list" ref={scrollContainerRef}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={`Product ${product.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
