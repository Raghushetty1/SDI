import React from "react";
import {Hero} from "../components/HeroSection.js";
import {AboutUs} from "./About.js";
import {Products} from "../pages/Products";
import {ContactForm} from "../components/ContactForm";
import {PastWorks} from "./Works.js";


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Past works showing */}
      <PastWorks />

      {/* About Section */}
      <AboutUs />

      {/* Products Preview Section */}
      <Products />

      {/* Call-to-Action Section */}
      <ContactForm />
    </div>
  );
};
export default Home;

