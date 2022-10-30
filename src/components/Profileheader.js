import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineCamera } from "react-icons/ai";

import profileImg from "../assets/Profile-pic.jpg.jpeg";

export default function Profileheader() {
  return (
    <div className="profile-container">
      <div className="profile-share-btn">
        <div className="profile-big-share-btn">
          <RiShareForwardLine />
        </div>
        <div className="profile-small-share-btn">
          <BsThreeDots />
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
