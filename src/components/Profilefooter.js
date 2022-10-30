import React from "react";
import Zurilogo from "../assets/Zuri.Internship_Logo.png";
import FourteenGlogo from "../assets/I4G.png";

export default function Profilefooter() {
  return (
    <div className="profile-footer">
      <img className="profile-footer-logo" src={Zurilogo} alt="" />
      <p className="profile-footer-logo">HNG Internship 9 Frontend Task</p>
      <img className="profile-footer-logo" src={FourteenGlogo} alt="" />
    </div>
  );
}
