import React from "react";
import Profileheader from "./Profileheader";
import Profilelinks from "./Profilelinks";
import Profilefooter from "./Profilefooter";

export default function Profile() {
  return (
    <div className="profile-section">
      <Profileheader />
      <Profilelinks />
      <Profilefooter />
    </div>
  );
}
