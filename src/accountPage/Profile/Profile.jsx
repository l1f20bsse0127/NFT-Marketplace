import React, { useCallback, useState } from "react";
import USER from "../../components/images/user-1.png";
import { useDropzone } from "react-dropzone";

const Profile = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const onDrop = useCallback(async (acceptedFile) => {
    setFileUrl(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });
  return (
    <>
      <div className="container" style={{ textAlign: "left", padding: "6rem" }}>
        <h1>Profile settings</h1>
        <p style={{ color: "gray" }}>
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
        <hr className="my-4" />

        <div className="row">
          <div className="col-md-3">
            <img
              src={USER}
              width={130}
              height={130}
              style={{ borderRadius: "5rem" }}
              {...getRootProps()}
            />
            {/* <div className="overlayimg"></div> */}
            <button
              className="btn btn-success my-3"
              style={{ borderRadius: "2rem" }}
              {...getRootProps()}
            >
              Change Image
            </button>
          </div>
          <div className="col-md-9 mt-5">
            <h2>User Profile Form</h2>
            <form>
              <div className="form-group">
                <label for="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                  style={{ borderRadius: "3rem" }}
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  style={{ borderRadius: "3rem" }}
                />
              </div>
              <div className="form-group">
                <label for="bio">Bio</label>
                <textarea
                  className="form-control"
                  id="bio"
                  rows="3"
                  placeholder="Enter bio"
                  style={{ borderRadius: "1rem" }}
                ></textarea>
              </div>
              <div className="form-group">
                <label for="walletAddress">Wallet Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="walletAddress"
                  value="0x1bde388826caab77bfe80148abdce6830606e2c6"
                  readonly
                  style={{ backgroundColor: "#999999", borderRadius: "3rem" }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary my-4 btn-block"
                style={{
                  padding: ".5rem",
                  borderRadius: "3rem",
                  //   width: "39rem",
                }}
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
