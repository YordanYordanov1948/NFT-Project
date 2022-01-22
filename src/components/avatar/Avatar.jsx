import React from "react";

function Avatar({ size, url, verified }) {
  return (
    <div className="avatar">
      <img className="image" src={(url = "images/avatar.png")}></img>
    </div>
  );
}

export default Avatar;
