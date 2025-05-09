import React from "react";
import { Link } from "react-router-dom";
const HelpCenter = () => {
  const help = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
  ];
  return (
    <div>
      {help.map((el, i) => (
        <div
          key={i + 1}
          style={{
            display: "grid",
            justifyContent: "flex-start",
            zIndex: "22222222222222",
          }}
          className="help"
        >
          {/* <a
            style={{ textDecoration: "none", color: "inherit" }}
            href={el.link}
          >
            {el.name}
          </a> */}
          <Link
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
            to={el.link}
          >
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
