import React, { useState } from "react";
import NFT1 from "../../collectionPage/images/nft-image-1.png";
import NFT2 from "../../collectionPage/images/nft-image-2.png";
import NFT3 from "../../collectionPage/images/nft-image-3.png";
import NFT4 from "../../collectionPage/images/nft-image1.jpg";
import NFT5 from "../../collectionPage/images/nft-4.webp";
import USER1 from "../../components/images/user-1.png";
import USER2 from "../../components/images/user-2.png";
import USER3 from "../../components/images/user-3.png";
import USER4 from "../../components/images/user-4.png";
import USER5 from "../../components/images/user-6.png";
import USER6 from "../../components/images/user-8.png";
import USER8 from "../../components/images/user-9 (1).png";
import USER9 from "../../components/images/user-10.png";
import BG1 from "../../components/images/creatorbackground-1.jpeg";
import BG2 from "../../components/images/creatorbackground-2.jpeg";
import BG3 from "../../components/images/creatorbackground-3.jpeg";
import BG4 from "../../components/images/creatorbackground-4.jpg";
import BG5 from "../../components/images/creatorbackground-5.jpg";
import BG6 from "../../components/images/creatorbackground-8.jpg";
import BG7 from "../../components/images/creatorbackground-10.jpg";
import BG8 from "../../components/images/creatorbackground-11.jpg";
import AuthorMenuCard from "./AuthorMenuCard/AuthorMenuCard";
import AuthorMenuCard2 from "./AuthorMenuCard/AuthorMenuCard2";
import AuthorMenuCard3 from "./AuthorMenuCard/AuthorMenuCard3";

const AuthorMenu = () => {
  const CreatedArray = [
    {
      background: NFT1,
    },
    {
      background: NFT2,
    },
    {
      background: NFT3,
    },
    {
      background: NFT4,
    },
    {
      background: NFT5,
    },
    {
      background: NFT1,
    },
    {
      background: NFT3,
    },
  ];

  const LikedArray = [
    {
      background: NFT3,
    },
    {
      background: NFT2,
    },
    {
      background: NFT5,
    },
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
    // {
    //   background: BG6,
    //   user: USER2,
    // },
    // {
    //   background: BG6,
    //   user: USER5,
    // },
  ];

  const FollowArray = [
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

  const [created, setCreated] = useState(true);
  const [liked, setLiked] = useState(false);
  const [following, setFollowing] = useState(false);
  const [follow, setFollow] = useState(false);

  const openCreated = () => {
    if (!created) {
      setCreated(true);
      setLiked(false);
      setFollowing(false);
      setFollow(false);
    }
  };
  const openLiked = () => {
    if (!liked) {
      setCreated(false);
      setLiked(true);
      setFollowing(false);
      setFollow(false);
    }
  };
  const openFollowing = () => {
    if (!following) {
      setCreated(false);
      setLiked(false);
      setFollowing(true);
      setFollow(false);
    }
  };
  const openFollow = () => {
    if (!follow) {
      setCreated(false);
      setLiked(false);
      setFollowing(false);
      setFollow(true);
    }
  };
  return (
    <>
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
        <button className="btn bbnt" onClick={() => openCreated()}>
          Created
        </button>
        <button className="btn bbnt" onClick={() => openLiked()}>
          Liked
        </button>
        <button className="btn bbnt" onClick={() => openFollowing()}>
          Following
        </button>
        <button className="btn bbnt" onClick={() => openFollow()}>
          Follower
        </button>
      </div>

      {created && (
        <div className="container my-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {CreatedArray.map((el, i) => (
              <AuthorMenuCard key={i + 1} cardData={el} />
            ))}
          </div>
        </div>
      )}
      {liked && (
        <div className="container my-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4s">
            {LikedArray.map((el, i) => (
              <AuthorMenuCard key={i + 1} cardData={el} />
            ))}
          </div>
        </div>
      )}
      {following && (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4s">
            {FollowingArray.map((el, i) => (
              <AuthorMenuCard2 key={i + 1} cardData={el} />
            ))}
          </div>
        </div>
      )}

      {follow && (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4s">
            {FollowArray.map((el, i) => (
              <AuthorMenuCard3 key={i + 1} cardData={el} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AuthorMenu;
