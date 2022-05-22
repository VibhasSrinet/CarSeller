import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";
function Success() {
  return (
    <div className="Success">
      <div className="successBox">
        <img
          className="successImage"
          alt=""
          src={require("../../asset/details1.png")}
        />
        <p style={{ fontSize: "1.6rem" }}>
          Booking <b>Successful</b>
        </p>
        <div className="downloadText">
          <Link to="#">
            <p className="download">Download</p>
          </Link>
          <span>the booking summary</span>
        </div>
      </div>
      <div className="explore">
        <img alt="" src={require("../../asset/Explore.png")} />
        <div>
          <p> Explore more</p>
          <div className="explre-border"> </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
