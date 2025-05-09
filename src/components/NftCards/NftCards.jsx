import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
// import CARD1 from "../images/nft-image-1.png";
import NFT1 from "../images/nft-image-1.png";
import NFT2 from "../images/nft-image-2.png";
import NFT3 from "../images/nft-image-3.png";
import NFT4 from "../../collectionPage/images/nft-4.webp";

const NftCards = () => {
  const CardsArray = [NFT4, NFT2, NFT3, NFT2, NFT3, NFT2];

  // State to track liked status for each card
  const [likedCards, setLikedCards] = useState([]);

  // Function to toggle liking a card
  const toggleLike = (cardNumber) => {
    if (likedCards.includes(cardNumber)) {
      setLikedCards(likedCards.filter((likedCard) => likedCard !== cardNumber));
    } else {
      setLikedCards([...likedCards, cardNumber]);
    }
  };

  const isCardLiked = (cardNumber) => {
    return likedCards.includes(cardNumber);
  };

  const renderCards = () => {
    return CardsArray.map((cardNumber, index) => (
      <div key={index} className="col-md-4 col-sm-6 mb-4">
        <div
          className="card-container"
          style={{
            backgroundColor: "#ededed",
            borderRadius: "1rem",
            // height: "26rem",
            // border: "2px solid grey",
          }}
        >
          <div className="skewed-overlay">
            {/* <div className="skewed-image"></div> */}
          </div>
          <img
            className="imgCard"
            src={cardNumber}
            alt={`Card ${cardNumber}`}
            height={200}
            width={200}
          />
          <div
            className="heart-icons"
            onClick={() => toggleLike(cardNumber)}
            style={{
              backgroundColor: "#7e7e7e6e",
              borderRadius: "2rem",
              padding: "1rem",
            }}
          >
            <div className="heart-icon-container">
              {isCardLiked(cardNumber) ? (
                <AiFillHeart className="filled-heart-icon" />
              ) : (
                <AiOutlineHeart className="outline-heart-icon" />
              )}
            </div>
          </div>
          <div className="overlay-top-right">
            Remaining Time: <span style={{ color: "red" }}>2d 5h 30m</span>
          </div>
          <div className="overlay-bottom-left">
            <h2
              style={{
                marginRight: "40px",
                fontWeight: "650",
                color: "#6c757d",
              }}
            >
              Clone#1f2r
            </h2>
            <div className="eth-price">
              <span>0.05 ETH</span>
              <button className="btn btn-sm btn-success mx-3">
                Current Bid
              </button>
              <span>
                <BsImages style={{ fontSize: "1.5rem", color: "#6c757d" }} />
              </span>
            </div>
          </div>
          <div className="card-body"></div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="row">{renderCards()}</div>
    </div>
  );
};

export default NftCards;
