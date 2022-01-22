import React from "react";

function Avatar({ verified }) {
  return (
    <div className="avatar">
      <img className="image" src="images/avatar.png" />
      <img className="badge" src="images/verified.svg" />
      {verified == false || verified}
    </div>
  );
}

export default Avatar;
