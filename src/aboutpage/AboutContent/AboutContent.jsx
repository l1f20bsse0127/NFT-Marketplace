import React from "react";
import HERO from "../images/hero-right1.webp";
import ME from "../images/Screenshot (143).png";
import ZS from "../images/female.jpg";
import MA from "../images/WhatsApp Image 2023-08-23 at 18.01.03.jpeg";
const AboutContent = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <h2>👋 About Us.</h2>
          <p style={{ color: "grey", textAlign: "left" }} className="my-5">
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content which inform,
            educate and entertain millions of people around the world.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img src={HERO} className="img-fluid" alt="Hero Image" />
        </div>
      </div>
      <div className="my-5" style={{ textAlign: "left" }}>
        <h2>⛱ Founder</h2>
        <p style={{ color: "grey" }}>
          We’re impartial and independent, and every day we create distinctive,
          world-class programmes and content
        </p>
        <div className="row">
          {" "}
          <div className="col-md-4">
            <div
              className="card"
              style={{
                width: "23rem",
                borderRadius: "1rem",
                border: "none",
                backgroundColor: "transparent",
                padding: "3rem",
              }}
            >
              <img
                src={ME}
                className="card-img-top"
                alt="..."
                style={{ height: "23rem", borderRadius: "3rem" }}
              />
              <div className="card-body">
                <h3>Usman Sherazi</h3>
                <p className="card-text">Co-Founder</p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div
              className="card"
              style={{
                width: "23rem",
                borderRadius: "1rem",
                border: "none",
                backgroundColor: "transparent",
                padding: "3rem",
              }}
            >
              <img
                src={ZS}
                className="card-img-top"
                alt="..."
                style={{ height: "23rem", borderRadius: "3rem" }}
              />
              <div className="card-body">
                <h3>Zainab Shahzad</h3>
                <p className="card-text">Co-Founder</p>
              </div>
            </div>
          </div> */}
          {/* <div className="col-md-12">
            <div
              className="card"
              style={{
                width: "23rem",
                borderRadius: "1rem",
                border: "none",
                backgroundColor: "transparent",
                padding: "3rem",
              }}
            >
              <img
                src={MA}
                className="card-img-top"
                alt="..."
                style={{ height: "23rem", borderRadius: "3rem" }}
              />
              <div className="card-body">
                <h3>Mustafa Asif</h3>
                <p className="card-text">Co-Founder</p>
              </div>
            </div>
          </div> */}
        </div>

        <div className="my-4">
          <h2>🚀 Fast Facts</h2>
          <p style={{ color: "grey" }}>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content.
          </p>

          <div className="row my-5">
            <div className="col-sm-4">
              <div className="card" style={{ borderRadius: "2rem" }}>
                <div className="card-body">
                  <h5 className="card-title">10 million</h5>
                  <p className="card-text">
                    Articles have been public around the world (as of Sept. 30,
                    2021).
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card" style={{ borderRadius: "2rem" }}>
                <div className="card-body">
                  <h5 className="card-title">100,000</h5>
                  <p className="card-text">
                    Registered users account (as of Sept. 30, 2021).
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card" style={{ borderRadius: "2rem" }}>
                <div className="card-body">
                  <h5 className="card-title">220+</h5>
                  <p className="card-text">
                    WCountries and regions have our presence (as of Sept. 30,
                    2021).
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
