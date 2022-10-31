import React from "react";
import SlackIcon from "../assets/slack.png";
import GithubIcon from "../assets/Github icon.png";

export default function Profilelinks() {
  return (
    <div className="profile-links">
      <a href="https://twitter.com/DevOlarr">
        <button id="twitter" className="profile-link-btn">
          Twitter Link
        </button>
      </a>
      <a href="">
        <button id="slack" className="profile-link-btn">
          Slack Link
        </button>
      </a>
      <a href="https://training.zuri.team/">
        <button id="btn__zuri" className="profile-link-btn">
          Zuri Team
        </button>
      </a>
      <a href="http://books.zuri.team ">
        <button id="books" className="profile-link-btn">
          Zuri Books
        </button>
      </a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>, ">
        <button id="book__python" className="profile-link-btn">
          Python Books
        </button>
      </a>
      <a href="https://background.zuri.team ">
        <button id="pitch" className="profile-link-btn">
          Background Checks for Coders
        </button>
      </a>
      <a href="https://books.zuri.team/design-rules ">
        <button id="book__design" className="profile-link-btn">
          Design Books
        </button>
      </a>
      <div className="social-links">
        <a href=" ">
          <img className="social-link-icon" src={SlackIcon} alt="" />
        </a>
        <a href=" ">
          <img className="social-link-icon" src={GithubIcon} alt="" />
        </a>
      </div>
    </div>
  );
}
