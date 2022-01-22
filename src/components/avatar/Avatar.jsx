import React from "react";

function Avatar({ url, verified, size }) {
  return (
    <div className="avatar">
      <img className="image" src="images/avatar.png" />
      <img className="badge" src="images/verified.svg" />
    </div>
  );
}

export default Avatar;
