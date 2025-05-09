import React from "react";
import USER1 from "../../images/user-1.png";
const Notification = () => {
  return (
    <div className="my-2  notification">
      <p>Notifications</p>
      <div className="Nbox">
        <div>
          <img
            src={USER1}
            alt="profile img"
            width={30}
            height={30}
            style={{ borderRadius: "40%" }}
          />
        </div>
        <div>
          <h6
            style={{
              color: "#007bff",
              display: "grid",
              justifyContent: "flex-start",
            }}
          >
            Usman Sherazi
          </h6>
          <p style={{ display: "grid", justifyContent: "flex-start" }}>
            Measure action your user...
          </p>
          <small style={{ display: "grid", justifyContent: "flex-start" }}>
            3 minutes ago
          </small>
        </div>
        <span></span>
      </div>
    </div>
  );
};

export default Notification;
