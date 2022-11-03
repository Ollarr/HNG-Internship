import React from "react";
import Profileheader from "../components/Profileheader";
import Profilelinks from "../components/Profilelinks";
import Profilefooter from "../components/Profilefooter";

export default function Profile() {
  return (
    <div className="profile-section">
      <Profileheader />
      <Profilelinks />
      <Profilefooter />
    </div>
  );
}
