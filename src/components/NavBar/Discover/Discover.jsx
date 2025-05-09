import React from "react";
import { Link } from "react-router-dom";

const Discover = () => {
  const discover = [
    {
      name: "Collection",
      link: "/collection",
    },
    {
      name: "Search",
      link: "/search",
    },
    {
      name: "Auther Profile",
      link: "/auther-profile",
    },
    {
      name: "NFT Details",
      link: "/nft-details",
    },
    {
      name: "Account Setting",
      link: "/account-setting",
    },
    {
      name: "Connect Wallet",
      link: "/Connect",
    },
  ];
  return (
    <div style={{ position: "relative", zIndex: 1000 }}>
      {discover.map((el, i) => (
        <div
          style={{ display: "grid", justifyContent: "flex-start" }}
          key={i + 1}
          className="discover"
        >
          {/* <a
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
            href={el.link}
          >
            {el.name}
          </a> */}
          {/* <Link to={el.link}>{el.name}</Link> */}
          <Link
            to={el.link}
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
