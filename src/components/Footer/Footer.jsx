import React from "react";
import { Discover, HelpCenter } from "../NavBar/index";
import LOGO from "../images/Screenshot (132).png";
import MONKEY from "../images/monkeyimg.jpg";
const Footer = () => {
  return (
    <div className=" my-5">
      <footer
        className="text-center text-lg-start text-white"
        // style="background-color: #45526e"
        style={{ backgroundColor: "#45526e" }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div
                className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3"
                style={{ textAlign: "left" }}
              >
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  NFT SHOP
                </h6>

                <p>
                  Welcome to NFT Shop, a unique web app that lets you buy and
                  sell special digital items called NFTs using crypto currencies
                  like Ethereum.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6
                  className="text-uppercase mb-4 font-weight-bold"
                  style={{ display: "grid", justifyContent: "flex-start" }}
                >
                  Discover
                </h6>

                <Discover />
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6
                  className="text-uppercase mb-4 font-weight-bold"
                  style={{ display: "grid", justifyContent: "flex-start" }}
                >
                  Help Center
                </h6>
                <HelpCenter />
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold"></h6>
                <img
                  src={MONKEY}
                  width={100}
                  height={100}
                  style={{ borderRadius: "5rem" }}
                />
                <h3 className="my-3">NFT SHOP</h3>
                <small>Let's do Shopping</small>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-10 text-center text-md-start">
                <div
                  className="p-3"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  © 2023 Copyright:
                  <a className="text-white"> nftshop.com</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
