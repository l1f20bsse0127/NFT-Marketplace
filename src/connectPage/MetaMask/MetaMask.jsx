import React from "react";
import META from "../images/timthumb (1).jpg";
import BG2 from "../../components/images/creatorbackground-2.jpeg";

const MetaMask = () => {
  return (
    <div>
      <div className="banner-container">
        <img src={BG2} alt="background" className="banner-image" />
      </div>
      <div className="container">
        <div
          className="card style-cards"
          style={{
            backgroundColor: "#80808012",
            borderRadius: "2rem",
            backgroundColor: "rgb(253 251 251 / 72%)",
            marginTop: "-8rem",
          }}
        >
          <div className="row">
            {/* <div className="col-md-4"></div> */}
            <div className="col-md-12">
              <div className="card-body my-5">
                <form
                  className="form-inline my-2 my-lg-0"
                  //   style={{ textAlign: "left" }}
                >
                  <div style={{ textAlign: "left" }}>
                    {" "}
                    <h1>Connect your wallet.</h1>
                    <p style={{ color: "grey" }}>
                      Connect with one of our available wallet providers or
                      create a new one.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container d-flex justify-content-center"
        style={{ padding: "6rem" }}
      >
        <div
          className="card"
          style={{
            width: "25rem",
            padding: "3rem",
            backgroundColor: "transparent",
            borderRadius: "2rem",
            boxShadow: "rgb(204 122 0) 0px 10px 10px",
          }}
        >
          <img
            className="card-img-top my-3"
            src={META}
            alt="Card image cap"
            style={{ borderRadius: "2rem" }}
          />
          <div className="card-body">
            <h5 className="card-text">Connect with MetaMask</h5>
            <button className="btn  glow-on-hover my-3">Connect</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaMask;
