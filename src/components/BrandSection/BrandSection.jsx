import React from "react";
import COIN from "../images/coin.webp";
import LOGO from "../images/Screenshot (132).png";
const BrandSection = () => {
  return (
    <>
      <div style={{ marginTop: "8rem" }}>
        <h1 style={{ fontWeight: "800", color: "#6c757d" }}>Brand Section</h1>
        <p style={{ color: "#6c757d" }}>Discover, Create and Earn</p>
      </div>

      <div className="container " style={{ marginTop: "6rem" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={LOGO}
            alt="NFT LOGO"
            style={{ mixBlendMode: "multiply", width: "20%" }}
            // className="my-1"
          />
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 my-5">
            <h1 className="brand-heading">
              <span className="brand-accent">Earn</span> Free Crypto with us
              <span style={{ fontSize: "2.5rem" }}>🖼️</span>
            </h1>

            <p className="brand-text">
              Discover the most outstanding NFTs in all topics of life. Create
              your NFTs and sell them
            </p>
            <button className="btn btn-danger brand-button mx-2 my-3">
              Create Item
            </button>
            <button className="btn btn-secondary brand-button mx-2 my-3">
              Discover more
            </button>
          </div>
          <div className="col-md-6 my-5">
            <img src={COIN} alt="hero" className="brand-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandSection;
