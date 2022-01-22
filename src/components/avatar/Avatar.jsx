import React from "react";

function Avatar({ url, verified, size }) {
  return (
    <div className="avatar">
      <img className="image" src="images/avatar.png" />
      <img src="badge" src="images/verified.svg" />
    </div>
  );
}

export default Avatar;
