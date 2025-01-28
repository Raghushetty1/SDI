import React from "react";
import { ContactForm } from "../components/ContactForm"; // Importing the ContactForm component

export const Contact = () => {
  return (
    <div className="contact" style={styles.contactContainer}>
      {/* Logo and Contact Info Section in One Row */}
      <div style={styles.rowContainer}>
        {/* Logo Section */}
        <div style={styles.logoContainer}>
          <img
            src="/SDI icon.png" // Logo from the public folder
            alt="Logo"
            style={styles.logo}
          />
        </div>

        {/* Contact Info Section */}
        <div style={styles.contactInfo}>
          <h3 style={styles.title}>Contact Us:</h3>
          <h4 style={styles.name}>Suresh Shetty Kokkodu</h4>
          <p style={styles.company}>Sri Durga Interlocks Mullugudde</p>
          <p style={styles.email}>Email: <a href="mailto:info@interlockfactory.com">info@interlockfactory.com</a></p>
          <p style={styles.phone}>Phone: <br /> 9480615553 <br /> 9663094253</p>
        </div>
      </div>

      {/* Contact Form Component */}
      <ContactForm />
    </div>
  );
};

const styles = {
  contactContainer: {
    display: 'flex', // Use flexbox to stack elements vertically
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px',
    margin: 'auto',
    fontFamily: 'Poppins, sans-serif',
    color: '#2c3e50',
  },
  rowContainer: {
    display: 'flex', // Align logo and contact info side by side
    alignItems: 'center', // Vertically center the items in the row
    marginBottom: '30px', // Space before contact form
  },
  logoContainer: {
    marginRight: '20px', // Space between logo and contact details
  },
  logo: {
    width: '60px', // Adjust logo size as needed
    height: 'auto',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column', // Stack contact details vertically
    alignItems: 'flex-start', // Align items to the left
    textAlign: 'left',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#F97316',
  },
  name: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  company: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  email: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  phone: {
    fontSize: '18px',
  },
};
