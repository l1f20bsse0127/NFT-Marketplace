import React, { useContext } from "react";
import HERO from "../images/hero.png";
import HERONFT from "../images/mm.jpg";
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";
const HeroSection = () => {
  const { titleData } = useContext(NFTMarketplaceContext);
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 my-5">
          <h1 style={{ fontSize: "3rem", lineHeight: "1", color: "#6c757d" }}>
            <span style={{ color: "#007bff" }}>Discover</span>
            {titleData}
          </h1>
          <img
            src={HERONFT}
            alt="heronft"
            width={180}
            height={180}
            style={{
              borderRadius: "50rem",
              mixBlendMode: "multiply",
              // border: "0px solid #007bff",
            }}
          />
          <p className="my-3" style={{ color: "#6c757d" }}>
            Discover the most outstandong NFTs in all topics of life.Create your
            NFTs and sell them.
          </p>
          <button className="btn btn-primary" style={{ borderRadius: "2rem" }}>
            Start your Search
          </button>
        </div>
        <div className="col-md-6 my-5">
          <img src={HERO} alt="hero" width={350} height={380} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
