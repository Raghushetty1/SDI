import React from "react";
import "../AboutUs.css"; // Import the CSS file

export const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        {/* Header Section */}
        <h1 className="about-us-title">
          About <span className="highlight">Shree Durga Industries</span>
        </h1>
        <p className="about-us-description">
          At Shree Durga Industries, we bring together innovation and
          craftsmanship through our two core divisions:{" "}
          <span className="highlight">Shree Durga Interlocks</span> and{" "}
          <span className="highlight">Shree Durga Earth Movers</span>. With a
          commitment to quality and excellence, we aim to deliver solutions
          that shape a better tomorrow.
        </p>

        {/* Department Sections */}
        <div className="departments-container">
          {/* Shree Durga Interlocks Section */}
          <div className="department-card">
            <h2 className="department-title">Shree Durga Interlocks</h2>
            <p className="department-description">
              Specializing in durable and aesthetic interlocking tiles, blocks,
              and pavers, Shree Durga Interlocks offers high-quality products
              for residential, commercial, and industrial spaces. Our range of
              designs and colors ensures a perfect fit for every project.
            </p>
            <p className="department-description">
              Whether it’s elegant pathways, sturdy driveways, or landscaping
              projects, our interlocks combine style and durability to enhance
              functionality and visual appeal.
            </p>
          </div>

          {/* Shree Durga Earth Movers Section */}
          <div className="department-card">
            <h2 className="department-title">Shree Durga Earth Movers</h2>
            <p className="department-description">
              Shree Durga Earth Movers specializes in efficient and reliable
              earthmoving services, including land clearing, site preparation,
              trenching, and road construction. Our fleet of advanced machinery
              ensures precision and timely execution for projects of all sizes.
            </p>
            <p className="department-description">
              With a focus on safety and quality, we’re your trusted partner for
              all heavy-duty earthmoving needs, providing seamless solutions for
              challenging projects.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <p className="about-us-footer">
          Together, <span className="highlight">Shree Durga Interlocks</span>{" "}
          and <span className="highlight">Shree Durga Earth Movers</span> form
          the foundation of Shree Durga Industries, driving innovation, quality,
          and excellence in every project.
        </p>
      </div>
    </div>
  );
};
