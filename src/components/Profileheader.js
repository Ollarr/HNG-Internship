import React from "react";
// import avatarShareIcon from "../assets/_Avatar share button.png";
import { BsThreeDots } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
// import avatarShareIconMobile from "../assets/_Avatar share button-mobile.png";
import profileImg from "../assets/profile__img.png";

export default function Profileheader() {
  return (
    <div className="profile-container">
      {/* <button className="profile-share-btn">
        <img className="profile-big-share-btn" src={avatarShareIcon} alt="" />
        <img className="profile-small-share-btn" src={BsThreeDots} alt="" />
      </button> */}
      <div className="profile-share-btn">
        <div className="profile-big-share-btn">
          <RiShareForwardLine />
        </div>
        <div className="profile-small-share-btn">
          <BsThreeDots />
        </div>
      </div>
      {/* <div>{BsThreeDots}</div> */}

      <img id="profile__img" src={profileImg} alt="" />
      <h5 id="profile-name"> Annette Black</h5>
    </div>
  );
}
