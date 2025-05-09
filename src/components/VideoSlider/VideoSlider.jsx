// import React, { useState } from "react";
// import SLIDE from "../images/creatorbackground-1.jpeg";
import BGNFT from "../images/nft-image1.jpg";
// import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
// import Video1 from "../../../public/Videos/video.mp4";
import React, { useCallback, useState, useEffect } from "react";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";

const VideoSlider = () => {
  const [idName, setIdName] = useState(1);
  const SliderData = [
    {
      title: "NFT video #1202",
      id: 1,

      price: "000006455 ETH",
      like: "243",
      video: "/Videos/video.mp4",

      time: {
        days: 27,
        hours: 11,
        minutes: 10,
        seconds: 25,
      },
    },

    {
      title: "NFT video #1203",
      id: 2,
      video: "/Videos/video2.mp4",
      price: "0000077855 ETH",
      like: "203",

      time: {
        days: 20,
        hours: 10,
        minutes: 8,
        seconds: 20,
      },
    },

    {
      title: "NFT video #1204",
      id: 3,
      video: "/Videos/video3.mp4",
      price: "00000905 ETH",
      like: "150",

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

  return (
    <>
      <div style={{ marginTop: "8rem" }}>
        <h1 style={{ fontWeight: "800", color: "#6c757d" }}>
          Explore NFTs Video
        </h1>
        <p style={{ color: "#6c757d" }}>
          Click on play icon and enjoy NTFs video
        </p>
      </div>

      <div
        className="container my-5"
        style={{
          backgroundImage: `url(${BGNFT})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "3rem",
        }}
      >
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
                <h2 style={{ fontWeight: "800", color: "black" }}>
                  {SliderData[idName].title}
                </h2>
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
                    <b style={{ color: "black" }}>Auction Ending in</b>
                  </p>
                </div>

                <div style={{ display: "flex", gap: "2rem" }}>
                  <div>
                    <h1 style={{ fontWeight: "800", color: "black" }}>
                      {SliderData[idName].time.days}
                    </h1>
                    <span>days</span>
                  </div>
                  <div>
                    <h1 style={{ fontWeight: "800", color: "black" }}>
                      {SliderData[idName].time.hours}
                    </h1>
                    <span>hours</span>
                  </div>
                  <div>
                    <h1 style={{ fontWeight: "800", color: "black" }}>
                      {SliderData[idName].time.minutes}
                    </h1>
                    <span>minutes</span>
                  </div>
                  <div>
                    <h1 style={{ fontWeight: "800", color: "black" }}>
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
                    style={{ fontSize: "2.5rem", color: "black" }}
                    className="mx-4"
                    onClick={() => decreament()}
                  />
                  <TbArrowBigRightLines
                    style={{ fontSize: "2.5rem", color: "black" }}
                    className="mx-4"
                    onClick={() => increament()}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-md-5">
            <div className="position-relative">
              <video
                controls
                autoPlay
                muted
                loop
                width={380}
                height={300}
                src={SliderData[idName].video}
                // src="/Videos/video.mp4"
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
    </>
  );
};

export default VideoSlider;
