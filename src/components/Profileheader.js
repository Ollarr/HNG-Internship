import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import avatarShareIcon from "../assets/_Avatar share button.png";
import avatarSharIconMobile from "../assets/_Avatar share button-mobile.png";

import profileImg from "../assets/Profile-pic.jpg.jpeg";

export default function Profileheader() {
  return (
    <div className="profile-container">
      <div className="profile-share-btn">
        <div className="profile-big-share-btn">
          <img src={avatarShareIcon} alt="" />{" "}
        </div>
        <div className="profile-small-share-btn">
          <img src={avatarSharIconMobile} alt="" />{" "}
        </div>
      </div>
      <div className="profile-img-container">
        <img id="profile__img" src={profileImg} alt="" />
        <div className="profile-img-overlay">
          <div className="camera-icon">
            <AiOutlineCamera />
          </div>
        </div>
      </div>
      <h5 id="profile-name">Oluwasegun Oluyedi</h5>
    </div>
  );
}
