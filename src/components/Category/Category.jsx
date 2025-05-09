import React from "react";
import { BsCircleFill } from "react-icons/bs";
import ENTER from "../images/Screenshot (134).png";
import ART from "../images/nft-image1.jpg";
import SPORTS from "../images/sports.jpg";
import MUSIC from "../images/music.png";
const Category = () => {
  const CategoryArray = [1, 2, 3, 4];
  return (
    <>
      <div style={{ marginTop: "8rem" }}>
        <h1 style={{ fontWeight: "800", color: "#6c757d" }}>
          Browse by Category
        </h1>
        <p style={{ color: "#6c757d" }}>
          Explore the NFTs in the most featured Categories
        </p>
      </div>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col mb-4">
            <div
              className="card custom-card"
              style={{
                // width: "18rem",
                backgroundColor: "#80808012",
                borderRadius: "2rem",
              }}
            >
              <img
                className="card-img-top"
                src={ENTER}
                alt="Card image cap"
                width={286}
                height={160}
                style={{ borderRadius: "1.5rem" }}
              />
              <div className="card-body d-flex align-items-center">
                <BsCircleFill
                  style={{ fontSize: "2.9rem", color: "#dc3545" }}
                  //   className="mx-5"
                />
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
                      // marginTop: "1rem",
                      color: "#6c757d",
                      textAlign: "justify",
                    }}
                  >
                    <b>Entertainment</b>
                  </p>
                  <p
                    style={{ color: "#6c757d", textAlign: "justify" }}
                    className="my-3"
                  >
                    1200 NFTs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div
              className="card custom-card"
              style={{
                // width: "18rem",
                backgroundColor: "#80808012",
                borderRadius: "2rem",
              }}
            >
              <img
                className="card-img-top"
                src={ART}
                alt="Card image cap"
                width={286}
                height={160}
                style={{ borderRadius: "1.5rem" }}
              />
              <div className="card-body d-flex align-items-center">
                <BsCircleFill
                  style={{ fontSize: "2.9rem", color: "rgb(119 53 220)" }}
                  //   className="mx-5"
                />
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
                      // marginTop: "1rem",
                      color: "#6c757d",
                      textAlign: "justify",
                    }}
                  >
                    <b>Arts</b>
                  </p>
                  <p
                    style={{ color: "#6c757d", textAlign: "justify" }}
                    className="my-3"
                  >
                    100 NFTs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div
              className="card custom-card"
              style={{
                // width: "18rem",
                backgroundColor: "#80808012",
                borderRadius: "2rem",
              }}
            >
              <img
                className="card-img-top"
                src={SPORTS}
                alt="Card image cap"
                width={286}
                height={160}
                style={{ borderRadius: "1.5rem" }}
              />
              <div className="card-body d-flex align-items-center">
                <BsCircleFill
                  style={{ fontSize: "2.9rem", color: "#17a2b8" }}
                  //   className="mx-5"
                />
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
                      // marginTop: "1rem",
                      color: "#6c757d",
                      textAlign: "justify",
                    }}
                  >
                    <b>Sports</b>
                  </p>
                  <p
                    style={{ color: "#6c757d", textAlign: "justify" }}
                    className="my-3"
                  >
                    100 NFTs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div
              className="card custom-card"
              style={{
                // width: "18rem",
                backgroundColor: "#80808012",
                borderRadius: "2rem",
              }}
            >
              <img
                className="card-img-top"
                src={MUSIC}
                alt="Card image cap"
                width={286}
                height={160}
                style={{ borderRadius: "1.5rem" }}
              />
              <div className="card-body d-flex align-items-center">
                <BsCircleFill
                  style={{ fontSize: "2.9rem", color: "#d39e00" }}
                  //   className="mx-5"
                />
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
                      // marginTop: "1rem",
                      color: "#6c757d",
                      textAlign: "justify",
                    }}
                  >
                    <b>Music</b>
                  </p>
                  <p
                    style={{ color: "#6c757d", textAlign: "justify" }}
                    className="my-3"
                  >
                    100 NFTs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
