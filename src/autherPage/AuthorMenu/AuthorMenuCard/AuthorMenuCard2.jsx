import React, { useState } from "react";
import { MdVerified } from "react-icons/md";

const AuthorMenuCard2 = ({ cardData }) => {
  const [following, setFollowing] = useState(true);

  const follow = () => {
    setFollowing((prevFollowing) => !prevFollowing);
  };
  return (
    <div className="col mb-4 my-5">
      <div
        className="card style-cards"
        style={{
          width: "18rem",
          backgroundColor: "#80808012",
          borderRadius: "2rem",
        }}
      >
        <div className="card-body d-flex align-items-center position-relative">
          <img
            className="card-img-top"
            src={cardData.background}
            alt="Card image cap"
            //   width={286}
            //   height={160}
            style={{ borderRadius: "1.5rem" }}
          />
          <img
            src={cardData.user}
            width={50}
            height={50}
            className="follower-image"
          />
          <div className="follower-image-overlay"></div>
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
                // marginTop: "1rem",
                color: "#6c757d",
                textAlign: "justify",
              }}
            >
              <b>Amaris Pit</b>
              <span>
                <MdVerified style={{ color: "#007bff" }} />
              </span>
            </p>
            <p
              style={{ color: "#6c757d", textAlign: "justify" }}
              className="my-3"
            >
              12.331{" "}
              <span style={{ color: "#bd2130", fontWeight: "500" }}>ETH</span>
            </p>
          </div>
          {following ? (
            <button
              className="btn btn-secondary mx-4"
              style={{ width: "5.5rem", borderRadius: "2rem" }}
              onClick={() => follow()}
            >
              Following
            </button>
          ) : (
            <button
              className="btn btn-primary mx-4"
              style={{ borderRadius: "2rem" }}
              onClick={() => follow()}
            >
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorMenuCard2;
