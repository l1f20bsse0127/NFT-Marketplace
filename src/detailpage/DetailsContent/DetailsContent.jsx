import React, { useState } from "react";
import NFT from "../../components/images/nft-image-1.png";
import { MdVerified, MdTimer, MdReportProblem } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import USER from "../../components/images/user-9 (1).png";
import USER2 from "../../components/images/user-10.png";
import USER3 from "../../components/images/user-6.png";
import USER4 from "../../components/images/user-2.png";
import USER5 from "../../components/images/user-3.png";
import USER6 from "../../components/images/user-4.png";
import USER7 from "../../components/images/user-5.png";
import COL from "../../components/images/creatorbackground-3.jpeg";
const DetailsContent = () => {
  const BidArray = [USER2, USER3, USER4, USER5];
  const ProArray = [USER6, USER7, USER3];
  const OwnerArray = [USER];
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(false);
  const [faq, setFaq] = useState(false);

  const openDescription = () => {
    if (!description) {
      setDescription(true);
      setDetails(false);
      setFaq(false);
    }
  };
  const openDetails = () => {
    if (!details) {
      setDescription(false);
      setDetails(true);
      setFaq(false);
    }
  };
  const openFAQ = () => {
    if (!faq) {
      setDescription(false);
      setDetails(false);
      setFaq(true);
    }
  };

  const [history, setHistory] = useState(true);
  const [pro, setPro] = useState(false);
  const [owner, setOwner] = useState(false);

  const openHistory = () => {
    if (!history) {
      setHistory(true);
      setPro(false);
      setOwner(false);
    }
  };
  const openPro = () => {
    if (!pro) {
      setHistory(false);
      setPro(true);
      setOwner(false);
    }
  };
  const openOwner = () => {
    if (!owner) {
      setHistory(false);
      setPro(false);
      setOwner(true);
    }
  };
  return (
    <div className="container my-5 detail">
      <div className="row">
        <div className="col-md-6 details">
          <img
            src={NFT}
            alt="nft-image"
            width={520}
            height={520}
            style={{ borderRadius: "2rem" }}
          />
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
            <button className="btn bbnt" onClick={() => openDescription()}>
              Description
            </button>
            <button className="btn bbnt" onClick={() => openDetails()}>
              Details
            </button>
            <button className="btn bbnt" onClick={() => openFAQ()}>
              FAQ
            </button>
          </div>

          {description && (
            <p
              style={{ textAlign: "left", color: "rgb(108, 117, 125)" }}
              className="my-5"
            >
              {" "}
              Tattooed Kitty Gang (“TKG”) is a collection of 666 badass kitty
              gangsters, with symbol of tattoos, living in the Proud Kitty Gang
              (“PKG”) metaverse. Each TKG is an 1/1 ID as gangster member & all
              the joint rights.
            </p>
          )}
          {details && (
            <div
              style={{ textAlign: "left", color: "rgb(108, 117, 125)" }}
              className="my-5"
            >
              <small>2000 x 2000 px.IMAGE(685KB)</small>
              <p>
                <b>Contract Address</b>
              </p>
              <p>0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a</p>
              <p>
                <b>Token ID</b>
              </p>
              <p>100300372864</p>
            </div>
          )}

          {faq && (
            <div
              style={{ textAlign: "left", color: "rgb(108, 117, 125)" }}
              className="my-5"
            >
              {" "}
              <b style={{ color: "red" }}>""</b>
              <p>
                All full-priced, unworn items, with tags attached and in their
                original packaging are eligible for return or exchange within 30
                days of placing your order.
              </p>
              <b style={{ color: "red" }}>""</b>
              <p>
                Please note, packs must be returned in full. We do not accept
                partial returns of packs.
              </p>
              <b style={{ color: "red" }}>""</b>
              <p>Want to know our full returns policies? Here you go.</p>
              <b style={{ color: "red" }}>""</b>
              <p>
                Want more info about shipping, materials or care instructions?
                Here!
              </p>
            </div>
          )}
        </div>
        <div className="col-md-6 details">
          <h2
            style={{
              fontWeight: "800",
              color: "#6c757d",
              textAlign: "left",
              padding: "2rem",
            }}
          >
            BearX #3636
            <span className="mx-3">
              <BsThreeDots style={{ color: "black" }} />
            </span>
          </h2>

          <div style={{ display: "flex" }}>
            <img
              src={USER}
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
            <div style={{ lineHeight: "0" }} className="mx-3">
              <p
                style={{
                  marginBottom: ".4rem",
                  marginTop: "1rem",
                  textAlign: "left",
                }}
              >
                Creator
              </p>
              <small style={{ color: "#6c757d" }}>
                Carli Costa
                <span>
                  <MdVerified style={{ color: "#007bff" }} />
                </span>
              </small>
            </div>

            <img
              src={COL}
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
            <div style={{ lineHeight: "0" }} className="mx-3">
              <p
                style={{
                  marginBottom: ".4rem",
                  marginTop: "1rem",
                  textAlign: "left",
                }}
              >
                Collection
              </p>
              <small style={{ color: "#6c757d" }}>
                Moon
                <span>
                  <MdVerified style={{ color: "#007bff" }} />
                </span>
              </small>
            </div>
          </div>

          <hr style={{ color: "gray" }} />

          <div
            className="my-3"
            style={{
              background: "#ff87933b",
              padding: "4rem",
              borderRadius: "2rem",
            }}
          >
            <div className="address-box">
              <p className="address my-2">1.000 ETH</p>
              <span>
                $221,21{" "}
                <span style={{ color: "#c90000" }}>
                  <b>in Dollars</b>
                </span>
              </span>
              <button className="border-button">Current Bid</button>
            </div>
            <div style={{ display: "flex" }} className="my-4">
              <MdTimer style={{ fontSize: "1.5rem", color: "#6c757d" }} />
              <p className="card-text">
                <b style={{ color: "#6c757d" }}>Auction Ending in</b>
              </p>
            </div>

            <div style={{ display: "flex", gap: "2rem" }}>
              <div>
                <h1 style={{ fontWeight: "800", color: "#6c757d" }}>2</h1>
                <span>days</span>
              </div>
              <div>
                <h1 style={{ fontWeight: "800", color: "#6c757d" }}>12</h1>
                <span>hours</span>
              </div>
              <div>
                <h1 style={{ fontWeight: "800", color: "#6c757d" }}>30</h1>
                <span>minutes</span>
              </div>
              <div>
                <h1 style={{ fontWeight: "800", color: "#6c757d" }}>45</h1>
                <span>seconds </span>
              </div>
            </div>

            <div className="my-5 d-flex justify-content-center">
              <button
                className="btn btn-primary mx-4"
                //   style={{ padding: "1rem" }}
              >
                Place a bid
              </button>
              <button
                className="btn btn-primary mx-4"
                //   style={{ padding: "1rem" }}
              >
                Make Offer
              </button>
            </div>
          </div>

          <div
            className="container"
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              width: "100%", // Adjusted width to 100%
              maxWidth: "28rem", // Added maximum width
              borderRadius: "3rem",
              // padding: "1rem", // Added padding for better spacing
              flexWrap: "wrap", // Allow flex items to wrap on smaller screens
            }}
          >
            <button
              className="btn bbnt"
              onClick={() => openHistory()}
              style={{ marginBottom: "1rem", flex: "1" }}
            >
              Bid History
            </button>
            <button
              className="btn bbnt"
              onClick={() => openPro()}
              style={{ marginBottom: "1rem", flex: "1" }}
            >
              Provenance
            </button>
            <button
              className="btn bbnt"
              onClick={() => openOwner()}
              style={{ marginBottom: "1rem", flex: "1" }}
            >
              Owner
            </button>
          </div>

          {history && (
            <div className="my-5">
              {BidArray.map((el, i) => (
                <>
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                    className="mx-4"
                  >
                    <img
                      src={el}
                      width={40}
                      height={40}
                      style={{ borderRadius: "50%", marginRight: "10px" }}
                      alt={`Profile ${i + 1}`}
                    />
                    <div>
                      <small>
                        Placed a bid $500 by{" "}
                        <span>
                          <b>Matina...</b>
                        </span>
                      </small>
                      <small style={{ color: "red" }}> jun 14 - 4:15</small>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>
          )}
          {pro && (
            <div className="my-5">
              {ProArray.map((el, i) => (
                <>
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                    className="mx-4"
                  >
                    <img
                      src={el}
                      width={40}
                      height={40}
                      style={{ borderRadius: "50%", marginRight: "10px" }}
                      alt={`Profile ${i + 1}`}
                    />
                    <div>
                      <small>
                        Minted by{" "}
                        <span>
                          <b>Sara...</b>
                        </span>
                      </small>
                      <small style={{ color: "red" }}> jun 14 - 4:15</small>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>
          )}

          {owner && (
            <div className="my-5">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
                className="mx-4"
              >
                <img
                  src={USER}
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%", marginRight: "10px" }}
                  // alt={`Profile ${i + 1}`}
                />
                <div>
                  <small>
                    <b>Owner</b>
                  </small>
                  <small style={{ color: "red" }}>
                    {" "}
                    Carli Costa{" "}
                    <span>
                      {" "}
                      <MdVerified style={{ color: "#007bff" }} />
                    </span>
                  </small>
                </div>
              </div>
              <hr />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsContent;
