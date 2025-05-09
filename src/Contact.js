import React from "react";
import { BrandSection, Footer, NavBar } from "./components/componentindex";
import { Contacts } from "./contactPage/contactPage";
const Contact = () => {
  return (
    <div>
      <NavBar />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Contact;
