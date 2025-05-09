import React from "react";
import BG2 from "../../components/images/creatorbackground-3.jpeg";
const Searching = () => {
  return (
    <>
      <div className="banner-container">
        <img src={BG2} alt="background" className="banner-image" />
      </div>

      <div className="container">
        <div
          className="card style-cards"
          style={{
            backgroundColor: "#80808012",
            borderRadius: "2rem",
            backgroundColor: "rgb(253 251 251 / 58%)",
            marginTop: "-8rem",
          }}
        >
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <div className="card-body my-5">
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-success my-2 my-sm-0" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <h1 style={{ fontWeight: "800", color: "#6c757d" }}>ALL NFTs</h1>
        <p style={{ color: "#6c757d" }}>
          Discover the most outstanding NFTs in all topics of life
        </p>
      </div>
    </>
  );
};

export default Searching;
