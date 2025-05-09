import React from "react";
import { BsImage } from "react-icons/bs";
import { MdTimer } from "react-icons/md";

const AuthorMenuCard = ({ cardData }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div
        className="card custom-card"
        style={{
          backgroundColor: "#80808012",
          borderRadius: "2rem",
        }}
      >
        <img
          className="card-img-top"
          src={cardData.background}
          alt="img"
          width={286}
          height={160}
          style={{ borderRadius: "1.5rem" }}
        />

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
              </span>
            </p>
            <hr />
            <div className="address-box2">
              <p className="address my-2">1.000ETH</p>
              <small style={{ color: "red", fontSize: ".8rem" }}>
                <MdTimer color="grey" fontSize=".9rem" />
                14 hours left
              </small>
              <button className="border-button2">Bid</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorMenuCard;
