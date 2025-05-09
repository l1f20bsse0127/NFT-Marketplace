import React, { useCallback, useState, useEffect } from "react";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";
import USER1 from "../images/user-1.png";
import USER2 from "../images/user-2.png";
import USER3 from "../images/user-3.png";
import NFT1 from "../images/nft-image-1.png";
import NFT2 from "../images/nft-image-2.png";
import NFT3 from "../images/nft-image-3.png";
const NFTslider = () => {
  const [idName, setIdName] = useState(1);
  const SliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Usman Sherazi",
      collection: "Gym",
      price: "000006455 ETH",
      like: "243",
      image: USER1,
      nftImage: NFT1,
      time: {
        days: 27,
        hours: 11,
        minutes: 10,
        seconds: 25,
      },
    },

    {
      title: "Home NFT",
      id: 2,
      name: "Zainab Shahzad",
      collection: "Art",
      price: "0000077855 ETH",
      like: "203",
      image: USER3,
      nftImage: NFT2,
      time: {
        days: 20,
        hours: 10,
        minutes: 8,
        seconds: 20,
      },
    },

    {
      title: "Buddy NFT",
      id: 3,
      name: "Sara Decker",
      collection: "Gym",
      price: "00000905 ETH",
      like: "150",
      image: USER2,
      nftImage: NFT3,
      time: {
        days: 18,
        hours: 9,
        minutes: 6,
        seconds: 25,
      },
    },
  ];

  const increament = useCallback(() => {
    if (idName + 1 < SliderData.length) {
      setIdName(idName + 1);
    }
  }, [idName, SliderData.length]);

  const decreament = useCallback(() => {
    if (idName > 0) {
      setIdName(idName - 1);
    }
  }, [idName]);

  //   useEffect(() => {
  //     increament();
  //   }, []);

  return (
    <div className="container">
      <div className="row" style={{ padding: "3rem" }}>
        <div className="col-md-6">
          <div
            className="card text-left"
            // style={{
            //   borderRadius: "2rem",
            //   boxShadow: " 0 0 50px rgba(0, 0, 0, 0.432)",
            //   width: "38rem",
            // }}
          >
            <div className="card-header">
              <h2 style={{ fontWeight: "800", color: "#6c757d" }}>
                {SliderData[idName].title}
              </h2>
              <div style={{ display: "flex" }}>
                <img
                  src={SliderData[idName].image}
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                />
                <div style={{ lineHeight: "0" }} className="mx-2">
                  <p style={{ marginBottom: ".4rem", marginTop: "1rem" }}>
                    Creator
                  </p>
                  <h5 style={{ color: "#6c757d" }}>
                    {SliderData[idName].name}
                    <span>
                      <MdVerified />
                    </span>
                  </h5>
                </div>

                <AiFillFire
                  style={{ fontSize: "3rem", color: "#6c757d" }}
                  className="mx-5"
                />
                <div style={{ lineHeight: "0", marginLeft: "-2rem" }}>
                  <p
                    style={{
                      marginBottom: ".4rem",
                      marginTop: "1rem",
                      color: "#6c757d",
                    }}
                  >
                    Collection
                  </p>
                  <h4 style={{ color: "#6c757d" }}>
                    {SliderData[idName].collection}
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-body" style={{ background: "#c5c5c5" }}>
              <div className="address-box">
                <p className="address my-2">{SliderData[idName].price}</p>
                <span>
                  $221,21{" "}
                  <span style={{ color: "#c90000" }}>
                    <b>in Dollars</b>
                  </span>
                </span>
                <button className="border-button">Current Bid</button>
              </div>
              <div style={{ display: "flex" }} className="my-4">
                <MdTimer style={{ fontSize: "1.5rem", color: "#6c757d" }} />
                <p className="card-text">
                  <b style={{ color: "#6c757d" }}>Auction Ending in</b>
                </p>
              </div>

              <div style={{ display: "flex", gap: "2rem" }}>
                <div>
                  <h1 style={{ fontWeight: "800", color: "#6c757d" }}>
                    {SliderData[idName].time.days}
                  </h1>
                  <span>days</span>
                </div>
                <div>
                  <h1 style={{ fontWeight: "800", color: "#6c757d" }}>
                    {SliderData[idName].time.hours}
                  </h1>
                  <span>hours</span>
                </div>
                <div>
                  <h1 style={{ fontWeight: "800", color: "#6c757d" }}>
                    {SliderData[idName].time.minutes}
                  </h1>
                  <span>minutes</span>
                </div>
                <div>
                  <h1 style={{ fontWeight: "800", color: "#6c757d" }}>
                    {SliderData[idName].time.seconds}
                  </h1>
                  <span>seconds </span>
                </div>
              </div>

              <div className="my-5 d-flex justify-content-center">
                <button
                  className="btn btn-primary mx-4"
                  //   style={{ padding: "1rem" }}
                >
                  Place
                </button>
                <button
                  className="btn btn-primary mx-4"
                  //   style={{ padding: "1rem" }}
                >
                  View
                </button>
              </div>
            </div>
            <div className="card-footer text-muted">
              {" "}
              <div>
                <TbArrowBigLeftLines
                  style={{ fontSize: "2.5rem", color: "#6c757d" }}
                  className="mx-4"
                  onClick={() => decreament()}
                />
                <TbArrowBigRightLines
                  style={{ fontSize: "2.5rem", color: "#6c757d" }}
                  className="mx-4"
                  onClick={() => increament()}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-md-5">
          <div className="position-relative">
            <img
              src={SliderData[idName].nftImage}
              className="img-fluid my-5"
              alt="NFT"
              style={{
                borderRadius: "3rem",
                boxShadow: "0 0 100px rgba(0, 0, 0, 0.432)",
              }}
            />

            <div className="heart-overlay">
              <AiFillHeart className="heart-icon" />
              <span className="like-count">{SliderData[idName].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTslider;
