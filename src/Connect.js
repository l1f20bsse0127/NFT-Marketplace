import React from "react";
import { Footer, NavBar } from "./components/componentindex";
import { MetaMask } from "./connectPage/ConnectIndex";

const Connect = () => {
  return (
    <div>
      <NavBar />
      <MetaMask />
      <Footer />
    </div>
  );
};

export default Connect;
