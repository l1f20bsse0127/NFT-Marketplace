import React, { useState } from "react";
import BG1 from "../../collectionPage/images/authorBanner.webp";
import NFT1 from "../../collectionPage/images/nft-4.webp";
import { MdVerified } from "react-icons/md";
const AuthorBanner = () => {
  const [following, setFollowing] = useState(false);

  const follow = () => {
    setFollowing((prevFollowing) => !prevFollowing);
  };
  return (
    <>
      <div className="banner-container">
        <img src={BG1} alt="background" className="banner-image" />
      </div>

      <div className="container">
        <div
          className="card style-cards"
          style={{
            backgroundColor: "#80808012",
            borderRadius: "2rem",
            backgroundColor: "rgb(253 251 251 / 58%)",
            marginTop: "-6rem",
          }}
        >
          <div className="row">
            <div className="col-md-4">
              <img
                className="card-img-top"
                src={NFT1}
                alt="Card image cap"
                style={{
                  borderRadius: "1.5rem",
                  maxWidth: "100%",
                  padding: "2rem",
                  borderRadius: "4rem",
                }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body my-5 text-left">
                {" "}
                {/* Add 'text-left' class */}
                <h1 className="card-title">
                  Dony Herrera{" "}
                  <span>
                    <MdVerified style={{ color: "#007bff" }} />
                  </span>
                </h1>
                <span style={{ color: "red" }}>
                  4.0xc4c16ac453sa645a...b21a
                </span>
                <p className="card-text">
                  Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs.
                  Contributing to @ether_cards, an NFT Monetization Platform.
                </p>
                {following ? (
                  <button
                    className="btn btn-secondary mx-4"
                    style={{ width: "5.5rem", borderRadius: "2rem" }}
                    onClick={() => follow()}
                  >
                    Following
                  </button>
                ) : (
                  <button
                    className="btn btn-primary mx-4"
                    style={{ borderRadius: "2rem" }}
                    onClick={() => follow()}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorBanner;
