import React from "react";
import "../Works.css"; // Ensure that this CSS file is correctly linked
import b1 from "../assets/images/Gallery/b (1).jpg";
import b2 from "../assets/images/Gallery/b (2).jpg";
import b3 from "../assets/images/Gallery/b (3).jpg";
import b4 from "../assets/images/Gallery/b (4).jpg";
import b5 from "../assets/images/Gallery/b (5).jpg";
import b6 from "../assets/images/Gallery/b (6).jpg";
import b7 from "../assets/images/Gallery/b (7).jpg";
import b8 from "../assets/images/Gallery/b (8).jpg";
import b9 from "../assets/images/Gallery/b (9).jpg";
import b10 from "../assets/images/Gallery/b (10).jpg";
import b11 from "../assets/images/Gallery/b (11).jpg";
import b12 from "../assets/images/Gallery/b (12).jpg";
import b13 from "../assets/images/Gallery/b (13).jpg";
import b14 from "../assets/images/Gallery/b (14).jpg";
import b15 from "../assets/images/Gallery/b (15).jpg";
import b16 from "../assets/images/Gallery/b (16).jpg";
import b17 from "../assets/images/Gallery/b (17).jpg";
import b18 from "../assets/images/Gallery/b (18).jpg";
import b19 from "../assets/images/Gallery/b (19).jpg";
import b20 from "../assets/images/Gallery/b (20).jpg";
import b21 from "../assets/images/Gallery/b (21).jpg";
import b22 from "../assets/images/Gallery/b (22).jpg";
import b23 from "../assets/images/Gallery/b (23).jpg";
import b24 from "../assets/images/Gallery/b (24).jpg";
import b25 from "../assets/images/Gallery/b (25).jpg";
import b26 from "../assets/images/Gallery/b (26).jpg";
import b27 from "../assets/images/Gallery/b (27).jpg";
import b28 from "../assets/images/Gallery/b (28).jpg";
import b29 from "../assets/images/Gallery/b (29).jpg";
import b30 from "../assets/images/Gallery/b (30).jpg";
import b31 from "../assets/images/Gallery/b (31).jpg";
import b32 from "../assets/images/Gallery/b (32).jpg";
import b33 from "../assets/images/Gallery/b (33).jpg";
import b34 from "../assets/images/Gallery/b (34).jpg";
import b35 from "../assets/images/Gallery/b (35).jpg";
import b36 from "../assets/images/Gallery/b (36).jpg";
import b37 from "../assets/images/Gallery/b (37).jpg";
import b38 from "../assets/images/Gallery/b (38).jpg";
import b39 from "../assets/images/Gallery/b (39).jpg";
import b40 from "../assets/images/Gallery/b (40).jpg";
import b41 from "../assets/images/Gallery/b (41).jpg";
import b42 from "../assets/images/Gallery/b (42).jpg";

const works = [
  { image: b1 },
  { image: b2 },
  { image: b3 },
  { image: b4 },
  { image: b5 },
  { image: b6 },
  { image: b7 },
  { image: b8 },
  { image: b9 },
  { image: b10 },
  { image: b11 },
  { image: b12 },
  { image: b13 },
  { image: b14 },
  { image: b15 },
  { image: b16 },
  { image: b17 },
  { image: b18 },
  { image: b19 },
  { image: b20 },
  { image: b21 },
  { image: b22 },
  { image: b23 },
  { image: b24 },
  { image: b25 },
  { image: b26 },
  { image: b27 },
  { image: b28 },
  { image: b29 },
  { image: b30 },
  { image: b31 },
  { image: b32 },
  { image: b33 },
  { image: b34 },
  { image: b35 },
  { image: b36 },
  { image: b37 },
  { image: b38 },
  { image: b39 },
  { image: b40 },
  { image: b41 },
  { image: b42 }
];

export const PastWorks = () => {
  return (
    <section className="past-works-gallery">
      <h2>Our Past Works</h2>
      <div className="gallery">
        <div className="gallery-track">
          {works.map((work, index) => (
            <div className="gallery-item" key={index}>
              <img src={work.image} alt={`Work ${index + 1}`} />
            </div>
          ))}
          {/* Repeat works to create the infinite loop effect */}
          {works.map((work, index) => (
            <div className="gallery-item" key={`duplicate-${index}`}>
              <img src={work.image} alt={`Work ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
