import React from "react";
import SERVICE1 from "../images/service-1.png";
import SERVICE2 from "../images/service-2.png";
import SERVICE3 from "../images/service-3.png";
import SERVICE4 from "../images/service-4.png";
const Service = () => {
  return (
    <div
      className="container my-5"
      style={{ padding: "4rem", textAlign: "justify" }}
    >
      <div className="row">
        <div className="col-md-3">
          <img src={SERVICE1} alt="filter" width={100} height={100} />
          <p style={{ color: "#6c757d" }}>
            <span>
              <b>Step 1</b>
            </span>
          </p>
          <h3 style={{ color: "#007bff" }}>Filter & Discover</h3>
          <p style={{ color: "#6c757d" }}>
            Connect with wallet, discover, buy NFTs, sell your NFTs and earn
            Money.
          </p>
        </div>

        <div className="col-md-3">
          <img src={SERVICE2} alt="filter" width={100} height={100} />
          <p style={{ color: "#6c757d" }}>
            <span>
              <b>Step 2</b>
            </span>
          </p>
          <h3 style={{ color: "#007bff" }}>Filter & Discover</h3>
          <p style={{ color: "#6c757d" }}>
            Connect with wallet, discover, buy NFTs, sell your NFTs and earn
            Money.
          </p>
        </div>

        <div className="col-md-3">
          <img src={SERVICE3} alt="filter" width={100} height={100} />
          <p style={{ color: "#6c757d" }}>
            <span>
              <b>Step 3</b>
            </span>
          </p>
          <h3 style={{ color: "#007bff" }}>Connect Wallet</h3>
          <p style={{ color: "#6c757d" }}>
            Connect with wallet, discover, buy NFTs, sell your NFTs and earn
            Money.
          </p>
        </div>

        <div className="col-md-3">
          <img src={SERVICE4} alt="filter" width={100} height={100} />
          <p style={{ color: "#6c757d" }}>
            <span>
              <b>Step 4</b>
            </span>
          </p>
          <h3 style={{ color: "#007bff" }}>Start Trading</h3>
          <p style={{ color: "#6c757d" }}>
            Connect with wallet, discover, buy NFTs, sell your NFTs and earn
            Money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
