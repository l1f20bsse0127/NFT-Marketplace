import React from "react";
import BG1 from "../../components/images/creatorbackground-4.jpg";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
const Contacts = () => {
  return (
    <>
      <div className="banner-container">
        <img src={BG1} alt="background" className="banner-image" />
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
                <form className="form-inline my-2 my-lg-0">
                  <h1>CONTACT US</h1>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container contact "
        style={{ backgroundColor: "#faebd77d" }}
      >
        <div className="contact-details" style={{ textAlign: "left" }}>
          <h3>Address</h3>
          <p>Photo booth tattooed prism</p>
          <h3 className="my-2">Email</h3>
          <p>example@example.com</p>
          <h3 className="my-2">Phone</h3>
          <p>000-123-456-7890</p>
          <div className="social-icons">
            <a href="https://www.instagram.com">
              <FaInstagram size={30} style={{ color: "#ff0081" }} />
            </a>
            <a href="https://www.facebook.com">
              <FaFacebook size={30} style={{ color: "#007bff" }} />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter size={30} style={{ color: "#007bff" }} />
            </a>
          </div>
        </div>
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacts;
