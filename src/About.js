import React from "react";
import { BrandSection, Footer, NavBar } from "./components/componentindex";
import { AboutContent } from "./aboutpage/aboutpage";

const About = () => {
  return (
    <div>
      <NavBar />
      <AboutContent />
      <BrandSection />
      <Footer />
    </div>
  );
};

export default About;
