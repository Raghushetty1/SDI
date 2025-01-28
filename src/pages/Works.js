import React from "react";
import "../Works.css";

const works = [
  { title: "Modern Patio Design", image: "path/to/patio-image.jpg" },
  { title: "Elegant Driveway", image: "path/to/driveway-image.jpg" },
  { title: "Garden Walkway", image: "path/to/walkway-image.jpg" },
  { title: "Poolside Retreat", image: "path/to/poolside-image.jpg" },
  { title: "Urban Backyard", image: "path/to/backyard-image.jpg" },
];

export const PastWorks = () => {
  return (
    <section className="past-works-gallery">
      <h2>Our Past Works</h2>
      <div className="gallery">
        <div className="gallery-track">
          {works.map((work, index) => (
            <div className="gallery-item" key={index}>
              <img src={work.image} alt={work.title} />
              <div className="gallery-title">{work.title}</div>
            </div>
          ))}
          {/* Repeat works to create the infinite loop effect */}
          {works.map((work, index) => (
            <div className="gallery-item" key={`duplicate-${index}`}>
              <img src={work.image} alt={work.title} />
              <div className="gallery-title">{work.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


