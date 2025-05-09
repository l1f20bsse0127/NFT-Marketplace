import React from "react";
import BG1 from "../images/creatorbackground-1.jpeg";
import NFT1 from "../images/nft-image-2.png";
const Banner = () => {
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
            marginTop: "-8rem",
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
              <div className="card-body my-5">
                <h1 className="card-title">Awesome NFTs collection</h1>
                <p className="card-text">
                  Karafuru is home to 5,555 generative arts where colors reign
                  supreme. Leave the drab reality and enter the world of
                  Karafuru by Museum of Toys.
                </p>
                <div className="row mt-4">
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div
                      className="small-box"
                      style={{
                        backgroundColor: "#fbbbbb",
                        borderRadius: "4rem",
                        padding: "2rem",
                      }}
                    >
                      Floor Price
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div
                      className="small-box"
                      style={{
                        backgroundColor: "#a7d1ff",
                        borderRadius: "4rem",
                        padding: "2rem",
                      }}
                    >
                      Volume
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div
                      className="small-box"
                      style={{
                        backgroundColor: "#97ffae",
                        borderRadius: "4rem",
                        padding: "2rem",
                      }}
                    >
                      Latest Price
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div
                      className="small-box"
                      style={{
                        backgroundColor: "#ced4da",
                        borderRadius: "4rem",
                        padding: "2rem",
                      }}
                    >
                      Items
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
