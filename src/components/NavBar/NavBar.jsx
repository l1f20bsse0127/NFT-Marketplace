import React, { useState } from "react";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import LOGO from "../images/Screenshot (132).png";
import USER1 from "../images/user-1.png";
import { useNavigate } from "react-router-dom";
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";
import { useContext } from "react";
const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [helpCenter, setHelpCenter] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideBarMenu, setOpenSideBarMenu] = useState(false);
  const navigate = useNavigate();
  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelpCenter(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelpCenter(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelpCenter(false);
      setNotification(false);
      setProfile(false);
    }
  };
  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelpCenter(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };
  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setNotification(false);
      setDiscover(false);
      setHelpCenter(false);
    } else {
      setProfile(false);
    }
  };

  //smart contract section:

  const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <img
          src={LOGO}
          alt="NFT LOGO"
          style={{ mixBlendMode: "multiply", width: "20%" }}
          // className="my-1"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <form
            className="navbar-nav mr-auto mt-2 mt-lg-0 mx-3 "
            style={{
              width: "28%",
              border: "2px solid gray",
              padding: ".3rem",
              borderRadius: "2rem",
              alignItems: "center",
              height: "2.5rem",
            }}
          >
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search NFT"
              style={{
                width: "90%",

                border: "none",
                outline: "none",
                backgroundColor: "transparent",
              }}
            />
            <BsSearch
              style={{ cursor: "pointer", fontSize: "1.5rem", color: "grey" }}
              onClick={() => {}}
            />
          </form>
          {/* end of the left section */}
          <ul
            className="form-inline my-2 my-lg-0"
            style={{
              gap: ".6rem",
              alignItems: "center",
              alignSelf: "flex-end",
            }}
          >
            <div style={{ position: "relative", cursor: "pointer" }}>
              <p onClick={(e) => openMenu(e)} className="my-1">
                <b style={{ color: "#6c757d" }}>Discover</b>
              </p>
              {discover && (
                <div
                  style={{
                    position: "absolute",
                    padding: "1rem",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                    fontSize: "1rem",
                    width: "15rem",
                    borderRadius: "1rem",
                    backgroundColor: "gray",
                    alignItems: "flex-start",
                    zIndex: "222222222222222",
                    // textDecoration: "none",
                    // color: "inherit",
                  }}
                >
                  <Discover />
                </div>
              )}
            </div>

            <div style={{ position: "relative", cursor: "pointer" }}>
              <p
                className="nav-link my-1"
                href="#"
                onClick={(e) => openMenu(e)}
              >
                <b style={{ color: "#6c757d" }}>Help Center</b>
              </p>
              {helpCenter && (
                <div
                  style={{
                    position: "absolute",
                    padding: "1rem",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                    fontSize: "1rem",
                    width: "15rem",
                    borderRadius: "1rem",
                    backgroundColor: "gray",
                    zIndex: "222222222222222",
                    // alignItems: "flex-start",
                    // textDecoration: "none",
                    // color: "inherit",
                  }}
                >
                  <HelpCenter />
                </div>
              )}
            </div>

            <div
              className="nav-link"
              href="#"
              style={{ position: "relative", cursor: "pointer" }}
            >
              <MdNotifications
                style={{ fontSize: "2rem" }}
                onClick={() => openNotification()}
              />
              {notification && <Notification />}
            </div>

            <div className="nav-link" href="#">
              {currentAccount == "" ? (
                <button
                  className="btn btn-primary"
                  onClick={() => connectWallet()}
                >
                  Connect
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/create")}
                >
                  Create
                </button>
              )}
            </div>

            <div
              className="nav-link"
              href="#"
              style={{ position: "relative", cursor: "pointer" }}
            >
              <div>
                <img
                  src={USER1}
                  alt="user"
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%" }}
                  onClick={() => openProfile()}
                />
                {profile && <Profile />}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
