import React, { useState } from "react";
import "../ContactForm.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    squareFeet: "",
    homeVisit: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <section className="contact-form-section">
      <h2>Enquiry About Price and Products</h2>
      <p>We'd love to hear from you! Fill out the form below, and we'll get back to you soon.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Square Feet (Optional) */}
        <div className="form-group">
          <label htmlFor="squareFeet">Square Feet (Optional)</label>
          <input
            type="number"
            id="squareFeet"
            name="squareFeet"
            placeholder="Approximate area in square feet"
            value={formData.squareFeet}
            onChange={handleChange}
          />
        </div>

        {/* Book a Home Visit */}
        <div className="form-group">
          <label>Book a Home Visit</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="homeVisit"
                value="Yes"
                onChange={handleChange}
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="homeVisit"
                value="No"
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </section>
  );
};


