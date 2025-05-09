import React from "react";

import { BrandSection, Footer, NavBar } from "./components/componentindex";
import { Profile } from "./accountPage/accountIndex";
const Accounts = () => {
  return (
    <div>
      <NavBar />
      <Profile />
      <Footer />
    </div>
  );
};

export default Accounts;
