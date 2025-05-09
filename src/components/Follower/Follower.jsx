import React, { useState } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";
import USER1 from "../images/user-1.png";
import USER2 from "../images/user-2.png";
import USER3 from "../images/user-3.png";
import USER4 from "../images/user-4.png";
import USER5 from "../images/user-5.png";
import USER6 from "../images/user-6.png";
import USER8 from "../images/user-8.png";
import USER9 from "../images/user-9 (1).png";
import USER10 from "../images/user-10.png";
import BG1 from "../images/creatorbackground-1.jpeg";
import BG2 from "../images/creatorbackground-2.jpeg";
import BG3 from "../images/creatorbackground-3.jpeg";
import BG4 from "../images/creatorbackground-4.jpg";
import BG5 from "../images/creatorbackground-5.jpg";
import BG6 from "../images/creatorbackground-8.jpg";
import BG7 from "../images/creatorbackground-10.jpg";
import BG8 from "../images/creatorbackground-11.jpg";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";
const Follower = () => {
  // const CardArray = [USER1, USER2, USER3, USER4, USER5, USER6, USER9, USER8];

  const CardArray = [
    {
      background: BG1,
      user: USER1,
    },
    {
      background: BG2,
      user: USER2,
    },
    {
      background: BG3,
      user: USER3,
    },
    {
      background: BG4,
      user: USER4,
    },
    {
      background: BG8,
      user: USER5,
    },
    {
      background: BG6,
      user: USER6,
    },
    {
      background: BG7,
      user: USER8,
    },
    // {
    //   background: BG8,
    //   user: USER9,
    // },
  ];

  const FollowingArray = [
    {
      background: BG8,
      user: USER8,
    },
    {
      background: BG7,
      user: USER9,
    },
    {
      background: BG3,
      user: USER3,
    },
    {
      background: BG2,
      user: USER4,
    },
    {
      background: BG4,
      user: USER1,
    },
    {
      background: BG6,
      user: USER6,
    },
  ];

  const NewsArray = [
    {
      background: BG8,
      user: USER8,
    },
    {
      background: BG7,
      user: USER9,
    },
    {
      background: BG3,
      user: USER3,
    },
    {
      background: BG2,
      user: USER4,
    },
  ];
  // const FollowingArray = [USER10, USER3, USER2, USER9, USER5, USER6];
  // const NewsArray = [USER1, USER4, USER9, USER8];

  const [popular, setPopular] = useState(true);
  const [follow, setFollow] = useState(false);
  const [news, setNews] = useState(false);

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollow(false);
      setNews(false);
    }
  };
  const openFollowing = () => {
    if (!follow) {
      setPopular(false);
      setFollow(true);
      setNews(false);
    }
  };
  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollow(false);
      setNews(true);
    }
  };
  return (
    <>
      <h1 style={{ fontWeight: "800", color: "#6c757d" }}>Top List Creators</h1>
      <div
        className="container"
        style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          width: "28rem",
          borderRadius: "3rem",
        }}
      >
        <button className="btn bbnt" onClick={() => openPopular()}>
          <RiUserUnfollowFill className="mx-1" /> Popular
        </button>
        <button className="btn bbnt" onClick={() => openFollowing()}>
          <RiUserFollowFill className="mx-1" /> Following
        </button>
        <button className="btn bbnt" onClick={() => openNews()}>
          <RiAwardLine className="mx-1" /> New
        </button>
      </div>

      {popular && (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {CardArray.map((el, i) => (
              <FollowerTabCard key={i + 1} cardData={el} />
            ))}
          </div>
        </div>
      )}
      {follow && (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {FollowingArray.map((el, i) => (
              <FollowerTabCard key={i + 1} cardData={el} />
            ))}
          </div>
        </div>
      )}
      {news && (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {NewsArray.map((el, i) => (
              <FollowerTabCard key={i + 1} cardData={el} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Follower;
