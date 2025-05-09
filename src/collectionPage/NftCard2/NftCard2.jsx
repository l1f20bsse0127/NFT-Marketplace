import React, { useState } from "react";
import NFT1 from "../images/nft-image-1.png";
import NFT2 from "../images/nft-image-2.png";
import NFT3 from "../images/nft-image-3.png";
import NFT4 from "../images/nft-4.webp";
import NFT5 from "../images/nft-image1.jpg";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdTimer } from "react-icons/md";
const NftCard2 = () => {
  const Card2Array = [
    NFT1,
    NFT2,
    NFT3,
    NFT4,
    NFT5,
    NFT5,
    NFT4,
    NFT3,
    NFT2,
    NFT1,
  ];
  const [likeArray, setLikeArray] = useState(
    new Array(Card2Array.length).fill(false)
  );
  const [likeInc, setLikeInc] = useState(21);

  const toggleLike = (index) => {
    const newLikeArray = [...likeArray];
    newLikeArray[index] = !newLikeArray[index];
    setLikeArray(newLikeArray);
  };

  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {Card2Array.map((image, index) => (
          <div className="col mb-4" key={index + 1}>
            <div
              className="card custom-card"
              style={{
                backgroundColor: "#80808012",
                borderRadius: "2rem",
              }}
            >
              <img
                className="card-img-top"
                src={image}
                alt={`NFT Image ${index}`}
                width={286}
                height={160}
                style={{ borderRadius: "1.5rem" }}
              />
              <div className="heart-overlay2" onClick={() => toggleLike(index)}>
                {likeArray[index] ? (
                  <AiOutlineHeart className="heart-icon2" />
                ) : (
                  <AiFillHeart className="heart-icon2" />
                )}
                <span className="like-count2"></span>
              </div>

              <div className="card-body d-flex align-items-center">
                <div
                  style={{
                    lineHeight: ".4",
                    textAlign: "justify",
                    marginTop: "1rem",
                  }}
                  className="mx-2"
                >
                  <p
                    style={{
                      marginBottom: ".4rem",
                      color: "#6c757d",
                      textAlign: "justify",
                    }}
                  >
                    <b>CloneF#0012</b>
                    <span className="mx-2">
                      <BsImage />
                      {/* <AiFillHeart /> */}
                    </span>
                  </p>
                  <hr />
                  <div className="address-box2">
                    <p className="address my-2">1.000ETH</p>
                    {/* <span style={{ color: "grey" }}>
                      <MdTimer />
                    </span> */}
                    <small style={{ color: "red", fontSize: ".8rem" }}>
                      {" "}
                      <MdTimer color="grey" fontSize=".9rem" />
                      14hours left
                    </small>

                    <button className="border-button2">Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftCard2;
