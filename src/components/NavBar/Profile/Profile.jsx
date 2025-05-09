import React from "react";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import USER1 from "../../images/user-1.png";
const Profile = () => {
  return (
    <div className="my-4 profile">
      <div className="profile2">
        <img
          src={USER1}
          alt="profile img"
          width={50}
          height={50}
          style={{ borderRadius: "50%" }}
        />
        <div className="my-2">
          <p>Usman Sherazi</p>
          <small>XBF83663832</small>
        </div>
      </div>
      <div>
        <div>
          <div className="menuoneitem">
            <FaUserAlt />
            <p className="my-1">
              <a
                href="/myprofile"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                My Profile
              </a>
            </p>
          </div>
          <div className="menuoneitem">
            <FaRegImage />
            <p className="my-1">
              <a
                href="/my-items"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                My Item
              </a>
            </p>
          </div>
          <div className="menuoneitem">
            <FaUserEdit />
            <p className="my-1">
              <a
                href="/edit-profile"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Edit
              </a>
            </p>
          </div>
        </div>
        <div>
          <div className="menuoneitem">
            <MdHelpCenter />
            <p className="my-1">
              <a
                href="/help"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Help
              </a>
            </p>
          </div>
          <div className="menuoneitem">
            <TbDownload />
            <p className="my-1">
              <a
                href="/disconnect"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Disconnect
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
