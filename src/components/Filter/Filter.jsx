import React, { useState } from "react";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaVideo,
  FaImages,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
const Filter = () => {
  const [filter, setFilter] = useState(true);
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);

  const openFilter = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };
  const openImage = () => {
    if (!image) {
      setImage(true);
    } else {
      setImage(false);
    }
  };
  const openVideo = () => {
    if (!video) {
      setVideo(true);
    } else {
      setVideo(false);
    }
  };

  return (
    <>
      <div className="my-5">
        <h1 style={{ fontWeight: "800", color: "#6c757d" }}>Featured NFTs</h1>
        <p style={{ color: "#6c757d" }}>
          Discover the most outstanding NFTs in all topics of life
        </p>
      </div>

      {/* <div className="container my-5" style={{ padding: "4rem" }}>
        <div className="row ">
          <div className="col-8">
            <div className="d-flex align-items-center">
              <button className="btn  me-2 mx-1 effect">All NFTs</button>
              <button className="btn  me-2 mx-1 effect">Arts</button>
              <button className="btn  me-2 mx-1 effect">Sports</button>
              <button className="btn  me-2 mx-1 effect">Photography</button>
            </div>
          </div>
          <div className="col-4 text-end">
            <div
              className="btn btn-primary"
              onClick={() => openFilter()}
              style={{
                borderRadius: "1.5rem",
                padding: ".5rem",
                width: "10rem",
              }}
            >
              <FaFilter />
              <span className="mx-2">Filter</span>
              {filter ? <FaAngleDown /> : <FaAngleUp />}
            </div>
          </div>
        </div>
        {filter && (
          <>
            <hr className="my-5 styled-hr" />
            <div className="row">
              <div className="d-flex align-items-center">
                <div
                  className="btn mx-2 hover-effect"
                  //   style={{
                  //     background: "linear-gradient(to right, #AABBCC, #223344)",
                  //     color: "black",
                  //     borderRadius: "2rem",
                  //   }}
                >
                  <FaWallet style={{ fontSize: "1rem" }} />
                  <span className="mx-2">0.01 ETH - 10 ETH</span>
                  <AiFillCloseCircle style={{ fontSize: "1rem" }} />
                </div>

                <div
                  className="btn  mx-2 hover-effect"
                  //   style={{
                  //     background: "linear-gradient(to right, #AABBCC, #223344)",
                  //     borderRadius: "2rem",
                  //     color: "black",
                  //   }}
                  onClick={() => openImage()}
                >
                  <FaImages style={{ fontSize: "1rem" }} />
                  <span className="mx-2">Images</span>
                  {image ? (
                    <AiFillCloseCircle style={{ fontSize: "1rem" }} />
                  ) : (
                    <TiTick style={{ fontSize: "1rem" }} />
                  )}
                </div>
                <div
                  className="btn  mx-2 hover-effect"
                  //   style={{
                  //     background: "linear-gradient(to right, #AABBCC, #223344)",
                  //     borderRadius: "2rem",
                  //     color: "black",
                  //   }}
                  onClick={() => openVideo()}
                >
                  <FaVideo style={{ fontSize: "1rem" }} />
                  <span className="mx-2">Videos</span>
                  {video ? (
                    <AiFillCloseCircle style={{ fontSize: "1rem" }} />
                  ) : (
                    <TiTick style={{ fontSize: "1rem" }} />
                  )}
                </div>
                <div
                  className="btn  mx-2 hover-effect"
                  //   style={{
                  //     background: "linear-gradient(to right, #AABBCC, #223344)",
                  //     borderRadius: "2rem",
                  //     color: "black",
                  //   }}
                >
                  <FaUserAlt />
                  <span className="mx-2">Varified</span>
                  <MdVerified />
                </div>
              </div>
            </div>
          </>
        )}
      </div> */}

      <div className="container my-5" style={{ padding: "2rem" }}>
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <button className="btn mb-2 me-2 effect">All NFTs</button>
              <button className="btn mb-2 me-2 effect">Arts</button>
              <button className="btn mb-2 me-2 effect">Sports</button>
              <button className="btn mb-2 me-2 effect">Photography</button>
              <div
                className="btn btn-primary ms-3"
                onClick={() => openFilter()}
                style={{ borderRadius: "1.5rem", padding: ".25rem 1rem" }}
              >
                <FaFilter />
                <span className="mx-2">Filter</span>
                {filter ? <FaAngleDown /> : <FaAngleUp />}
              </div>
            </div>
          </div>
        </div>
        {filter && (
          <>
            <hr className="my-3 styled-hr" />
            <div className="row">
              <div className="col-12">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start">
                  <div className="btn mx-1 mb-2 hover-effect">
                    <FaWallet style={{ fontSize: "1rem" }} />
                    <span className="mx-2">0.01 ETH - 10 ETH</span>
                    <AiFillCloseCircle style={{ fontSize: "1rem" }} />
                  </div>
                  <div
                    className="btn mx-1 mb-2 hover-effect"
                    onClick={() => openImage()}
                  >
                    <FaImages style={{ fontSize: "1rem" }} />
                    <span className="mx-2">Images</span>
                    {image ? (
                      <AiFillCloseCircle style={{ fontSize: "1rem" }} />
                    ) : (
                      <TiTick style={{ fontSize: "1rem" }} />
                    )}
                  </div>
                  <div
                    className="btn mx-1 mb-2 hover-effect"
                    onClick={() => openVideo()}
                  >
                    <FaVideo style={{ fontSize: "1rem" }} />
                    <span className="mx-2">Videos</span>
                    {video ? (
                      <AiFillCloseCircle style={{ fontSize: "1rem" }} />
                    ) : (
                      <TiTick style={{ fontSize: "1rem" }} />
                    )}
                  </div>
                  <div className="btn mx-1 mb-2 hover-effect">
                    <FaUserAlt />
                    <span className="mx-2">Verified</span>
                    <MdVerified />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Filter;
