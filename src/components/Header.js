import React from "react";
import avatarShareIcon from "../assets/_Avatar share button.png";
import profileImg from "../assets/profile__img.png";
export default function Header() {
  return (
    <header>
      <div className="profile-container">
        <button className="profile-share-btn">
          <img src={avatarShareIcon} alt="" />
        </button>
        <img className="profile-img" src={profileImg} alt="" />
        <h5 className="profile-name"> Annette Black</h5>
      </div>
    </header>
  );
}
